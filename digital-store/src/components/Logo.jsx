const Logo = ({imagem, alt}) => {

    return (
        <>
            <img
            src={imagem}
            alt={alt}
            style={{width: 253, height: 144}}
            />
        </>
    );
}
 
export default Logo;