import React from 'react'
import ItemBasket from './ItemBasket'

const Basket = (props) => {
  return (
    <div>
      <div>
      {
        props.overlayProp.lenght>0?
        <div>
          {
            props.overlayProp.map(obj =>{
              return(
                <ItemBasket 
                key={obj.id}
                id={obj.id}
                title={obj.title}
                price={obj.price}
                img={obj.img}
                deleteItems={props.deleteItems}
                />
              )
            })
          }
          </div>
          :<h1 className='col-md-8 offset-md-2'>Корзина пустая</h1>
      }
      <div className='row'>
        <div className="col-md-8 offset-md-2">
          <p>Итог</p>
          <p>{props.totalPrice}</p>
          <button type='button' className='w-10s btn btn-lg btn-primary'>Забронировать</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Basket