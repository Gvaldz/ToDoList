import styled from "styled-components";

const TextStyled = styled.p`
    font-weight: 400;
    font-size: 20px;
    color: white;
    margin: 5px 0;
    font-family:Arial, Helvetica, sans-serif;
`;

function Text(props) {
    return(
        <TextStyled>{props.text}</TextStyled>
    )
}

export default Text;