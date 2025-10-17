import axios from "axios";
import { CompanyBalanceSheet, CompanyCashFlow, CompanyComp, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch, CompanyTenK } from "./company";



    interface SearchResponse {
        data : CompanySearch[];
    }

export const searchCompanies = async (query: string) => {


    try{
        const data = await axios.get<SearchResponse>(
             `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${process.env.REACT_APP_API_KEY}` 
        );
        return data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.log("Error message: ", error.message);
            return error.message;
        }else{
            console.log("Unexpected error: ", error);
            return "An unexpected error occurred";  
        }
        
    }
};


export const getCompanyProfile = async (query: string) => {
    try{
        const data = await axios.get<CompanyProfile[]>(`https://financialmodelingprep.com/stable/profile?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`)
        return data;
    } catch (error: any) {
        console.log("error message from PAI: ", error.message);
}
};

export const getKeyMetrics = async (query: string) => {
    try{
        const data = await axios.get<CompanyKeyMetrics[]>(`https://financialmodelingprep.com/stable/ratios-ttm?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`)//(`https://financialmodelingprep.com/stable/key-metrics-ttm?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`)
        return data;
    } catch (error: any) {
        console.log("error message from PAI: ", error.message);
}
};

export const getIncomeStatement = async (query: string) => {
    try{
        const data = await axios.get<CompanyIncomeStatement[]>(`https://financialmodelingprep.com/stable/income-statement?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`)
        return data;
    } catch (error: any) {
        console.log("error message from PAI: ", error.message);
}
};

export const getBalanceSheet = async (query: string) => {
    try{
        const data = await axios.get<CompanyBalanceSheet[]>(`https://financialmodelingprep.com/stable/balance-sheet-statement?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`)
        return data;
    } catch (error: any) {
        console.log("error message from PAI: ", error.message);
}
};

export const getCashFlow = async (query: string) => {
    try{
        const data = await axios.get<CompanyCashFlow[]>(`https://financialmodelingprep.com/stable/cash-flow-statement?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`)
        return data;
    } catch (error: any) {
        console.log("error message from PAI: ", error.message);
}
};

export const getComp = async (query: string) => {
    try{
        const data = await axios.get<CompanyComp[]>(`https://financialmodelingprep.com/stable/stock-peers?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`)
        return data;
    } catch (error: any) {
        console.log("error message from PAI: ", error.message);
}
};

const today = new Date();
const lastYear = new Date(today);
lastYear.setFullYear(today.getFullYear() - 1);


const fromDate = lastYear.toLocaleDateString('en-CA');
const toDate = today.toLocaleDateString('en-CA');

export const getTenK = async (query: string) => {
    try{
        const data = await axios.get<CompanyTenK[]>(`https://financialmodelingprep.com/stable/sec-filings-search/symbol?symbol=${query}&from=${fromDate}&to=${toDate}&page=0&limit=10&apikey=${process.env.REACT_APP_API_KEY}`)
        return data;
    } catch (error: any) {
        console.log("error message from PAI: ", error.message);
}
}; 