import React, { useState } from 'react'
import { Labelform } from './labelform'


export const UserForm = (event) => {

    const [nome, Setnome] = useState ();
    const [email, Setemail] = useState();
    const [senha, Setsenha] = useState ();
   
    const submitForm = () => {
        event.preventDefault();
        console.log("submit");
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
             onChange={e => Setnome(e.target.value)}
             value={nome}  
             />
            </div>

            <div className='col-md-4 mb-3'>
    
            <Labelform name='Email' />
            <input type="text"
             name='email' id='email'
              placeholder='Ex: nome@gmail.com'
               className='form-control'
                value={email} 
                onChange={e => Setemail(e.target.value)}/>
               
            </div>

            <div className='col-md-4 mb-3'>
            <Labelform  name='Senha'/>
            <input type="text"
             name='senha' id='senha'
             className='form-control'  
              valeu={senha}
              onChange={e => Setsenha(e.target.value)} />
           
            </div>
        
         
            <button type='submit' name='Enviar' className='btn btn-primary btn-lg'>Enviar</button>
           
        

        </form>
        
    </div>
  )
}
