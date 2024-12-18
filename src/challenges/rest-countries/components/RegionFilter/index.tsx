import { FiChevronDown } from "react-icons/fi";
import { atom, useAtom } from "jotai";
import { useCountriesStore } from "../../context/useCountriesStore.js";
import { useMemo, useRef } from "react";
import { api } from "../../api.js";
import { MdClose } from "react-icons/md";
import { useOutsideClick } from '@/hooks/useOutsideClick';

const defaultOpenRegionsOptions = atom(false);
export default function RegionFilter() {
	const [isOpen, setIsOpen] = useAtom(defaultOpenRegionsOptions);
	const { setCountries, regionSelected, setRegionSelected } = useCountriesStore();
	const triggerRef = useRef<HTMLButtonElement>(null);

	const listRef = useOutsideClick<HTMLUListElement>(() => {
		setIsOpen(false);
	});

	const regions = useMemo(() => {
		return [
			...new Set(
				api?.map((country) => {
					return country.region;
				})
			),
		].sort((a, b) => a.localeCompare(b));
	}, []);

	const hasRegionSelected = useMemo(() => {
		return regionSelected !== undefined && regionSelected.length;
	}, [regionSelected]);

	const handleClickRegionFilter = (region: string) => {
		const filteredCountries = api?.filter((country) => country.region === region);
		setRegionSelected(region);
		setCountries(filteredCountries);
		setIsOpen(false);
	};

	const handleClearSelectedRegion = () => {
		if (!regionSelected) return;
		setRegionSelected(undefined);
	};

	return (
		<div className="relative">
			<button
				ref={triggerRef}
				className={`bg-[var(--rest-white)] dark:bg-[var(--rest-dark-blue)] flex items-center gap-4 py-3 px-4 rounded-md w-48 justify-between transition dark:text-[var(--rest-white)] ${
					isOpen ? "shadow-lg" : "shadow-md"
				}`}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				<span className="flex-1 text-left">
					{hasRegionSelected ? regionSelected : "Filter by Region"}
				</span>
				<span
					className={`transform transition ${
						isOpen && !hasRegionSelected ? "-rotate-180" : "rotate-0"
					}`}
					onClick={handleClearSelectedRegion}
				>
					{hasRegionSelected ? <MdClose /> : <FiChevronDown />}
				</span>
			</button>
			<ul
				ref={listRef}
				className={`bg-[var(--rest-white)] dark:bg-[var(--rest-dark-blue)] absolute shadow-lg hover:shadow-xl w-48 top-14 rounded-md py-4 px-0 text-base flex-col gap-1 transition ${
					isOpen ? "pointer-events-auto flex opacity-100" : "pointer-events-none hidden opacity-0"
				}`}
			>
				{regions.map((region, id) => (
					<li
						key={region}
						id={`${id}`}
						className="hover:bg-[var(--rest-very-light-gray)] dark:hover:bg-[var(--rest-very-dark-blue)] transition px-4 py-1 cursor-pointer dark:text-[var(--rest-very-light-gray)]"
						onClick={() => handleClickRegionFilter(region)}
					>
						{region}
					</li>
				))}
			</ul>
		</div>
	);
}
