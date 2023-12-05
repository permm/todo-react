import React from "react";

const Todo = ({value,index , onClickRemove}) =>{
    const background = index % 2 == 1 ? "text-center bg-red-400" : "text-center bg-red-300"
    
    return(
        <div className={background}>
            {value}
            <button onClick={onClickRemove} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-4">x</button>
        </div>
    )
}
export default Todo