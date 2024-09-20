import { ACTIONS } from "./actions";
import { IProduct } from "@/models/products";
export const cartReducer = (state: IProduct[], action: any) => {
    switch (action.type) {
      case ACTIONS.ADD_TO_CART:
        const existingItem = state.find(item => item.id === action.payload.id);
        if (existingItem) {
          // If item already exists, increase its quantity
          return state.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return [...state, { ...action.payload, quantity: 1 }];
  
      case ACTIONS.REMOVE_FROM_CART:
        return state.filter(item => item.id !== action.payload);
  
      case ACTIONS.CLEAR_CART:
        return [];
  
      default:
        return state;
    }
  };