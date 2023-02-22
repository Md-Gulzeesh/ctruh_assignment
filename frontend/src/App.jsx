import { useState } from 'react';
import './App.css'

function App() {
  const [colorValue, setColorValue] = useState('');
  const handleChange = (e)=>{
      setColorValue(e.target.value);
  }
  return (
    <div className="container">
      <div className='color_picker_container'>
        <input  onChange={handleChange} type="color" name="colorPicker" id="colorPicker" />
        <select name="" id="">
          <option value="">Choose color palette</option>
        </select>
      </div>
      <canvas style={{ border: "1px solid red",background:colorValue }}></canvas>
    </div>
  );
}

export default App
