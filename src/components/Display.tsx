import styled, { css } from "styled-components";
import React from "react";

const DisplayContainer = css`
    width: 375px;
    height: 50px;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 1px solid blue;
`

export const Display = styled.div`
    ${DisplayContainer};

`