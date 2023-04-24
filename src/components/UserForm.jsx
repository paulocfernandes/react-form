import React from 'react'
import { Labelform } from './labelform'


export const UserForm = () => {
  return (
    <div className='container'>
        <h1>Cadastro de usuário</h1>
        <form>

            <div className='col-md-4 mb-3'>
                
            <Labelform  name='Nome'/>
            <input type="text" name='nome' id='nome' className='form-control'       />

            </div>

            <div className='col-md-4 mb-3'>
    
            <Labelform name='Email' />
            <input type="text" name='email' id='email' placeholder='Ex: nome@gmail.com' className='form-control'/>
            </div>

            <div className='col-md-4 mb-3'>
            <Labelform  name='Senha'/>
            <input type="text" name='senha' id='senha'className='form-control'/>
            </div>
        
         
            <button type='submit' name='Enviar' className='btn btn-primary btn-lg'>Enviar</button>
           
        

        </form>
        
    </div>
  )
}
