import React from "react";
import'./sort.css';

export default function Sort({handleAlphabeticalOrder, handleSortByAttack}){
    return(
        <div>
            <select onChange={handleAlphabeticalOrder}>
                <option>Name</option>
                <option value='Asc'>Ascending</option>
                <option value='Desc'>Descending</option>
            </select>
            <select onChange={handleSortByAttack}>
                <option>Attack</option>
                <option value='Highest'>Highest</option>
                <option value='Lowest'>Lowest</option>
            </select>
        </div>
    )
};

