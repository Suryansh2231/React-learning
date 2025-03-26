import { useState } from 'react'
import FirstComponent from './FirstComponent'
import CounterComponent from './CounterComponent'

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
<CounterComponent/>
</div>
  )
}

export default App
