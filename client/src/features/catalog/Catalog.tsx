import { useState, useEffect } from "react";
import { Product } from "../../product";
import { ProductList } from "./ProductList";

export const Catalog = () => { 
  const [products, setProducts] = useState<Product[]>([]); //import Product from product.ts

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, []);

  return (
    <div>
        <ProductList products={products}/>
    </div>
  )
}
