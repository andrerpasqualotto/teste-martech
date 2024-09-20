import { FC, ReactNode, useContext, createContext, useState, useReducer} from "react";
import { cartReducer } from "@/reducers/reducer";
import { IProduct } from "@/models/products";
import { ACTIONS } from "@/reducers/actions";
type ShoppingCartContextType = {
  products: IProduct[]; // Assuming you have a Product type
  isOpen: boolean;
  toggleCartDrawer: () => void;
  addItem: (item: IProduct) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  totalPrice: number;

};
const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null);
const initialCartState : IProduct[] = []
const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [products, dispatch] = useReducer(cartReducer, initialCartState);

  const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0)
  const toggleCartDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  const addItem = (item: IProduct) => {
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: item });
  };

  const removeItem = (id: number) => {
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: ACTIONS.CLEAR_CART, payload: null });
  };
  
  const context = {
    products,
    toggleCartDrawer,
    isOpen,
    addItem,
    removeItem,
    clearCart,
    totalPrice
  };
  return (
    <ShoppingCartContext.Provider value={context}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (context === null) {
    console.log('undefined')
    throw new Error(
      "You must use useShoppingCart inside a ShoppingCartProvider"
    );
  }
  return context;
};
