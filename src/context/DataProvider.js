import React, { createContext, useEffect, useState } from "react";
import data from '../Data'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [menu, setMenu] = useState(false)
  const [cart, setCart] = useState([])
const [total, setTotal]= useState(0)

  useEffect(() => {
    const products = data.items
    if (products) {
      setProducts(products)
    } else {
      setProducts([])
    }
  }, []);



  const addCart = (id) => {
    const check = cart.every(item => {
      return item.id !== id
    })

    if (check) {
      const dat = products.filter(product => {
        return product.id === id
      })
      setCart([...cart, ...dat])
      console.log(cart)
    } else {
      console.log('ya esta en cart')
    }
  }

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem('dataCart'))
    if (dataCart) {
      setCart(dataCart)
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('dataCart', JSON.stringify(cart))
  }, [cart]);

  useEffect(() => {
    const getTotal = () => {
      let res = cart.reduce((prev, item) => {
        return prev + (item.price * item.cantidad)
      }, 0)
  setTotal(res)
    }
    getTotal()
  }, [cart]);

  const value = {
    products: [products],
    menu: [menu, setMenu],
    addCart: addCart,
    cart: [cart, setCart],
    total: [total, setTotal]
  }

  return (<DataContext.Provider value={value}>
    {children}
  </DataContext.Provider>
  )
}