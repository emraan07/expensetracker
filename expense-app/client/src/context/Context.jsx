import { createContext } from "react";

export const data = {
    transactions: [],
    error: null,
    loading: true
}

export const Context = createContext(data);