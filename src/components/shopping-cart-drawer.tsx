import React from "react";
import { useShoppingCart } from "@/context/shopping-cart";
import { X } from "lucide-react";
import { Button } from "./ui/button";
export default function ShoppingCartDrawer() {
  const { isOpen,removeItem, toggleCartDrawer, clearCart, products, totalPrice} = useShoppingCart();
  console.log(products)
  return (
    <div
      onClick={toggleCartDrawer}
      className={`absolute bg-primary-transparent inset-0 ${
        !isOpen && "hidden"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`z-10 absolute bg-primary-foreground h-full w-[300px] border-l-4 shadow-lg transition-all ${
          isOpen ? "right-0" : "right-[-300px]"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Carrinho de compras</h2>

            <X className="cursor-pointer p-1" onClick={toggleCartDrawer} />
          </div>
          
          {products.map((product) => (
            <div key={product.id}><div className="flex space-between gap-2">
              <p>{product.title}</p>
              <Button size='sm' className="cursor-pointer p-1" onClick={()=>removeItem(product.id)}>X</Button>
            </div>
            <div>
              <p>{product.quantity}</p>
            </div>
            </div>
          ))}
          {!!totalPrice && <p>Total: {totalPrice.toFixed(2)}</p>}


          <Button size='sm' className="cursor-pointer p-1 mr-2" onClick={clearCart}>Limpar carrinho</Button>


          <Button size='sm' className="cursor-pointer p-1" onClick={toggleCartDrawer}>Fechar carrinho</Button>
        </div>
      </div>
    </div>
  );
}
