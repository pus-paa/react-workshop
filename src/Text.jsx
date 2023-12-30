import React , {useState} from "react" ;
const Text =() => {
    const[data,setData]=useState([]);
    const [inputvalue,setInputValue]=useState('');
    const[buttonClicked,setButtonClicked]=useState(false);

    const handleChange=(event)=>{
        setInputValue(event.target.value)
    };

    const addButton =()=> {
        setData([...data,inputvalue]);
        setInputValue('');
        setButtonClicked(true);
    }
    return (
        <div>
            <label>
                enter to text:
            </label>
            <input value={inputvalue} type={"text"} onChange={handleChange}>
            </input>
            <button onClick={addButton} >Add</button>
            <ul>
                {buttonClicked?data.map((item)=><li key="item">{item}</li>):<p></p>}
                
            </ul>
        </div>
    )
}

export default  Text;