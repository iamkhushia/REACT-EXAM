import './App.css'
import { Route, Routes } from 'react-router'
import Register from './Component/Register'
import Login from './Component/Login'
import Header from './Component/Header'
import Home from './Component/Home'
import AddRecipe from './Component/AddRecipe'
import EditRecipe from './Component/EditRecipe'
import ViewRecipe from './Component/ViewRecipe'
import Footer from './Component/Footer'
import MenuList from './Component/MenuList'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddRecipe />} />
        <Route path='/edit/:id' element={<EditRecipe />} />
        <Route path='/view/:id' element={<ViewRecipe />} />
        <Route path="/menu-list" element={<MenuList />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App