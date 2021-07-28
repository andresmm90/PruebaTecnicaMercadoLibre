import { useEffect, useState } from "react";
import Detail from "../models/Detail";
import ProductsUtils from "../utils/ProductsUtils";

export const useFetchDetails=(id:string)=>{
    const [detail, setDetail] = useState<Detail>({author:{lastname:"",name:""},item:{id:'',condition:'',title:'',free_shipping:false,picture:'',price:{amount:1,decimals:1,currency:"DLR"}}});
    const [loading, setLoading] = useState(false);
    
    useEffect( ()=>{    
        setLoading(true);           
        ProductsUtils.getDetail(id).then(response=>{
            setDetail(response);
            setLoading(false);
        }).catch(err=>{            
            setLoading(false);
        });;
    },[id]);

    return {detail,loading};
};