import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { applyMiddleware, combineReducers, compose, legacy_createStore }  from "redux"
import thunk from "redux-thunk"
import { reducer as cartReducer } from "./cart/cart.reducer"
import { reducer as productReducer } from "./product/product.reducer"


const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer
})
export const store = legacy_createStore(rootReducer,compose(applyMiddleware(thunk)))

export  type RootState = ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch

type DispatchFn = () => AppDispatch;

export const useAppDispatch: DispatchFn = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector