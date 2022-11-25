import React, { createContext, useEffect, useState } from "react";
import data from '../Data'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const products = data.items
      if(products){
        setProducts(products)
      }else{
        setProducts([])
      }
    }, []);

    const value = {
        products: [products]
    }

    return (<DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
    )
}