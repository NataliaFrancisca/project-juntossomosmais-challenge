import { useMemo } from "react";
import { FilterStyle } from "./FilterStyle"

import ElementFilter from "./ElementFilter";

const Filter = ({dataMembers}) => {

    const transformStringAtCaptalize = (string) => {
        const words = string.split(" ");
        const upperCaseWords = words.map(word => word.at(0).toUpperCase() + word.slice(1, word.length));
        return upperCaseWords.join(" ");
    }

    const getListOfStates = (total, member) => {
        const state = transformStringAtCaptalize(member.location.state);
        const exist = total.some(findState => findState == state);
        return !exist ? [...total, state] : total;
    }

    const listOfStates = useMemo(() => {
        return dataMembers.reduce(getListOfStates, [])
        .sort((a,b) => a.localeCompare(b))
    },[])

    return(
        <FilterStyle>

            <ElementFilter listFilters={listOfStates} nameFilter="Por Estado:" typeFilter="state" />
            <br />
            <ElementFilter listFilters={['Feminino', 'Masculino']} nameFilter="Por Gênero:" typeFilter="gender" />
            <br />
        </FilterStyle>
    )
}

export default Filter;