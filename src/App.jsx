import { useState } from 'react'
import FirstComponent from './FirstComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
<div style={{
  display : 'flex',
  // justifyContent: 'center',
  alignItems : 'center',
  flexDirection : 'column',
  backgroundColor : 'aqua'


 }}>  
<FirstComponent/>
</div>
  )
}

export default App
