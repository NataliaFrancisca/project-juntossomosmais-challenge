import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { HomeStyle } from "./HomeStyle";

const Home = () => {
    return(
        <HomeStyle>
            <Nav />
            <Header />
            <Footer />
        </HomeStyle>
    )
}

export default Home;