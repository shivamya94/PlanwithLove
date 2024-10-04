import { useState } from "react";
import { createContext } from "react";
import { baseUrl } from "../baseUrl";

//step1
export const AppContext = createContext();

export function AppContextProvider({children}) {
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    //data filling pending
    const  fetchBlogPosts = async(page = 1, tag=null, category) => {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag) {
            url += `&tag=${tag}`;
        }
        if(category) {
            url += `&category=${category}`
        }
        try {
            const result = await fetch(url);
            const data = await result.json();
            if (!data.posts || data.posts.length === 0)
                throw new Error("Something Went Wrong");
            console.log("Api Response", data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);

        }
        catch(error) {
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);

        }
        setLoading(false);
        
    }

    //Handle When Next and Previous button are clicked

    const handlePageChange =(page)=> {
        setPage(page);
        console.log(page);
        fetchBlogPosts(page);

    };

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange,

    };


    //step 2

    return <AppContext.Provider value ={value}>
        {children}
    </AppContext.Provider>
} 
