import OnNavbar from "./pages/navbar"
import OnIndex from "./pages/index"
import AddProduct from "./pages/product"
import OnEdit from "./pages/Edit";
import OnDelete from "./delete";
import ProdView from "./pages/product_view";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  

  return (
    <>
   
    
     <BrowserRouter>
     <OnNavbar  />
       <Routes>
        <Route path="/" element={<OnIndex/>} />
        <Route path="/product" element={<AddProduct/>} />
        <Route path="/edit/:id" element={<OnEdit/>} />
        <Route path="/delete/:id" element={<OnDelete/>} />
        <Route path="/product-view/:id" element={<ProdView/>} />
        
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
