import { useState, useEffect } from "react";
import Members from "../Members/Members";
import Filter from "../UI/Filter/Filter";
import { HeaderStyle } from "./HeaderStyle";

const Header = () => {

    const [members, setMembers] = useState();

    useEffect(() => {
        fetch("http://localhost:9999/members")
            .then(res => res.json())
            .then(data => setMembers([...data]))
            .catch(error => console.error(error))
    },[])

    return(
        <HeaderStyle>
            <span className="pagination">Home &gt; Usuários &gt; Detalhes</span>
            <h1>Lista de membros</h1>

            <section className="container-grid-header">
                <Filter />

                {members ? <Members dataMembers={members} /> 
                    : <p>Sorry, something wrong with request!</p>
                }
            </section>
        </HeaderStyle>
    )
}

export default Header;