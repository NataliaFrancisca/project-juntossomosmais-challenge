import { useEffect, useState } from "react";
import { NavStyle } from "./NavStyle"

const Nav = () => {

    const [userSearch, setUserSearch] = useState();

    useEffect(() => {
        console.log(userSearch)
    },[userSearch])

    return(
        <NavStyle>
            <a href="/">
                <img src="images/juntossomosmais_logo.svg" alt="logo website" id="logo" />
            </a>

            <label id="search-bar" htmlFor="input-search">
                <img src="images/icon/i-search.svg" alt="search icon" />
                <input type="text" placeholder="Buscar aqui" id="input-search" onChange={(event) => setUserSearch(event.target.value)} />
            </label>
        </NavStyle>
    )
}

export default Nav;