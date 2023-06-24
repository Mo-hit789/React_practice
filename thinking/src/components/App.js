import React from "react";
import './App.css';
import SearchBar from "./SearchBar"; 

import ProductTable from "./ProductTable"; 

function App() {
  const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ];
  return (
    <div>
     <SearchBar products={PRODUCTS} />
    <ProductTable products={PRODUCTS}/>

    </div>
   
  );
}

export default App;
