import React from 'react'

interface Props {
  onPortfolioCreate: (e: React.SyntheticEvent) => void;
  symbol: string;
}

const AddPortfolio = ({onPortfolioCreate, symbol}: Props) => {
  return (
  <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
      <form onSubmit={onPortfolioCreate}>
        <input readOnly={true} hidden={true} value={symbol} />
        <button
          type="submit"
          className="p-2 px-8 text-black relative bg-mint/100 rounded-lg hover:opacity-70 focus:outline-none"
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default AddPortfolio