import React, { useContext } from 'react'

import { Link, useLocation } from 'react-router-dom'

import {FindInputContainer,  Container, InputHeader,Menu, MenuRight, Row,  Wraper, UserPicture } from './styles'
import { Button } from '../Buttom'
import logo from '../../assets/logo-dio.png'
import { AuthContext } from '../../context/auth'



const Header = () => {

    const {user, handleSignOut} = useContext(AuthContext);
    const location = useLocation();

   const isHomePage = location.pathname === '/';

  return (
    <Wraper>
        <Container>
            <Row>
                <Link to="/">
                     <img src={logo} alt="Logo da Dio"/>
                </Link>
                {user.id ? (
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
                {user.id ? (
                    <>
                    
                        <UserPicture src="https://avatars.githubusercontent.com/u/53883884?v=4"/>
                        <Link to="/" onClick={handleSignOut}>Sair</Link>
                    
                  
                
                    </>) : (
                    <>
                        {isHomePage? null: (
                            <Link to="/">
                                <MenuRight href="#">Home</MenuRight>
                            </Link>

                        )}
                        <Link to="/login">
                            <Button title = "Entrar"/>
                        </Link>
                        <Link to='/register'>
                            <Button title = "Cadastrar"/>
                        </Link>
                    </>    

                )}
            </Row>
        </Container>

    </Wraper>
  )
}

export {Header}
