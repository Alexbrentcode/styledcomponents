import { css } from "styled-components";
import React from "react"
import styled from "styled-components";

 const CalculatorBase = css`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    width:375px;
    height:max-content;
    border: 1px solid black;
`
export const CalculatorBox = styled.div`
    ${CalculatorBase}
`