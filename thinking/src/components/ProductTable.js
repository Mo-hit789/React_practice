import React from "react";
import ProductRow from "./ProductRow";
 import ProductCategoryRow from "./ProductCategoryRow";
const ProductTable = (products) =>{

    const rows=[];
    var lastCategory=null;

    products.forEach((product) => {
        if(product.category !== lastCategory){
            rows.push(
                <ProductCategoryRow 
                   category={product.category}
                   key = {product.category}
                   />
            );
        }
        rows.push(
            <ProductRow 
               product = {product}
               key={product.name}
               />
        )
        lastCategory = product.category;
    });
    return (
        <div>
                <table>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>price</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
        </div>
    );
}

export default ProductTable;