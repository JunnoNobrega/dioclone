import React from 'react'

import { Link } from 'react-router-dom'

import {FindInputContainer,  Container, InputHeader,Menu, MenuRight, Row,  Wraper, UserPicture } from './styles'
import { Button } from '../Buttom'
import logo from '../../assets/logo-dio.png'


const Header = ({autenticado}) => {
  return (
    <Wraper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da Dio"/>
                {autenticado ? (
                    <>
                        <FindInputContainer>
                            <InputHeader placeholder='Buscar ...'/>
                        </FindInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>

                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <>
                        <UserPicture src="https://avatars.githubusercontent.com/u/53883884?v=4" />
                    </>) : (
                    <>

                        <Link to="/">
                            <MenuRight href="#">Home</MenuRight>
                        </Link>
                        <Link to="/login">
                            <Button title = "Entrar"/>
                        </Link>
                        <Button title = "Cadastrar"/>
                    </>    

                )}
            </Row>
        </Container>

    </Wraper>
  )
}

export {Header}
