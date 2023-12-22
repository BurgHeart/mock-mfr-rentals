import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Navbar } from "./components/Navbar";
import { Search } from "./pages/Search/Search";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="min-h-[100vh] w-full">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}
 
export default App;