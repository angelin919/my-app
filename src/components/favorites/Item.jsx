import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const Item = (props) => {

    const [added, setAdded] = useState(false);
    
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

    const onDelete=()=>{
        props.onDeleteFav(props.id)
    }
  return (

    <div className="container py-3">
    <main>
        <div className="row row-cols-1 justify-content-evenly row-cols-md-3 row-cols-sm-2 text-center">
            <div className="col px-3 py-3">
                <div className="card md-6 rounded">
                    <div className="card-header py-2 px-2">
                    <Stack gap={3}>
                        
                        <Button type='button' className='w-100 btn btn-lg btn-primary' onClick={onDelete}>Удаление</Button>
                            
                        <div>
                            <h3>{props.title}</h3>
                            <img className='rouded' src={props.img} width={'85%'} alt='view'></img>
                           <p>{props.des}</p>
                        <p>{props.price}</p>
                        </div>
  
                        <Button type='button' className='w-100 btn btn-lg btn-primary' width='50%' onClick={onClickAdd}>
                            { added ?
                            <img width={15}
                            src={added ? './img/icon.png' : ''}
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

export default Item