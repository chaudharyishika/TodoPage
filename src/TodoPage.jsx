import React from 'react';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoRow from './TodoRow';
import Button from './Button';
import CheckBox from './CheckBox';
function TodoPage() {
  const [TodoformVisibilty,UpdateTodoformVisibilty] = 
  React.useState(false);
  const ShowTodoform = () => 
  UpdateTodoformVisibilty(true);
  const HideTodoform = () => 
  UpdateTodoformVisibilty(false);
  const [todoList,setTodoList] = React.useState([]);
  const [doneList,setDoneList] = React.useState([]);
  const addTodo = (todo) =>{ 
  setTodoList([...todoList,todo]);}
  const markAsDone = (todo) => {
    const newTodoList = todoList.filter(t => t !== todo);
    setTodoList(newTodoList);
    setDoneList([...doneList,todo]);
  };
  const markAsnotDone = (todo) => {
    const newDoneList = doneList.filter(t => t !== todo);
    setDoneList(newDoneList);
    setTodoList([...todoList,todo]);
  };
  return(
    <div>
     <Header></Header> 
     <div className='bg-blue-500 h-screen w-screen p-6 pl-20 space-y-8'>
     <div className="flex justify-between"> 
     <h1 className="text-2xl font-extrabold">You can list tasks to be completed here: </h1>
     </div>  
     <h2 className='text-xl'>A List Of Your Projects</h2>
      {todoList.map(t => <TodoRow onStatusChange= 
      {markAsDone} done={false} key={t}>{t}</TodoRow>)}
      
      {!TodoformVisibilty && <Button  name="+ Add Your Project Name "
      onClick={ShowTodoform}></Button>} 
      
      {TodoformVisibilty && <TodoForm onClose= 
      {HideTodoform} onCreate={addTodo}/>}  
      
      {doneList.map(t => <TodoRow onStatusChange= 
      {markAsnotDone} done={true} key={t}>{t} 
      </TodoRow>)}
    </div>
    </div>
  );
}
export default TodoPage;