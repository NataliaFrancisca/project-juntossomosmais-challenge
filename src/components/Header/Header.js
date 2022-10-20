import Filter from "../UI/Filter/Filter";
import { HeaderStyle } from "./HeaderStyle";

const Header = () => {
    return(
        <HeaderStyle>
            <span className="pagination">Home &gt; Usuários &gt; Detalhes</span>
            <h1>Lista de membros</h1>

            <section className="container-grid-header">
                <Filter />
              
                <div id="container-members">
                    <h1>teste</h1>
                </div>
            </section>
        </HeaderStyle>
    )
}

export default Header;