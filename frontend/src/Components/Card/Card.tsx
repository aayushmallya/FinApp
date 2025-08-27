import React, { JSX } from 'react'
import './Card.css'

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({companyName, ticker, price}: Props) : JSX.Element => {
  return <div className = "card">
    <img src="https://images.unsplash.com/photo-1756141871223-6fba380de277?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card Image" />
  

  <div className = "details">
    <h2>{companyName} ({ticker})</h2>
    <p>${price}</p>
  </div>
  <p className = "info">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
  </div>
  
}

export default Card