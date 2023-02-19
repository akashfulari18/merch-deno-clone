import { Cart } from "@/utils/types";
import * as types from "./cart.types"
interface CarctState {
    loading: boolean;
    error: boolean;
    cart: Cart[];
  }

  interface CartAction{
    type:string,
    payload?:any
  }
const initialState:CarctState = {
    loading:false,
    error:false,
    cart:[]
}

export const reducer = (state:CarctState = initialState,{type,payload}:CartAction)=>{
    
    switch(type){
      case types.CART_LOADING:
        return{
          ...state,
          loading:true,
          error:false
        }

        case types.GET_CART:
          return{
            ...state,
            loading:false,
            error:false,
            cart:payload
          }

          case types.CART_ERROR:
            return {
              ...state,
              loading:false,
              error:true
            }

            case types.ADD_TO_CART:
              return{
                ...state,
                loading :false,
                cart:[...state.cart,payload]
              }
        default:
            return state
    }
}