import React from "react";
import './searchField.css'

export const SearchField = ({handleChange, placeholder}) => {
    return (
        <input type='search'
               className='search'
               placeholder={placeholder}
               onChange={handleChange}/>
    )

}