import { MembersStyle } from "./MembersStyle";

const Members = () => {
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

            </section>



        </MembersStyle>
    )
}

export default Members;