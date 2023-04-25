import React, { useState } from 'react'
import { Labelform } from './labelform'


export const UserFormObject = (event) => {

    const [user, SetUser] = useState ({
      nome: '' ,
      email: '',
      senha: '',

    });
  
    
 
   
    const submitForm = () => {
        event.preventDefault();
        console.log("submit", nome);
    }


  

  return (

    <div className='container'>
        
        <h1>Cadastro de usuário</h1>
        
        <form onSubmit={'submitForm'}>

            <div className='col-md-4 mb-3'>  
            <Labelform  name='Nome'/>
            <input type="text"
             name='nome' id='nome' 
             className='form-control'
             onChange={(e) => SetUser({... user,nome: e.target.value})}
             value={user.nome}  
             />
            </div>

            <div className='col-md-4 mb-3'>
    
            <Labelform name='Email' />
            <input type="text"
             name='email' id='email'
              placeholder='Ex: nome@gmail.com'
               className='form-control'
               
                onChange={(e) => SetUser({... user,email: e.target.value})}
             value={user.email}  />
               
            </div>

            <div className='col-md-4 mb-3'>
            <Labelform  name='Senha'/>
            <input type="text"
             name='senha' id='senha'
             className='form-control'  
            
              onChange={(e) => SetUser({... user, senha: e.target.value})}
             value={user.senha} />
           
            </div>
        
         
            <button type='submit' name='Enviar' className='btn btn-primary btn-lg'>Enviar</button>
           
        

        </form>
        
    </div>
  )
}
