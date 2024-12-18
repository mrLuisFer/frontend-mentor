import { Badge } from "@/components/ui/badge";

export default function Tag({ name }: { name: string }) {
	return <Badge className="rounded-md px-2 py-1 font-semibold dark:text-white">{name}</Badge>;
}
