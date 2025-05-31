import styled from "styled-components";

const ProductCard = () => {

    const ContainerCard = styled`
        font: normal 24px Arial;

        img {
            width: 292px;
            height: 321px;
        }

        p#price {
            color: #1F1F1F;
        }

        p#priceDiscount {
            color: #8F8F8F;
        }
    
    `;

    return (
        <ContainerCard>
            <img src="" alt="" />

            <p>name</p>
            <p id="price">price</p>
            <p id="priceDiscount">price discount</p>
        </ContainerCard>
    );
}
 
export default ProductCard;