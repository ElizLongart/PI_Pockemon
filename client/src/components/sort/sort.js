import React from "react";
import'./sort.css';

export default function Sort({handleAlphabeticalOrder, handleSortByAttack}){
    return(
        <div className='containerSort'>
            <select className='sortName' onChange={handleAlphabeticalOrder}>
                <option>Name</option>
                <option value='Asc'>Ascending</option>
                <option value='Desc'>Descending</option>
            </select>
            <select  className='sortAttack' onChange={handleSortByAttack}>
                <option>Attack</option>
                <option value='Highest'>Highest</option>
                <option value='Lowest'>Lowest</option>
            </select>
        </div>
    )
};

