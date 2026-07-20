import React, { useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../api/api'
import ProductCard from '../components/ProductCard'

const Products = () => {
  const [search, setSearch] = useState("")
  const debouncedSearch = useDebounce(search, 500)
  const {data: products = [], isLoading, isError, error,} = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  })
const filteredProducts = products.filter((product) => {
  const title = product?.title ?? "";
  const input = debouncedSearch ?? "";
  
  return title.toLowerCase().includes(input.toLowerCase());
});

  if (isLoading) {
    return <h2>Loading Products...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

       return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        
      />

      <div
        
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
 
  )
}

export default Products
