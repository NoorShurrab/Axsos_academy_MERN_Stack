import { useState } from 'react'
import './App.css'
import BoxForm from './Components/BoxForm'
import BoxList from './Components/BoxList'
function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (color, size) => {
    setBoxes([...boxes,  {color, size}]);
  };

  return (
    <>
      <div className='content'>
      <BoxForm newColor={addBox} />
      <BoxList boxes={boxes} />
      </div>
    </>
  )
}

export default App
