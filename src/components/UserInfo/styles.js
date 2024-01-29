import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
`
export const UserPictore = styled.img `
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #Ffffff;
    

`
export const NameText = styled.div `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #Ffffff;
    padding-left: 5px;
    margin-bottom: 5px;
`
export const Progress = styled.div `
    width: 180px;
    height: 6px;
    background-color: #ffffff;
    border-radius: 3px;
    position: relative;
    margin-left: 5px;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percentual})=> percentual}%;
        height: 6px;
        border-radius: 3px;
        background-color: #23dd7a;
        padding-left: 5px;
        }
`
