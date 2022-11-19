import React from "react";
import './filterByStorage.css'

export default function FilterByStorage({handleFilterByStorage, handleClickAll}){
    return (
        <>
            <div className='containerFilterStorage'>
                <button className='Existing'  value='Existing' onClick={handleFilterByStorage}>Existing</button>
                <button className='New' value='New' onClick={handleFilterByStorage}>New</button>
            </div>
        </>
    )
};