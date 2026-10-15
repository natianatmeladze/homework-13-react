import { useEffect } from "react";
import "./App.css";
import { useCart } from "./context/useCart";
import { Route, Routes } from "react-router";
import Checkout from "./pages/Checkout";
import Header from "./components/Header";

function App() {
  const { setCart } = useCart();
  const products = [
    { id: 1, title: "Wireless Headphones", price: 120 },
    { id: 2, title: "Mechanical Keyboard", price: 180 },
    { id: 3, title: "Gaming Mouse", price: 75 },
    { id: 4, title: "USB-C Hub", price: 55 },
    { id: 5, title: "Laptop Stand", price: 90 },
  ];

  useEffect(() => {
    setCart(products);
  }, [setCart]);

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
    </>
  );
}

export default App;
