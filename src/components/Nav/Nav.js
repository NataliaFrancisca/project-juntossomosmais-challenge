import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavStyle } from "./NavStyle"

const Nav = () => {

    const dispatch = useDispatch();
    
    const updateSearchInput = (value) => {
        dispatch({type: 'search/member', payload: value.toLowerCase()})
    }

    return(
        <NavStyle>
            <a href="/">
                <img src="images/juntossomosmais_logo.svg" alt="logo website" id="logo" />
            </a>

            <label id="search-bar" htmlFor="input-search">
                <img src="images/icon/i-search.svg" alt="search icon" />
                <input type="text" placeholder="Buscar aqui" id="input-search" onChange={(event) => updateSearchInput(event.target.value)} />
            </label>
        </NavStyle>
    )
}

export default Nav;