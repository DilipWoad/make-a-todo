import React from 'react';
import TodoEntry from "./TodoEntry";

const TodoWrapper = () => {
  return (
    <div className='  flex justify-center py-20 w-full'>
        <div className="block  w-[370px] max-w-lg md:w-full p-6 bg-lime-200 border border-gray-200 rounded-lg shadow-2xl ">
            <div className='text-black flex justify-center text-center text-4xl my-2'>
            <h1 className='font-semibold mb-6 bg-lime-600 w-full p-6 rounded-md'>Make-A-Todo</h1>
            </div> 
            <TodoEntry/>
        </div>
        
    </div>
  )
}

export default TodoWrapper