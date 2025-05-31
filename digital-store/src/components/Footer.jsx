import styled from "styled-components";
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
    background-color: #1F1F1F;
    font-family: Arial, Helvetica, sans-serif;
    color: #FFFFFF;
    box-sizing: border-box;
    padding: 4em;
    padding-bottom: 0.5em;
    width: 100%;

    & p#copyright {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & div#footer {
        display: flex;
        justify-content: space-between;
        padding-bottom: 2em;
    }

    & div#logo {
        width: 20em;

        p {
            line-height: 1.5em;
            margin-top: 2.5em;
            margin-bottom: 2.5em;
        }

        div#rede-social-icons {
            display: flex;
            gap: 2em;

            img {
                cursor: pointer;
            }
        }
    }

    & div#informacao{
        width: 12em;

        h2 {
            margin-top: 0;
            margin-bottom: 1.5em;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 1em;
            padding-left: 0;
            list-style: none;
        }
    }

    & div#categoria {
        width: 12em;

        h2 {
            margin-top: 0;
            margin-bottom: 1.5em;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 1em;
            padding-left: 0;
            list-style: none;
        }
    }

    & div#contato {
        width: 13em;

        h2 {
            margin-top: 0;
            margin-bottom: 1.5em;
        }

        p {
            line-height: 1.5em;
        }
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
                <div id="footer">
                    <div id="logo">
                        <img src="logo-footer.svg" alt="Logo Digital Store" />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        <div id="rede-social-icons">
                            <Link to="https://www.facebook.com/?locale=pt_BR" target="_blank"><img src="facebook.svg" alt="Ícone do Facebook" /></Link>
                            <Link to="https://www.instagram.com/" target="_blank"><img src="instagram.svg" alt="Ícone do Instagram" /></Link>
                            <Link to="https://x.com/i/flow/login" target="_blank"><img src="twitter.svg" alt="Ícone do Twitter" /></Link>
                        </div>
                    </div>
                    <div id="informacao">
                        <h2>Informação</h2>
                        <ul>
                            <li>Sobre Drip Store</li>
                            <li>Segurança</li>
                            <li>Wishlist</li>
                            <li>Blog</li>
                            <li>Trabalhe Conosco</li>
                            <li>Meus Pedidos</li>
                        </ul>
                    </div>
                    <div id="categoria">
                        <h2>Categoria</h2>
                        <ul>
                            <li>Camisetas</li>
                            <li>Calças</li>
                            <li>Bonés</li>
                            <li>Headphones</li>
                            <li>Tênis</li>
                        </ul>
                    </div>
                    <div id="contato">
                        <h2>Contato</h2>
                        <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                        <p>(85) 3051-3411</p>
                    </div>
                </div>
                <hr />
                <p id="copyright">@ 2022 Digital College</p>
        </FooterContainer>
    );
}
 
export default Footer;