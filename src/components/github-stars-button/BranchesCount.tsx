import axios from "axios";
import { GitBranchIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function BranchesCount() {
	const [branchesCount, setBranchesCount] = useState<number | null>(null);

	useEffect(() => {
		const fetchBranchesCount = async () => {
			if (branchesCount !== null) return; // Evitar hacer la solicitud si ya se tiene el valor

			try {
				const response = await axios.get(
					"https://api.github.com/repos/mrLuisFer/js-challenges-hub/branches"
				);

				if (response.status !== 200) {
					throw new Error("Invalid response status.");
				}

				const data = response.data;
				setBranchesCount(data.length); // Asumiendo que la respuesta tiene la estructura esperada
			} catch (err) {
				console.error("Error fetching branches count:", err);
			}
		};

		fetchBranchesCount();
	}, [branchesCount]); // La dependencia es branchesCount, pero la comprobación evita llamadas adicionales

	if (branchesCount === null) {
		return <span>Loading branches count...</span>;
	}

	return (
		<div className="flex items-center gap-1">
			<GitBranchIcon size={16} strokeWidth={2} />
			Branches: {branchesCount}
		</div>
	);
}
