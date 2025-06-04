import { BrowserRouter, NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const HeaderContainer = styled.header`
    background-color: #FFFFFF;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    width: auto;
    margin-left: 5em;
    margin-right: 5em;

    & #header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & #campoBusca {
            position: relative;
            display: inline-block;
        }

        & #areaDirecionamento {
            display: flex;
            align-items: center;
            gap: 2em;
        }

        & input#barraPesquisa {
            background-color: #F3F3F3;
            font-size: 16px;
            border: 0;
            border-radius: 0.5em;
            width: 50em;
            height: 3.5em;
            padding-left: 1em;
            padding-right: 3em;
        }

        & img#iconePesquisa {
            position: absolute;
            width: 30px;
            height: 30px;
            top: 15px;
            right: 10px;
            z-index: 1;
            cursor: pointer;
        }

        & a#cadastro {
            color: #474747;
            font-size: 16px;
        }

        & a#entrar {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #C92071;
            font-size: 14px;
            color: white;
            font-weight: bold;
            width: 114px;
            height: 40px;
            border-radius: 4px;
            text-decoration: none;
        }
    }

    & div#navegacao ul {
        display: flex;
        padding: 0;
        gap: 2em;
        list-style: none;
        
        a  {
            text-decoration: none;
            color: black;
            position: relative;
            display: inline-block;
            padding-bottom: 5px;
        }

        a.active {
            color: #C92071;
        }

        a.active::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: #C92071;
            left: 0;
            bottom: 0;
            transform: scaleX(1);
        }
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
                <div id="header">
                    <Logo
                    imagem='logo-header.svg'
                    alt='Logo do Header'
                    />

                    <div id="campoBusca">
                        <input type="text" id="barraPesquisa" placeholder="Pesquisar produto..."/>
                        <img src="search.svg" alt="Ícone de Pesquisa" id="iconePesquisa" />
                    </div>

                    <div id="areaDirecionamento">
                        <a href="" id="cadastro">Cadatre-se</a>
                        <a href="" id="entrar">Entrar</a>
                    </div>

                    <img src="mini-cart.svg" alt="Mini cart de compras" />

                </div>

                <div id="navegacao">
                    <nav>
                        <ul>
                            <BrowserRouter>
                                <li><NavLink to={'/'}>Home</NavLink></li>
                                <li><NavLink to={'/produtos'}>Produtos</NavLink></li>
                                <li><NavLink to={'/categorias'}>Categorias</NavLink></li>
                                <li><NavLink to={'/pedidos'}>Meus Pedidos</NavLink></li>
                            </BrowserRouter>
                        </ul>
                    </nav>
                </div>
        </HeaderContainer>
    );
}
 
export default Header;