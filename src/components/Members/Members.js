import { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import { MembersStyle } from "./MembersStyle";

import { useSelector } from "react-redux"

const dataFile = require("../../db/data.json");

const Members = () => {

    const filterReducer = useSelector(state => state)
    const [data, setData] = useState([]);
    const [currentSortType, setCurrentSortType] = useState();

    useEffect(() => {
        returnDataBasedOnFilter();
    },[])

    useEffect(() => {
        returnDataBasedOnFilter();
    },[filterReducer])

    const returnDataBasedOnFilter = () => {
        const baseValues = dataFile.results.slice(0,10);

        const umGrandeTeste = baseValues.filter(data => {
            const state = data.location.state;
            const lowerCaseFilter = filterReducer.map(filter => filter.toLowerCase());
            return lowerCaseFilter.includes(state) && data;
        })

        if(umGrandeTeste.length == 0){
            const dataSorted = returnDataBasedOnSortType(baseValues);
            setData(dataSorted);
        }else{
            const dataSorted = returnDataBasedOnSortType(umGrandeTeste);
            setData(dataSorted);
        }
    }

    const returnDataBasedOnSortType = (dataToSort) => {
        switch(currentSortType){
            case "name":
                return dataToSort.sort((a,b) => a.name.first.localeCompare(b.name.first));
            case "state":
                return dataToSort.sort((a,b) => a.location.state.localeCompare(b.location.state));
            default:
                return dataToSort;
        }
    }
    
    const onChangeFilter = (event) => {
        const filterChoosed = event.target.value;
        setCurrentSortType(filterChoosed);
    }

    useEffect(() => {
        returnDataBasedOnFilter();
    },[currentSortType])

    return(
        <MembersStyle>
            <menu>
                <span>Exibindo 9 de 25 items</span>

                <form>
                    <label>Ordenar por:</label>
                    <select id="sort-list" onChange={(event) => onChangeFilter(event)}>
                        <optgroup>
                            <option value="name">Nome</option>
                            <option value="state">Estado</option>
                        </optgroup>
                    </select>
                </form>
            </menu>

            <section className="list-cards-members">
                {data.map((data, index) => (
                    <Card dataCard={data} key={index} />
                ))}
            </section>

        </MembersStyle>
    )
}

export default Members;