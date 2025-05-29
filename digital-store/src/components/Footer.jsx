import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: #1F1F1F;
    font-family: Arial, Helvetica, sans-serif;
    color: #FFFFFF;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <div id="footer">
                <div id="bloco1"></div>

                <div id="bloco2"></div>

                <div id="bloco3"></div>

                <div id="bloco4">
                    <p>Contato</p>
                    <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                    <p>(85) 3051-3411</p>
                </div>
            </div>
        </FooterContainer>
    );
}
 
export default Footer;