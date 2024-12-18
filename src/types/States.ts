import type { SetStateAction } from "jotai";
import type { Dispatch } from "react";

export type SetStateFunc = Dispatch<SetStateAction<boolean>> | undefined;
