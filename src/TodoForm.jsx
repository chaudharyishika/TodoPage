import React from 'react';
import Button from './Button';
function TodoForm(props){
  const [inputValue, setInputValue] = React.useState('');
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  }
  const Savetodo = () => {
    props.onCreate(inputValue);
    setInputValue('');
      props.onClose();
    }
  return(
    <div>
    <h1 className="p-4 text-2xl">Create Your ToDo List</h1>
    <input value={inputValue} onChange={onInputChange} className="border border-1 rounded-md w-96 h-40 text-center border-gray-400" 
    placeholder="Compose your Work"></input> 
     <div className="p-4 space-x-4 "> 
     <Button onClick={Savetodo} name="Save"></Button>
     <Button onClick={props.onClose} name="Cancel"></Button>  
     </div>  
    </div>
  );
}
export default TodoForm;