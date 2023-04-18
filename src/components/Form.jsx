import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
      axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/form', data)
      alert('Заявка отправлена')
      console.log(data)
    }

  return (
      <div className='container col-xl-8 col-md-10 col-xs-12'>
    <form id='form' onSubmit={handleSubmit(onSubmit)}>
        <h1>Обратная связь</h1>
        <div className='input-group mb-3'>
        <input 
        {...register("LastName",
        {
         required:true,
         maxLength:50,
         pattern: /^[А-яЯ-а]+$/i,   
        })} 
        type="text"
        className='form-control'
        placeholder='Фамилия'
        />
        </div>
        {errors?.LastName?.type === 'required' && <span>Поле обязательно для заполнения</span>}
        {errors?.LastName?.type === 'maxLength' && <span>Поле не может содержать более 50 символов</span>}
        {errors?.LastName?.type === 'pattern' && <span>Поле заполнено не корректро</span>}


        
        <div className='input-group mb-3'>
        <input 
        {...register("FirstName",
        {
        required:true,
         maxLength:50,
         pattern: /^[А-яЯ-а]+$/i,   
        })} 
        type="text"
        className='form-control'
        placeholder='Имя'
        />
        </div>
        {errors?.FirstName?.type === 'required' && <span>Поле обязательно для заполнения</span>}
        {errors?.FirstName?.type === 'maxLength' && <span>Поле не может содержать более 50 символов</span>}
        {errors?.FirstName?.type === 'pattern' && <span>Поле заполнено не корректро</span>}

        <div className='input-group mb-3'>
        <input 
        {...register("Email",
        {
        required:true,
         maxLength:50,
         pattern: /^[A-zZ-a@._-]+$/i,   
        })} 
        type="text"
        className='form-control'
        placeholder='Email'
        />
        </div>
        {errors?.Email?.type === 'required' && <span>Поле обязательно для заполнения</span>}
        {errors?.Email?.type === 'maxLength' && <span>Поле не может содержать более 50 символов</span>}
        {errors?.Email?.type === 'pattern' && <span>Поле заполнено не корректро</span>}
      
      <input  type="submit" />
    </form>

      </div>
    

  )
}

export default Form