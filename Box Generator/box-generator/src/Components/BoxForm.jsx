import React ,{useState} from 'react'

const formStyle = {
    display: 'flex',
    gap: '30px',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px'
};
const someStyle = {
    padding: '10px 20px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '5px',
}
const BoxForm = (props) => {
    const [color, setColor] = useState('#fff');
    const [size, setSize] = useState('100');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.newColor(color, size);
        setColor('#fff');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={formStyle}>
                <label htmlFor="color" style={{fontWeight: "bold", fontSize: "20px"}}>Color</label>
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} style={{width: '200px', height: '30px'}}/>
                <select value={size} onChange={(e) => setSize(e.target.value)} style={someStyle}>
                    <option value="50">50px</option>
                    <option value="100">100px</option>
                    <option value="150">150px</option>
                    <option value="200">200px</option>
                </select>
                <button type='submit' style={someStyle}>Add</button>
            </form>
        </div>
    )
}

export default BoxForm
