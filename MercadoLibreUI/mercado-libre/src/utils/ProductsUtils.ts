import Results from "../models/Results";
import axios, { AxiosRequestConfig } from 'axios';
import Detail from "../models/Detail";
/* import { get } from "config"; */

export default class ProductsUtils {
/*     private static uri=get("MercadoLibreAPI.uri");
    private static endpoint=get("MercadoLibreAPI.endpoint"); */
    private static uri="http://localhost:3001/api";
    private static endpoint="items";
    private static headers:AxiosRequestConfig={headers:{'Content-Type':'application/json'}};

    public static async getResults(query:string):Promise<Results> {
         const {data}=await axios.get(`${this.uri}/${this.endpoint}?q=${query}`,this.headers);

        return {author:data.author,categories:data.categories,items:data.items.slice(0,4)};
    }

    public static async getDetail(id:string):Promise<Detail> {
        const {data}=await axios.get(`${this.uri}/${this.endpoint}/${id}`,this.headers);
         return data;
     }
}