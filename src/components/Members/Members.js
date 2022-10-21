import { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import { MembersStyle } from "./MembersStyle";

const dataFile = require("../../db/data.json");

const Members = () => {

    const [data, setData] = useState([]);

    const sortDataName = () => {
        const dataTeste = dataFile.results.slice(0,10);
        const newData = dataTeste.sort((a,b) => a.name.first.localeCompare(b.name.first));
        return newData;
    }

    const sortDataState = () => {
        const dataTeste = dataFile.results.slice(0,10);
        const newData = dataTeste.sort((a,b) => a.location.state.localeCompare(b.location.state));
        return newData;
    }

    useEffect(() => {
        sortDataName();
    },[])

    const onChangeFilter = (event) => {
        const filterChoosed = event.target.value;
        const dataFiltered = filterChoosed == 'name' ? sortDataName() : sortDataState;
        setData(dataFiltered);
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