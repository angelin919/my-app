import React from 'react'
import Cart from '../components/cart/Cart';
import Swiper from '../components/Swiper';


const Home = (props) => {

  return (
    <div>
    <Swiper></Swiper>
    <Cart item={props.item}
    overlayItems={props.overlayItems}
    setOverlayItems={props.setOverlayItems}
    favorites={props.favorites}
    setFavorites={props.setFavorites}
    ></Cart>
    </div>
  )
}

export default Home