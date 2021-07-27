import Results from "../models/Results";
import axios, { AxiosRequestConfig } from 'axios';

export default class ProductsUtils {
    private static headers:AxiosRequestConfig={headers:{'Content-Type':'application/json'}};

    public static async getResults(query:string):Promise<Results> {

        const response1=await axios.get(`http://localhost:3001/api/items?q=${query}`,this.headers);
        console.log({response1});

         let response:Results={
            author:{
                name:"",
                lastname:""
            },
            categories:[],
            items:[{
                condition:"NEW",
                id:"AA",
                picture:"",
                free_shipping:true,
                price:{amount:1,currency:"DLL",decimals:0},
                title:""
            },{
                condition:"NEW",
                id:"22",
                picture:"",
                free_shipping:true,
                price:{amount:1,currency:"DLL",decimals:0},
                title:""
            }]
        }; 
        return response;
    }
}