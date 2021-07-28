import { useEffect, useState } from "react";
import Results from "../models/Results";
import ProductsUtils from "../utils/ProductsUtils";

export const useFetchResults=(query:string)=>{
    const [results, setResults] = useState<Results>({author:{lastname:"",name:""},items:[],categories:[]});
    const [loading, setLoading] = useState(false);
    useEffect( ()=>{   
        setLoading(true);           
        ProductsUtils.getResults(query).then(response=>{
            setResults(response);
            setLoading(false);
        }).catch(err=>{            
            setLoading(false);
        });
    },[query]);

    return {results,loading};
};