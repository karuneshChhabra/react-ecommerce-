import React from 'react'

function LargeProductList({product}) {
  return (
    <div>
        <>
        {product &&  (

              <div key={product.id} style = {
                {'background':'red'}
              }
              >
                <h3>{product.title}</h3>
                <span>Price :{product.price}</span>

                <p>{product.description}</p>

                <span>{product.rating.rate}</span>
<br/>
              </div>

        )}
        </>
    </div>
  )
}

export default LargeProductList