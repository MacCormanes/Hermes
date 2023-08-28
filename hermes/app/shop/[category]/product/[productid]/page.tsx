import React from 'react'

const Page = ({params}: {params: {productid: number, category: string}}) => {
  const category = params.category
  const productid = params.productid
  return (
    <div>
      <h1>
        Product Category: {category}
      </h1>
      <h1>
        Product ID: {productid}
      </h1>
    </div>
  )
}

export default Page