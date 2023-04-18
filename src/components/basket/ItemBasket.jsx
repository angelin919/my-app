import React from 'react'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const ItemBasket = (props) => {
  return (
    <div className="container py-3">
    <main>
        <div className="row row-cols-1 justify-content-evenly row-cols-md-3 row-cols-sm-2 text-center">
            <div className="col px-3 py-3">
                <div className="card md-6 rounded">
                    <div className="card-header py-2 px-2">
                    <Stack gap={3}>
                      <h5>{props.title}</h5>
                      <img className='rounded' width={'50%'} src={props.img} alt=''></img>
                      <h5>
                        <br/>
                        <span>{props.price}</span>
                      </h5>
                      <Button type='button' className='w-100 btn btn-lg btn-primary' width='50%' onClick={()=>props.deleteItems(props.id)}>X</Button>

                    </Stack>

                    </div>

                </div>
            </div>

        </div>
    </main>

</div>


    )
}

export default ItemBasket