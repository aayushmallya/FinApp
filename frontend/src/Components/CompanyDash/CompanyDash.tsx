import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {
    children:React.ReactNode;
    ticker: string
}

const CompanyDash = ({children, ticker} :  Props) => {
  return (
     <div className="relative md:ml-64 w-full">
            <div className="relative pt-20 pb-32 bg-gray-500/10 rounded mt-8">
              <div className="px-4 md:px-6 mx-auto w-full">
                <div>
                    <div className="flex flex-wrap">{children} </div>
                    <div className="flex flex-wrap">{<Outlet context = {ticker} />} </div>      
                  </div>
                </div>
              </div>
            </div>

  )
}

export default CompanyDash