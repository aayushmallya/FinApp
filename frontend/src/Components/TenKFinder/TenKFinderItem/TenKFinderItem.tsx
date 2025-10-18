import React from 'react'
import { CompanyTenK } from '../../../company'
import { Link } from 'react-router-dom'

type Props = {
    tenK: CompanyTenK
}

const TenKFinderItem = ({tenK}: Props) => {
    const filingDate = new Date(tenK.filingDate).getMonth() // getFullYear()
    const filingDay = new Date(tenK.filingDate).getDate()
    const filingYear = new Date(tenK.filingDate).getFullYear()
  return (
    <Link
        reloadDocument
        to={tenK.finalLink}
        type="button"
        className="inline-flex items-center p-4 text-md text-white bg-lightGreen rounded-md"
    
    > Form {tenK.formType}: {tenK.symbol} <br /> {filingDate} - {filingDay} - {filingYear}</Link>
  )
}

export default TenKFinderItem