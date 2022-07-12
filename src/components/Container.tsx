import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ButtonColorFilledLarge, ButtonWhiteFilledLarge } from "./ButtonStyled.tsx";
import { CalculatorBox } from "./CalculatorBox.tsx";
import { Display } from "./Display.tsx";

const Container = () => {
    interface StateProps {
        input: number;
    }

    const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const [input, setInput] = useState<StateProps>();

    const handleNumberClick = (e) => {
        setInput(e.target.id)
    }

    return(
        <> 
        <Display>
            {input}
            </Display>     
         <CalculatorBox>

        {numberArr.map((idx) => {
            return(
            <ButtonColorFilledLarge
            id={idx}
            onClick={handleNumberClick}
            >{idx}</ButtonColorFilledLarge>
        )})}
        <ButtonWhiteFilledLarge >=</ButtonWhiteFilledLarge> 
        <ButtonWhiteFilledLarge>C</ButtonWhiteFilledLarge> 
            
        
        </CalculatorBox>

        </>
    )
}

export default Container;