import React from 'react'
import './style.css'
import { Card } from 'antd'
const Product = ({ data }) => {
  return (
    <Card
      size="small"
      title={data.name}
      style={{
        width: 300,
      }}
    >
        <p><span>Category: </span>{data.category}</p>
        <p><span>Description: </span>{data.description}</p>
        <p><span>Price: </span>{data.price}</p>
        <p><span>Availability: </span>{data.inStock ? 'Available' : 'Not Available'}</p>
    </Card>
  )
}

export default Product