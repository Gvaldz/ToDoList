import styled from "styled-components";

const LabelStyled = styled.label`
    font-weight: 600;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    font-size: 18px;
`;

function Label(props) {
    return(
        <LabelStyled>{props.text}</LabelStyled>
    )
}

export default Label;