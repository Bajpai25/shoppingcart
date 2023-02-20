import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {ProductArray } from './Product'
import Productcard from './Productcard'
const Store = () => {
  return (
    <>    <h1 align="center" className='p-3'>Welcome to My Store!</h1>
    <Row xs={1} md={3} className="g-4">
    {ProductArray.map((product,index)=>(
      <Col align="center" key={index}>
      <Productcard product={product}/>
    </Col>))}
    </Row>
    </>
  )
}

export default Store