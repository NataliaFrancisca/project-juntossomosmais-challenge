import { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import { MembersStyle } from "./MembersStyle";

const dataFile = require("../../db/data.json");

const Members = () => {

    const [data, setData] = useState([]);
    return(
        <MembersStyle>

            <menu>
                <span>Exibindo 9 de 25 items</span>

                <form>
                    <label>Ordenar por:</label>
                    <select id="sort-list">
                        <optgroup>
                            <option>Nome</option>
                            <option>Estado</option>
                            <option>Idade</option>
                        </optgroup>
                    </select>
                </form>
            </menu>


            <section className="list-cards-members">
                {dataFile.results.slice(0,10).map((data, index) => (
                    <Card dataCard={data} key={index} />
                ))}
            </section>

        </MembersStyle>
    )
}

export default Members;