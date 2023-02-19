import { Cart } from "@/utils/types"
import axios ,{AxiosResponse} from "axios"

export const getCartAPI=async()=>{
    let res:AxiosResponse<Cart[]> = await axios.get(`https://aggressive-pig-sombrero.cyclic.app/carts`)
    return res.data
}
export const addItemToCartAPI= async(productId:number,quantity:number)=>{
    let res:AxiosResponse<Cart> = await axios.post(`http://https://aggressive-pig-sombrero.cyclic.app/carts`,{productId,quantity})
    return res.data
}
