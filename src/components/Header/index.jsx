import React from 'react'

import {FindInputContainer,  Container, InputHeader,Menu, MenuRight, Row,  Wraper } from './styles'
import { Button } from '../Buttom'
import logo from '../../assets/logo-dio.png'


const Header = () => {
  return (
    <Wraper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da Dio"/>
                <FindInputContainer>
                    <InputHeader placeholder='Buscar ...'/>
                </FindInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href="#">Home</MenuRight>
                <Button title = "Entrar"/>
                <Button title = "Cadastrar"/>
            </Row>
        </Container>

    </Wraper>
  )
}

export {Header}
