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
    const [currentPaginationView, setCurrentPaginationView] = useState();

    useEffect(() => {
        searchUserBrowserInput(data);
    },[searchUser])

    useEffect(() => {
        returnDataBasedOnFilter();
    },[])

    useEffect(() => {
        returnDataBasedOnFilter();
    },[filterReducer])


    const updatePaginationSpan = (value) => {
        setCurrentPaginationView(value);
    }

    const searchUserBrowserInput = (dataFiltered) => {
        const baseValues = dataFile.results;

        if(searchUser.length > 0){
            const newFilter = dataFiltered.filter((value) => {
                const valueSearch = searchUser.toLowerCase();             
                return value.name.first.toLowerCase().includes(valueSearch) || value.name.last.toLowerCase().includes(valueSearch);
            });
            setData(newFilter);
        }else{
            setData(baseValues)
        }
    }

    const returnDataBasedOnFilter = () => {
        const baseValues = dataFile.results;

        const umGrandeTeste = baseValues.filter(data => {
            const state = data.location.state;
            const lowerCaseFilter = filterReducer.map(filter => filter.toLowerCase());
            return lowerCaseFilter.includes(state) && data;
        })

        if(umGrandeTeste.length !== 0){
            const dataSorted = returnDataBasedOnSortType(umGrandeTeste);
            searchUserBrowserInput(dataSorted);
            return false;
        }

        const dataSorted = returnDataBasedOnSortType(baseValues);
        searchUserBrowserInput(dataSorted);
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

    return(
        <MembersStyle>
            <menu>
                <span>{currentPaginationView}</span>

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

            <Pagination dataToUsePagination={data} onUpdateViewMembers={onUpdateView} onUpdatePaginationView={updatePaginationSpan}/>
        </MembersStyle>
    )
}

export default Members;