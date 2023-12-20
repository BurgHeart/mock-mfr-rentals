import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Search } from "./pages/Search";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
      <Footer />
    </>
  )
}
 
export default App;