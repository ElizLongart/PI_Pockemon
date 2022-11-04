import React from "react";

export default function FilterByStorage({handleFilterByStorage, handleClickAll}){
    return (
        <>
            <div>
                <button onClick={handleClickAll}>All</button>
                <button value='Existing' onClick={handleFilterByStorage}>Existing</button>
                <button value='New' onClick={handleFilterByStorage}>New</button>
            </div>
        </>
    )
};