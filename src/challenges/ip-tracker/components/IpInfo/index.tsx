import { useMapStore } from "../../lib/store/useMapStore.js";
import Item from "./Item.js";
import Separator from "./Separator.js";

export default function IpInfo() {
	const { userLocation } = useMapStore();

	return (
		<div className="absolute top-[20%] md:top-1/4 left-0 right-0 mx-auto bg-white py-6 px-8 z-[1000] rounded-xl w-80 md:w-[700px] xl:w-auto lg:max-w-5xl h-fit lg:h-[140px] flex md:grid md:grid-cols-2 lg:flex flex-col lg:flex-row lg:flex-nowrap items-center md:items-start justify-between gap-2 md:gap-3">
			<Item label="IP Address" value={userLocation?.ip} />
			<Separator />
			<Item
				label="Location"
				value={`${userLocation?.location.city} ${userLocation?.location.postalCode}`}
			/>
			<Separator />
			<Item label="Timezone" value={userLocation?.location.timezone} />
			<Separator />
			<Item label="isp" value={userLocation?.isp} />
		</div>
	);
}
