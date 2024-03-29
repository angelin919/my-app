import React from 'react'
import axios from 'axios'
import {AppContext} from '../../App';
import Item from './Item';

const Favorites = (props) => {

  const context = React.createContext(AppContext)
  const onAddOverlay = (obj) => {
    axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/cart' , obj)
    context.setOverlayItems([...context.overlayItems, obj]);

  }
  const onDeleteFav = (id) => {
    axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/favorite/${id}`)
    props.setFavorates((fav)=>fav.filter(f=>f.id !==id));
    
  }

  return (
      <div>
        <div>
            <h1 className='col-md-8 offset-md-2'>Избранные туры</h1>

        </div>
        <div>
          {
            props.favorites.map(obj=>{
              return(
                <Item
                key={obj.id}
                id={obj.id}
                myId={obj.myId}
                title={obj.title}
                des={obj.des}
                price={obj.price}
                img={obj.img}

                onDeleteFav={
                  (id)=>{
                    onDeleteFav(id)
                  }
                }

                onPlus={(cartObj)=>{
                onAddOverlay(cartObj)
                }
                }
                />
              )
            })
          }
        </div>
      </div>
  )
}

export default Favorites