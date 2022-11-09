import { useRef } from "react";
import { FilterStyle } from "./FilterStyle"

import {useSelector, useDispatch} from "react-redux";

const Filter = () => {
    const allCheckBoxInputs = Array.from(document.querySelectorAll(`input.checkbox-input`));

    const filterReducer = useSelector(state => state.reducerFilter)
    const dispatch = useDispatch();
    const formRef = useRef();

    const onToggleElementFilter = (value) => {
        const checkAlreadyAdded = filterReducer.some(element => element == value.toLowerCase());
        return checkAlreadyAdded ? dispatch({type: "filter/remove", payload: value.toLowerCase()}) : dispatch({type: "filter/add", payload: value.toLowerCase()});
    }

    allCheckBoxInputs.forEach((input) => {
        const value = input.value.toLowerCase();
        return filterReducer.includes(value) ? input.checked = true : false;
    })

    return(
        <FilterStyle>
            <form ref={formRef}>
                <legend>Por Estado</legend>

                <label>
                    <input
                        className="checkbox-input" 
                        type="checkbox" 
                        name="state" 
                        value="São Paulo" 
                        onChange={(event) => onToggleElementFilter(event.target.value)}
                    />
                    São Paulo
                </label>

                <label>
                    <input
                        className="checkbox-input" 
                        type="checkbox"
                        name="state"
                        value="Rio de Janeiro"
                        onChange={(event) => onToggleElementFilter(event.target.value)}
                    />
                    Rio de Janeiro
                </label>

                <label>
                    <input
                        className="checkbox-input" 
                        type="checkbox"
                        name="state"
                        value="Minas Gerais"
                        onChange={(event) => onToggleElementFilter(event.target.value)}
                    />
                    Minas Gerais
                </label>

                <label>
                    <input
                        className="checkbox-input" 
                        type="checkbox"
                        name="state"
                        value="Espírito Santo" 
                        onChange={(event) => onToggleElementFilter(event.target.value)}
                    />
                    Espírito Santo
                </label>

                <label>
                    <input
                        className="checkbox-input" 
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