import { useEffect, useState } from "react";
import { FilterStyle } from "./FilterStyle"

const Filter = () => {

    const [elementsFilterSelected, setElementsFilterSelected] = useState([]);

    const onToggleElementFilter = (value) => {
        const checkAlreadyAdded = elementsFilterSelected.some(element => element == value);
        const removeFilter = elementsFilterSelected.filter(element => element !== value);
        return checkAlreadyAdded ? setElementsFilterSelected(removeFilter) : setElementsFilterSelected([...elementsFilterSelected, value]);
    }

    useEffect(() => {
        console.log(elementsFilterSelected)
    },[elementsFilterSelected])

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