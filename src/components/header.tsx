import reactLogo from "../assets/react.svg";
import { ShoppingCart } from "lucide-react";
import { Link } from "./link";
import { useShoppingCart } from "@/context/shopping-cart";
interface HeaderProps {}

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  { name: "Lorem", path: "/cart" },
  { name: "Ipsum", path: "/cart" },
];
export function Header({}: HeaderProps) {
  const {toggleCartDrawer} = useShoppingCart()
  return (
    <div className="border-b-4 px-5">
      <div className="container flex justify-between mx-auto">
        <img src={reactLogo} className="w-8"></img>
        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
           <Link key={link.name} href={link.path} text={link.name}/>
          ))}
          <div  className='cursor-pointer' onClick={toggleCartDrawer} >
          <ShoppingCart/>

          </div>
        </div>
      </div>
    </div>
  );
}
