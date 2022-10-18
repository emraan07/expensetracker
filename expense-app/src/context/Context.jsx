import { createContext } from "react";

export const data = {
    transactions: []
}

export const Context = createContext(data);