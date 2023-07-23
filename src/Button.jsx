import React from 'react';

function Button(props){
  return(    
  <button onClick={props.onClick} type="button" class="inline-flex items-center 
  px-4 py-3 text-sm font-medium text-white bg-yellow- 
  500 border border-transparent rounded-md shadow-sm 
  bg-yellow-600">{props.name}</button>  
     
  );
}
export default Button;