import React from 'react'
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';
import { Link } from 'react-router-dom';

interface Props {
    portfolioValue: string;
    onPortfolioDelete: (e: React.SyntheticEvent) => void;
}

const CardPortfolio = ({portfolioValue, onPortfolioDelete}: Props) => {
  return (
     <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-[0_0_20px_rgba(255,215,0,0.8)] md:w-1/3 relative bg-gray-100/80 border-4 border-gold/90 ">
      <Link to = {`/company/${portfolioValue}/company-profile`} className="pt-6 text-xl font-bold">{portfolioValue}</Link>
    <DeletePortfolio onPortfolioDelete = {onPortfolioDelete} portfolioValue={portfolioValue} />
    
    
     </div>
  )
}

export default CardPortfolio