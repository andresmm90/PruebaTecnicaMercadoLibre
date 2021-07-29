import Detail from "../entities/Detail";
import Results from "../entities/Results";
import ProductsRepository from "../repositories/products.repository";

export const getProducts=(resultsRepository:ProductsRepository)=>async (search:string):Promise<Results>=>{
    try{
        const results = await resultsRepository.getresults(search);
        return buildResultsEntity(results);
    }
    catch(err){
        return null;
    }
}

export const getDetails=(resultsRepository:ProductsRepository)=>async (productId:string):Promise<Detail>=>{
    try{
        const detail = await resultsRepository.getDetails(productId);
        return buildDetailEntity(detail);
    }
    catch(err){
        return null;
    }
}

const buildDetailEntity=(detail:any)=>{
    let response:Detail=null;
    if(detail&&detail[0]&&detail[0].data&&detail[1]&&detail[1].data){
        const {id,title,pictures,condition,currency_id,price,shipping,sold_quantity,category_id}=detail[0].data;
        const {plain_text}=detail[1].data;
        response={
            author:buildAuthor(),
            item:{
                id,
                title,
                condition,
                picture:pictures&&pictures.length?pictures[0].url:null,
                price:{
                    amount:price,
                    currency:currency_id,
                    decimals:1
                },
                free_shipping:shipping?shipping.free_shipping:null,
                sold_quantity,
                description:plain_text,
                category_id
            }
        };
    }

    return response;
}

const buildResultsEntity=(results:any)=>{
    let response:Results=null;
    if(results&&results.status===200){

        const products = results.data.results.map((p: any) =>{
            const {id,title,thumbnail,condition,currency_id,price,shipping}=p;
            return {
                id,
                title,
                condition,
                picture:thumbnail,
                price:{
                    amount:price,
                    currency:currency_id,
                    decimals:1
                },
                free_shipping:shipping?shipping.free_shipping:null,
            }
        });


        response={
            author:buildAuthor(),
            categories:results.data.results.map((x:any)=>x.category_id),
            items:products
        };
    }

    return response;
}

const buildAuthor=()=> {
    return {
        name:"Andres",
        lastname:"Montoya"
    }
}