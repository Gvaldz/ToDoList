import React from 'react';
import styled from 'styled-components';

const TitleStyled = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 35px;
    color: #ffffff;
    margin: 0;
`;

function Title(props) {
    return (
        <TitleStyled>{props.text}</TitleStyled>
    );
}

export default Title;
