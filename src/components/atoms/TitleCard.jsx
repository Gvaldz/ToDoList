import styled from "styled-components";

const TitleStyled = styled.h3`
    font-weight: 600;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    font-size: 18px;
    margin: 5px 0;
`;

function TitleCard(props) {
    return(
        <TitleStyled>{props.text}</TitleStyled>
    )
}

export default TitleCard;