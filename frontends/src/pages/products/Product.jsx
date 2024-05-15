import React from 'react'
import HeartIcon from "./HeartIcon"
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <div className="w-[20rem] ml-[2rem] p-3 relative">
      <Link to={`/product/${product._id}`}>
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-[20rem] h-[10rem] rounded"
        />
        <HeartIcon product={product} />
      </div>

      <div className="p-4">
          <h2 className="flex justify-between items-center">
            <div className="text-lg">{product.name}</div>
            <span className="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
              $ {product.price}
            </span>
          </h2>
      </div>
      </Link>
    </div>
  )
}

export default Product