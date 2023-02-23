import { createContext } from "react";

interface TabTypes {
    tab: string,
    setTab: (s: string) => void
}

export const TabContext = createContext<TabTypes>({ tab: '', setTab: () => { } });