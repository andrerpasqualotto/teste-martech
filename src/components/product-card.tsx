import React from 'react'
import { Button } from './ui/button'
import { useShoppingCart } from '@/context/shopping-cart'
import { IProduct } from '@/models/products'
interface ProductCardProps {
    product: IProduct
}
export default function ProductCard({product}: ProductCardProps) {
  const { addItem } = useShoppingCart()
  const formatPrice = (price:number) : string => 
  {
    return 'R$ ' + price
  }

  const getSubstring = (string:string , limit:number) : string => {

    if(string.length <= limit){
      return string
    }

      return string.substring(0,limit) + '...'

  }
  
  return (
    <div className='border-4 rounded-md m-w-[300px] basis-full grow-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/6'>
        <div className='h-[200px] overflow-hidden'><img className='w-full h-full object-cover ' src={product.image} alt={product.title}></img>
        </div>
        <Button size='sm' onClick={() => addItem(product)}>Add to cart + </Button>

        <p className='font-bold text-base'>{getSubstring(product.title, 100)}</p>
        <hr></hr>
        <p className='font-bold text-xs'>{product.price && formatPrice(product.price)}</p>
        <p className='font-bold text-xs'>{getSubstring(product.description, 120)}</p>

    </div>
  )
}
