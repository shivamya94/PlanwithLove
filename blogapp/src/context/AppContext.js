import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

function AppContextProvider({children}) {
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    cosnt [totalPages, setTotalPages] = useState(null);
}