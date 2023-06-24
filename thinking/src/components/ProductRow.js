import React from "react";

const ProductRow = (poduct) =>{
   const name=product.stocked ? product.name:
   <span style={{color:"red"}}>{poduct.name}
   </span> ;
    return (

        <div className="ui container">
            <tr>
                <td>name</td>
                <td>{poduct.price}</td>
            </tr>
        </div>


      
    );
}
 
export default ProductRow;