import { useEffect, useState } from "react";
import { MembersStyle } from "./MembersStyle";

import { useSelector } from "react-redux"
import Pagination from "../UI/Pagination/Pagination";

const Members = ({dataMembers}) => {

    const filterReducer = useSelector(state => state.reducerFilter)
    const searchUser = useSelector(state => state.reducerSearchMember)
   
    const [members, setMembers] = useState([...dataMembers]);
    const [sortType, setSortType] = useState();
    const [currentPaginationView, setCurrentPaginationView] = useState();

    const onChangeSortType = (event) => setSortType(event.target.value);

    const getMembersBasedOnCurrentSortType = (currentData) => {
        switch(sortType){
            case "name":
                return currentData.sort((a,b) => a.name.first.localeCompare(b.name.first))
            case "state":
                return currentData.sort((a,b) => a.location.state.localeCompare(b.location.state))
            case "age-company-decreasing":
                return currentData.sort((a,b) => a.registered.age - b.registered.age)
            case "age-company-crescent":
                return currentData.sort((a,b) => b.registered.age - a.registered.age)
            default:
                return currentData;
        }
    }

    const updateDataMembers = () => {
        const dataMembersUpdated = getDataWithFilterRules();
        const checkExistValuesEqualToSearch = getMembersEqualCurrentSearch(dataMembersUpdated);
        const finalDataMembersUpdates = checkExistValuesEqualToSearch ? checkExistValuesEqualToSearch : dataMembersUpdated;
        setMembers(getMembersBasedOnCurrentSortType(finalDataMembersUpdates));
    }

    const getMembersEqualCurrentSearch = (currentMembersData) => {
        if(searchUser.length > 0){
            const searchFilter = currentMembersData.filter((member) => {
               return member.name.first.toLowerCase().includes(searchUser)
                || member.name.last.toLowerCase().includes(searchUser)
            })
            return searchFilter;
        }
        return false;
    }

    const getDataWithFilterRules = () => {
        const hasValuesEqualToFilters = dataMembers.filter(member => {
            const locationState = member.location.state;
            const memberGender = member.gender == 'female' ? "feminino" : "masculino";
            
            if(filterReducer.gender.length == 0 && filterReducer.state.length > 0){
                return filterReducer.state.includes(locationState) && member;
            }else if(filterReducer.gender.length > 0 && filterReducer.state.length == 0){
                return filterReducer.gender.includes(memberGender) && member;
            }else{
                return (filterReducer.state.includes(locationState) && filterReducer.gender.includes(memberGender)) && member;
            }
        })

        return hasValuesEqualToFilters.length !== 0 ? hasValuesEqualToFilters : dataMembers;
    }

    const updatePaginationSpan = (shouldUpdateValue, numberOfMemberPerPage) => {
        if(shouldUpdateValue && numberOfMemberPerPage !== currentPaginationView){
            setCurrentPaginationView(numberOfMemberPerPage)
        }else if(!shouldUpdateValue && numberOfMemberPerPage !== currentPaginationView){
            setCurrentPaginationView(numberOfMemberPerPage)
        }
    }

    useEffect(() => {
        updateDataMembers();
    },[])

    useEffect(() => {
        const dataUpdates = getMembersBasedOnCurrentSortType(members);
        setMembers([...dataUpdates]);
    },[sortType])

    useEffect(() => {
        updateDataMembers();
    },[filterReducer, searchUser])

    return(
        <MembersStyle>
            <menu>
                <span>Exibindo {currentPaginationView} de {members.length}</span>
                <form>
                    <label>Ordenar por:</label>
                    <select id="sort-list" onChange={(event) => onChangeSortType(event)} defaultValue="name">
                        <optgroup>
                            <option value="name">Nome</option>
                            <option value="state">Estado</option>
                            <option value="age-company-decreasing">Menor tempo de empresa</option>
                            <option value="age-company-crescent">Maior tempo de empresa</option>
                        </optgroup>
                    </select>
                </form>
            </menu>

            <Pagination dataToUsePagination={members} onUpdatePaginationView={updatePaginationSpan} />
        </MembersStyle>
    )
}

export default Members;