import { useState, useEffect } from "react";
import axios from 'axios'

const useCurrencyInfo = (currency) =>{
    const [data, setData] = useState({});
    useEffect(()=>{
        const fetchApi = async()=>{
            const res = await axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
            setData(res.data[currency]);
        }
        fetchApi();
    }, [currency])
    return data;
}

export default useCurrencyInfo;