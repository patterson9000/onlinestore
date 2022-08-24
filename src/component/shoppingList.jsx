import './shoppingList.css';
import {useState} from 'react';

const ShoppingList = () => {
    const [text,setText]= useState('');
    const [item,setItem] = useState([]);

    const save = () => {
        console.log(text);

        let clone = [...item];
        clone.push(text);
        setItem(clone);
        
    };

    const textChange= (e) => {
      let value = e.target.value;
      setText(value);
    };

    return(
    <div className='shop-List'>
        <h1>your shopping list</h1>

        <div className='form'>
            <label>Add to list</label>
            <input onChange={textChange} type="text"/>
            <button onClick={save} className='btn btn-sm btn-succes'>Add</button>
        </div>
        
        <ul>
        {item.map((item) => (
            <li>{item}</li>
        ))}
     </ul>
    </div>
    );
};



export default ShoppingList;
