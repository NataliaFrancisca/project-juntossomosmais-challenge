import { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import { MembersStyle } from "./MembersStyle";

import { useSelector } from "react-redux"
import Pagination from "../UI/Pagination/Pagination";

const dataFile = require("../../db/data.json");

const Members = () => {

    const filterReducer = useSelector(state => state.reducerFilter)
    const searchUser = useSelector(state => state.reducerSearchMember)

    const [data, setData] = useState([]);
    const [viewMembers, setViewMembers] = useState([]);
    const [currentSortType, setCurrentSortType] = useState();

    useEffect(() => {
        if(searchUser.length > 0){
            const newFilter = data.filter((value) => {
                const valueSearch = searchUser.toLowerCase();             
                return value.name.first.toLowerCase().includes(valueSearch) || value.name.last.toLowerCase().includes(valueSearch);
            });

            setData(newFilter);
        }else{
            returnDataBasedOnFilter();
        }
    },[searchUser])

    useEffect(() => {
        returnDataBasedOnFilter();
    },[])

    useEffect(() => {
        returnDataBasedOnFilter();
    },[filterReducer])

    const returnDataBasedOnFilter = () => {
        const baseValues = dataFile.results;

        const umGrandeTeste = baseValues.filter(data => {
            const state = data.location.state;
            const lowerCaseFilter = filterReducer.map(filter => filter.toLowerCase());
            return lowerCaseFilter.includes(state) && data;
        })

        if(umGrandeTeste.length !== 0){
            const dataSorted = returnDataBasedOnSortType(umGrandeTeste);
            setData(dataSorted);
            return false;
        }

        const dataSorted = returnDataBasedOnSortType(baseValues);
        setData(dataSorted);
     
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


    const onUpdateView = (data) => {
        setViewMembers(data);
    }

    useEffect(() => {
        console.log("data was updated", data)
    },[data])

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
                {viewMembers.map((data, index) => (
                    <Card dataCard={data} key={index} />
                ))}
            </section>

            <Pagination dataToUsePagination={data} onUpdateViewMembers={onUpdateView} />
        </MembersStyle>
    )
}

export default Members;