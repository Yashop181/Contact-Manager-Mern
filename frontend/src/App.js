import { Routes, Route } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./pages/Home"
import AddContact from "./pages/AddContact"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/add" element={<AddContact/>} /> 
          
        </Route>
      </Routes>
    </div>
  )
}

export default App
