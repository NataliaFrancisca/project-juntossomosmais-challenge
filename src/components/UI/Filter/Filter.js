import { useEffect } from "react";
import { FilterStyle } from "./FilterStyle"

import {useSelector, useDispatch} from "react-redux";

const Filter = () => {

    const filterReducer = useSelector(state => state)
    const dispatch = useDispatch();

    const onToggleElementFilter = (value) => {
        const checkAlreadyAdded = filterReducer.some(element => element == value);
        return checkAlreadyAdded ? dispatch({type: "filter/remove", payload: value}) : dispatch({type: "filter/add", payload: value});
    }
    
    return(
        <FilterStyle>
            <form>
                <legend>Por Estado</legend>

                <label>
                    <input 
                        type="checkbox" 
                        name="state" 
                        value="São Paulo" 
                        onChange={(event) => onToggleElementFilter(event.target.value)}
                    />
                    São Paulo
                </label>

                <label>
                    <input 
                        type="checkbox"
                        name="state"
                        value="Rio de Janeiro"
                        onChange={(event) => onToggleElementFilter(event.target.value)}
                    />
                    Rio de Janeiro
                </label>

                <label>
                    <input 
                        type="checkbox"
                        name="state"
                        value="Minas Gerais"
                        onChange={(event) => onToggleElementFilter(event.target.value)}
                    />
                    Minas Gerais
                </label>

                <label>
                    <input 
                        type="checkbox"
                        name="state"
                        value="Espírito Santo" 
                        onChange={(event) => onToggleElementFilter(event.target.value)}
                    />
                    Espírito Santo
                </label>

                <label>
                    <input 
                        type="checkbox"
                        name="state"
                        value="Bahia"
                        onChange={(event) => onToggleElementFilter(event.target.value)}
                    />
                    Bahia
                </label>

                <a>Ver todos</a>
            </form>
        </FilterStyle>
    )
}

export default Filter;