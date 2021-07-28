import Results from "../models/Results";
import axios, { AxiosRequestConfig } from 'axios';
import Detail from "../models/Detail";

export default class ProductsUtils {
    private static headers:AxiosRequestConfig={headers:{'Content-Type':'application/json'}};

    public static async getResults(query:string):Promise<Results> {
         const {data}=await axios.get(`http://localhost:3001/api/items?q=${query}`,this.headers);

        return {author:data.author,categories:data.categories,items:data.items.slice(0,4)};
    }

    public static async getDetail(id:string):Promise<Detail> {
        const {data}=await axios.get(`http://localhost:3001/api/items/${id}`,this.headers);
         return data;
     }
}