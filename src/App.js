import React from "react";
import Header from "./components/header";
import { BrowserRouter } from 'react-router-dom'
import Paginas from "./components/Paginas";
import 'boxicons';
import { DataProvider } from "./context/DataProvider";
import Cart from "./components/cart/Cart";



function App() {

  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Cart />
          <Paginas />
        </BrowserRouter>

      </div>
    </DataProvider>

  )
}
export default App;
