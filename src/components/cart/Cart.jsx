import React from 'react'
import { Item } from './Item';
import axios from 'axios';

export const Cart = (props) => {

    const onAddOverlay = async(obj)=>{
        try{
            const findOverlay = props.overlayItems.find(objOver=>objOver.myId === obj.myId)
            if(findOverlay){
                axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/cart/${findOverlay.id}`)
                props.setOverlayItems((over)=>over.filter(o=>o.myId !== obj.myId)
                
                )
            } else {
                const {data} = await axios.post(`https://637f91ca2f8f56e28e904e7d.mockapi.io/cart`, obj)
                props.setOverlayItems([...props.overlayItems,data])
            }
        }
        catch{
            alert('Ошибка')
        }
    }

    const onAddFav = async(obj)=>{
        try{
            const findFav = props.favorites.find(objFav=>objFav.myId === obj.myId)
            if(findFav){
                axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/favorates/${findFav.id}`)
                props.setFavorates((over)=>over.filter(o=>o.myId !== obj.myId)
                
                )
            } else {
                const {data} = await axios.post(`https://637f91ca2f8f56e28e904e7d.mockapi.io/favorates`, obj)
                props.setFavorates([...props.favorites,data])
            }
        }
        catch{
            alert('Ошибка')
        }
    }
  return (
      <div>
      {
          props.item.map(obj=>{
              return(
                  <Item
                  key={obj.id}
                  id={obj.id}
                  myId={obj.myId}
                  title={obj.title}
                  des={obj.des}
                  price={obj.price}
                  img={obj.img}

                  favBtn={
                      (favObj)=>{
                          onAddFav(favObj)
                      }
                  }

                  onPlus={
                      (cartObj)=>{
                          onAddOverlay(cartObj)
                      }}
                  />
              )
          })
      }
      </div>
  )
}

export default Cart;