import React from 'react';
import CheckBox from './CheckBox';
function TodoRow(props){
  const onCheckboxChange = (event) =>{
    console.log(event);
    props.onStatusChange(props.children);
  }
  return(
    <div className="flex items-center">
      <CheckBox checked={props.done} onChange={props.onStatusChange}/> 
    <span className="ml-3 text-xl">{props.children}</span>
    </div>
  );
}
export default TodoRow;