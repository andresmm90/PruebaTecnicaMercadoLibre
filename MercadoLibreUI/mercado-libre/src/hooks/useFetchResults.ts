import { useEffect, useState } from "react";
import Results from "../models/Results";
import ProductsUtils from "../utils/ProductsUtils";

export const useFetchResults=(query:string)=>{
    const [results, setResults] = useState<Results>({author:{lastname:"",name:""},items:[],categories:[]});
    useEffect( ()=>{              
        ProductsUtils.getResults(query).then(response=>{
            setResults(response);
        });
    },[query]);

    return results;
};