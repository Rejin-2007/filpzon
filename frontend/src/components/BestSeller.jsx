import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'

const BestSeller = () => {
    const { products } = useAppContext();
    return (
        <div className='mt-16'>
            <p className='text-2xl md:text-3xl font-medium'>Best Seller</p>
            <div className='flex flex-row gap-8 my-8'>
                {products.filter(product => product.inStock).slice(0, 5).map((product,i) => (
                    <ProductCard key={i} product={product} className="rounded"/>
                ))
                }
            </div>
        </div>
    )
}

export default BestSeller