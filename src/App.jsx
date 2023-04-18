import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import "./App.css"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Favorites from './components/favorites/Favorites';
import Des from './components/Des';
import Form from './components/Form';
import Contacts from './components/Contacts';
import React from 'react';
import Basket from './components/basket/Basket';

export const AppContext = React.createContext({})



function App() {
//хранение данные туров
const [tyrs, setTyrs] = useState([])

//Избранных
const [favorites, setFavorates] = useState([])

//Корзина
const [overlayItems, setOverlayItems] = useState([])


useEffect(()=>{

  async function axiosData(){
    const tyrsData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/tyrs')
    const favoritesData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites')
    const cartData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/cart')


    setTyrs(tyrsData.data)
    setFavorates(favoritesData.data)
    setOverlayItems(cartData.data)
  }

// fetch('https://6419672129e7e36438fc8d9e.mockapi.io/tyrs').then((myJson)=> {
// return myJson.json();
// }).then((myJson)=>{
//   setTyrs(myJson)
// })
axiosData();
},[])

const deleteItems=(id)=>{
  axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/cart/${id}`)
  setOverlayItems((objDelete)=>objDelete.filter(item=>item.id !==id))

}
const isAdded=(myId)=>{
  return overlayItems.some((objIsAdded)=>objIsAdded.myId ===myId)
}

const isFav=(myId)=>{
  return favorites.some((objIsFav)=>objIsFav.myId ===myId)
}

  return (
    <AppContext.Provider
    value={
      {
      tyrs,
      setTyrs,
      overlayItems,
      setOverlayItems,
      favorites,
      setFavorates,
      isAdded,
      isFav
      }
    }>


    <div>
      <Router>
         <Header></Header>
            <Routes>
              <Route path='/Favorites' element={
                <Favorites 
                favorites={favorites}
                setFavorates={setFavorates}
                item={tyrs}
                overlayItems={overlayItems}
                setOverlayItems={setOverlayItems}
                ></Favorites>
              }
              />
              <Route path='/' element={
              <Home 
              item={tyrs}
              overlayItems={overlayItems}
              setOverlayItems={setOverlayItems}
              favorites={favorites}
              setFavorates={setFavorates}
              ></Home>
              }
              />
              <Route path='/Des' element={
              <Des></Des>
              }
              />
              <Route path='/Form' element={
              <Form></Form>
              }
              />
              <Route path='/Contacts' element={
                <Contacts></Contacts>
              }
              />
              <Route path='/Cart' element={
              <Basket
              totalPrice={
                overlayItems.reduce((element = overlayItems.length, obj)=>
                element+obj.price, 0)
              }
              overlayProp={overlayItems}
              deleteItems={deleteItems}

              />
              }
              />
                           
            </Routes>
       </Router>
       <Footer></Footer>
    </div>
    </AppContext.Provider>

    
  );
}

export default App;
