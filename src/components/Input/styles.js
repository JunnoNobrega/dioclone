import styled from "styled-components";

export const InputContainer = styled.div `
    width: 100%;
    max-width: 275px;

    border-bottom: 1px solid #3b3450;

    display: flex;
    align-items: center;
    margin-bottom: 20px ;

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    

`

export const IconContainer = styled.div `
    margin-right: auto;

`

export const InputText = styled.input`
    background-color: transparent;
    color: #ffffff;
    border: 1px solid rgba( 255,255,255, 0.5) ;
    height: 30px ;
    width: 100%;
 
    padding-left: 5px;
    border-radius: 5px;
`
