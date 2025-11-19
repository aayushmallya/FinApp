import React, { useEffect, useState } from 'react'
import { CompanyComp } from '../../company';
import { getComp } from '../../api';
import CompFinderItem from './CompFinderItem/CompFinderItem';

type Props = {
    ticker: string;
}

const CompFinder = ({ticker}: Props) => {
    const [companyData, setCompanyData] = useState<CompanyComp[]>([])
    useEffect (() => {
        //document.body.style.backgroundColor = 'red'
        const getComps = async () => {
            const value = await getComp(ticker)
           // const peers = value.map(value => value.symbol)
            setCompanyData(value?.data || [])
            
        }
        getComps()

    }, [ticker])
  return (
    <div className = "inline-flex rounded-md shadow-sm m-4">
        {companyData.map((peer) =>{
            return <CompFinderItem key={peer.symbol} ticker={peer.symbol} />

        })}
    </div>
  )
}

export default CompFinder