import Detail from "../entities/Detail";
import Results from "../entities/Results";

export default interface ProductsRepository{
    getresults(search:string):Promise<any>;
    getDetails(id:string):Promise<any>;
}