import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const ElementFilter = ({listFilters, nameFilter, typeFilter}) => {

    const formRef = useRef();
    const [shouldShowAllFilterList, setShouldShowAllFilterList] = useState(false);

    const filterReducer = useSelector(state => state.reducerFilter)
    const dispatch = useDispatch();

    const onToggleElementFilter = (value) => {
        const checkAlreadyAdded = filterReducer[typeFilter].some(element => element == value.toLowerCase());
        return checkAlreadyAdded ? dispatch({type: `filter/remove/${typeFilter}`, payload: value.toLowerCase()}) : dispatch({type: `filter/add/${typeFilter}`, payload: value.toLowerCase()});
    }

    useEffect(() => {
        const allCheckBoxInputs = Array.from(document.querySelectorAll(`input.checkbox-input`));

        allCheckBoxInputs.forEach((input) => {
            const value = input.value.toLowerCase();
            return filterReducer.state.includes(value) ? input.checked = true : false &
            filterReducer.gender.includes(value) ? input.checked = true : false  
        })

    },[shouldShowAllFilterList])

    return(
        <>
            <form ref={formRef}>
                <legend>{nameFilter}</legend>

                {listFilters.slice(0,5).map(state => (
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

                {shouldShowAllFilterList && listFilters.slice(5, listFilters.length).map(state => (
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

                {listFilters.length > 5 &&  
                    <a onClick={() => setShouldShowAllFilterList(!shouldShowAllFilterList)}>
                        {!shouldShowAllFilterList ? "Ver todos" : "Esconder"}
                    </a> 
                }
               
            </form>
             
        </>
    )
}

export default ElementFilter;