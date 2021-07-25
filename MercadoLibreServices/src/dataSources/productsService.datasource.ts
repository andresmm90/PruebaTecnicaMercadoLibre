import Detail from "../core/entities/Detail";
import Results from "../core/entities/Results";
import axios, { AxiosRequestConfig } from 'axios';
import ProductsRepository from "../core/repositories/products.repository";
import { get } from "config";

export default class ProductService implements ProductsRepository{
    private uri=get("MercadoLibreAPI.uri");
    private resultsEndPoint=get("MercadoLibreAPI.endpointSearch");
    private detailsEndPoint=get("MercadoLibreAPI.endpointDetails");
    private headers:AxiosRequestConfig={headers:{'Content-Type':'application/json'}};

    async getresults(search: string): Promise<any> {
        const response=await axios.get(`${this.uri}/${this.resultsEndPoint}?q=${search}`,this.headers);

        return response;
    }

    async getDetails(id: string): Promise<any> {
        const promises=[
            axios.get(`${this.uri}/${this.detailsEndPoint}/${id}`,this.headers),
            axios.get(`${this.uri}/${this.detailsEndPoint}/${id}/description`,this.headers)
        ];
        const response=await Promise.all(promises);
        return response;
    }
}