import { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import { MembersStyle } from "./MembersStyle";

import { useSelector } from "react-redux"

const dataFile = require("../../db/data.json");

const Members = () => {

    const filterReducer = useSelector(state => state)

    const [data, setData] = useState([]);
    const [dataUsingFilter, setDataUsingFilter] = useState([]);

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

            if(lowerCaseFilter.includes(state)){
                return data;
            }
        })

        console.log(umGrandeTeste);

        setData(umGrandeTeste);

    
    }


    // const [data, setData] = useState([]);
    // const [dataOrderFilter, setDataOrderFilter] = useState([]);

    // const filterReducer = useSelector(state => state)

    // const getDataWithFilter = (data) => {
    //     if(filterReducer.length > 0){

    //         console.log("VAI PRA MERDA")
    //         filterReducer.forEach(filter => {
    //             const aa = data.filter(element => element.location.state == filter.toLowerCase());

    //             if(aa.length == 0){
    //                 setData(dataFile.results);
    //             }else{
    //                 console.log('meu deusss', aa);
    //                 setData(aa)
    //             }
              
    //         })


    //     }
    // }

    // useEffect(() => {
    //     getDataWithFilter(data);
    // },[filterReducer])

    const sortDataName = (data) => {
        const dataTeste = data.slice(0,20);
        const newData = dataTeste.sort((a,b) => a.name.first.localeCompare(b.name.first));
        setData(newData)
    }

    const sortDataState = (data) => {
        const dataTeste = data.slice(0,20);
        const newData = dataTeste.sort((a,b) => a.location.state.localeCompare(b.location.state));
        setData(newData);
    }

    // useEffect(() => {
    //     const teste = sortDataName(data);
    //     setData(teste);
    // },[])

    const onChangeFilter = (event) => {
        const filterChoosed = event.target.value;
        console.log(filterChoosed)
        // const dataFiltered = filterChoosed == 'name' ? sortDataName(data) : sortDataState(data);
        // setDataOrderFilter(dataFiltered);
    }

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