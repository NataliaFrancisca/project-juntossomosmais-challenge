import { useState, useEffect } from "react";
import Members from "../Members/Members";
import Filter from "../UI/Filter/Filter";
import { HeaderStyle } from "./HeaderStyle";

const Header = () => {

    const [members, setMembers] = useState();
    const [errorFetch, setErrorFetch] = useState(false);

    useEffect(() => {
        fetch("http://localhost:9999/members")
            .then(res => res.json())
            .then(data => setMembers([...data]))
            .catch(error => {
                setErrorFetch(true)
                console.error(error)
            })
    },[])

    return(
        <HeaderStyle>
            <span className="pagination">Home &gt; Usuários &gt; Detalhes</span>
            <h1>Lista de membros</h1>

            {errorFetch &&<p>Desculpa, estamos com problemas na requisição!</p>}         
            {!members && !errorFetch && <p>Carregando dados....</p>}

            <section className="container-grid-header">
                {members && 
                    <>
                        <Filter dataMembers={members} />
                        <Members dataMembers={members} />
                    </>
                }
            </section>
        </HeaderStyle>
    )
}

export default Header;