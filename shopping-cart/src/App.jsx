import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";

import Home from "./components/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
     <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App;
