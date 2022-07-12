import React from "react";
import styled, { css } from "styled-components";

const ButtonBase = css`
    border-radius: 100px;
    font-family: "Arial";
    font-size 16px;
    font-weight:800;
    line-height:160%;
    display:flex;
    text-align:center;
    align-items: center;
    margin: 3px 3px;
`

const ButtonMedium =css`
    padding: 2px 20px;
    min-height:32px;
`

 const ButtonLarge = css`
    padding: 5px 50px;
    min-height:64px;
`

const ButtonColorFilled = css`
    border: 2px solid #245d66;
    background-color: #245d66;
    color: white;
    &:hover {
        background-color: white;
        color: #245d66;
    }
`

const ButtonWhiteFIlled = css`
    border:2px solid #245d66;
    background-color: white;
    color: #245d66;
    &:hover {
        background-color: #245d66;
        color: white;
    }
`

export const ButtonColorFilledLarge = styled.button`
    ${ButtonBase};
    ${ButtonLarge};
    ${ButtonColorFilled};
`;

export const ButtonWhiteFilledLarge = styled.button`
    ${ButtonBase};
    ${ButtonLarge};
    ${ButtonWhiteFIlled};
`;

