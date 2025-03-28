import { useState } from 'react'
import FirstComponent from './FirstComponent'
import CounterComponent from './CounterComponent'
import Card from './Cardcomponent'

function App() {
  const [count, setCount] = useState(0)
  const [backgroundColor, setBackgroundColor] = useState("red");
  const backgroundChanger = (color) => setBackgroundColor(color);

  return (
      <div style={{
  display : 'flex',
  // justifyContent: 'center',
  alignItems : 'center',
  flexDirection : 'column',
  backgroundColor : 'aqua',
        width : '100%',



 }}>  
<FirstComponent/>
<CounterComponent/>
<div className="w-full h-1000 duration-200" style={{ backgroundColor }}>
      <div className=" w-full flex flex-wrap gap-2 p-5 justify-center">
        <Card color="red" handleclick={backgroundChanger} />
        <Card color="green" handleclick={backgroundChanger} />
        <Card color="yellow" handleclick={backgroundChanger} />
        <Card color="pink" handleclick={backgroundChanger} />
        <Card color="aqua" handleclick={backgroundChanger} />
        <Card color="black" handleclick={backgroundChanger} />
        <Card color="violet" handleclick={backgroundChanger} />
        <Card color="blue" handleclick={backgroundChanger} />
        <Card color="orange" handleclick={backgroundChanger} />
        <Card color="brown" handleclick={backgroundChanger} />
      </div>
    </div>
</div>
    
  )
}

export default App
