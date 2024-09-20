import React, {useState, useEffect} from 'react'
import { productsService } from '@/service/products'

type Products = {
    image: string;
    description: string;
    title: string;
    price: number;
    [key: string]: any;
};
export default function useFetchProducts() {

    const [products, setProducts] = useState<Products[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const fetchProducts = async () => {
        try {
            setLoading(true)
            const {data, status} = await productsService.getProducts()
            console.log(data,status)
            if(status === 200) {
                setProducts((prevData) => data)
            }
        }catch(e){
            setError(true)
            console.log(e)
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    

  return ({products, loading, error})
}
