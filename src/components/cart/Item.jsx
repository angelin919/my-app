import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import {AppContext} from '../../App';

export const Item = (props) => {

    const context = React.useContext(AppContext);
    const [added, setAdded] = useState(context.isAdded);
    const [fav, setFav] = useState(false);

    const onClickFav=()=>{
        setFav(!fav);
        let id = props.id;
        let myId = props.myId;
        let title = props.title;
        let des = props.des;
        let price = props.price;
        let img = props.img;
        props.favBtn({title, des, price, img, id, myId})
    }

    const onClickAdd=()=>{
        setAdded(!added);
        let id = props.id;
        let myId = props.myId;
        let title = props.title;
        let des = props.des;
        let price = props.price;
        let img = props.img;
        props.onPlus({title, des, price, img, id, myId})
    }


  return (
    <div className="container py-3">
    <main>
        <div className="row row-cols-1 justify-content-evenly row-cols-md-3 row-cols-sm-2 text-center">
            <div className="col px-3 py-3">
                <div className="card md-6 rounded">
                    <div className="card-header py-2 px-2">
                    <Stack gap={3}>
                        {context.isFav(props.myId) == true ? 
                        <Button type='button' className='w-100 btn btn-lg btn-primary' onClick={onClickFav}>Избраное</Button>
                            :
                            <Button type='button' className='w-100 btn btn-lg btn-primary' onClick={onClickFav}>Добавить в избраное</Button>
                        }

                        <div>
                            <h3>{props.title}</h3>
                            <img className='rouded' src={props.img} width={'85%'} alt='view'></img>
                           <p>{props.des}</p>
                        <p>{props.price}</p>
                        </div>
  
                        <Button type='button' className='w-100 btn btn-lg btn-primary' width='50%' onClick={onClickAdd}>
                            {context.isAdded(props.myId) ?
                            <img width={15}
                            src={context.isAdded(props.myId) ? './img/icon.png' : ''}
                            alt=""/>
                            : 'Длбавить в корзину'}
                        </Button>
                            
                        </Stack>

                    </div>

                </div>
            </div>

        </div>
    </main>

</div>
  )
}
