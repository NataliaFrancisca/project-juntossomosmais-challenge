import { useRef, useState, useMemo } from "react";
import { FilterStyle } from "./FilterStyle"

import {useSelector, useDispatch} from "react-redux";

const Filter = ({dataMembers}) => {
   
    const filterReducer = useSelector(state => state.reducerFilter)
    const dispatch = useDispatch();

    const [shouldShowAllFilterList, setShouldShowAllFilterList] = useState(false);

    const formRef = useRef();
    const allCheckBoxInputs = Array.from(document.querySelectorAll(`input.checkbox-input`));

    const onToggleElementFilter = (value) => {
        const checkAlreadyAdded = filterReducer.some(element => element == value.toLowerCase());
        return checkAlreadyAdded ? dispatch({type: "filter/remove", payload: value.toLowerCase()}) : dispatch({type: "filter/add", payload: value.toLowerCase()});
    }

    allCheckBoxInputs.forEach((input) => {
        const value = input.value.toLowerCase();
        return filterReducer.includes(value) ? input.checked = true : false;
    })

    const transformStringAtCaptalize = (string) => {
        const words = string.split(" ");
        const upperCaseWords = words.map(word => word.at(0).toUpperCase() + word.slice(1, word.length));
        return upperCaseWords.join(" ");
    }

    const getState = (total, member) => {
        const state = transformStringAtCaptalize(member.location.state);
        const exist = total.some(findState => findState == state);
        return !exist ? [...total, state] : total;
    }

    const listOfStates = useMemo(() => {
        return dataMembers.reduce(getState, [])
        .filter(state => !['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espirito Santo', 'Bahia'].includes(state))
    },[])

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

                <a onClick={() => setShouldShowAllFilterList(!shouldShowAllFilterList)}>Ver todos</a>

                {shouldShowAllFilterList && listOfStates.map(state => (
                    <label>
                        <input
                            className="checkbox-input" 
                            type="checkbox"
                            name="state"
                            value={state}
                            onChange={(event) => onToggleElementFilter(event.target.value)}
                        />
                        {state}
                    </label>
                ))}
                
            </form>
        </FilterStyle>
    )
}

export default Filter;