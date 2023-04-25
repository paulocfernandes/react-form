import { useState } from 'react'
import { UserForm } from './components/UserForm'
import { UserFormObject } from './components/UserFormObject'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <>
      <UserForm />
      
      <UserFormObject />
       
      </>
      
  )
}

export default App
