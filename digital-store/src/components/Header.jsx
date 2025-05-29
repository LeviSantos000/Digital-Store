import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #FFFFFF;
    font-family: Arial, Helvetica, sans-serif;
    & #linha1 {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2em;
        margin: 2em;

        & input#barraPesquisa {
            background-color: #f3f3f3;
            border: 0;
            border-radius: 0.5em;
            width: 30em;
            height: 3em;
            padding-left: 1em;
            padding-right: 1em;
        }

        & button#entrar {
            background-color: #C92071;
            color: #FFFFFF;
            width: 8em;
            height: 2.5em;
            border-radius: 0.5em;
            border: 0;
        }
    }

    & #linha2 ul {
        display: flex;
        gap: 2em;
        list-style: none;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <div id="header">
                <div id="linha1">
                    <img src="logo-header.svg" alt="Logo Digital Store" />

                    <input type="text" id="barraPesquisa" placeholder="Pesquisar produto..."/>

                    <a href="#">Cadatre-se</a>
                    <button id="entrar">Entrar</button>

                    <img src="mini-cart.svg" alt="Mini cart de compras" />

                </div>
                <div id="linha2">

                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Produtos</li>
                            <li>Categorias</li>
                            <li>Meus Pedidos</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </HeaderContainer>
    );
}
 
export default Header;