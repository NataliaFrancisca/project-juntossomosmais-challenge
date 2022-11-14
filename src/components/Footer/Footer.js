import { FooterStyle } from "./FooterStyle";

const Footer = () => {
    return(
        <FooterStyle>
            <img src="images/juntossomosmais_logo_footer.svg" className="logo-footer" alt="juntos somos mais logo"/>

            <p>Juntos Somos Mais Fidelização S.A.</p>

            <span>Siga-nos nas redes sociais:</span>

            <div>
                <a href="/">
                    <img src="images/icon/facebook-icon.svg" alt="facebook logo"/>
                </a>

                <a href="/">
                    <img src="images/icon/linkedin-icon.svg" alt="linkedin logo" />
                </a>

                <a href="/">
                    <img src="images/icon/instagram-icon.svg" alt="instagram logo" />
                </a>
            </div>
        </FooterStyle>
    )
}

export default Footer;