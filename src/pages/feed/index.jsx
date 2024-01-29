import {Link} from 'react-router-dom'
import { Button } from '../../components/Buttom'
import { Header } from '../../components/Header'
import {Card} from '../../components/Card'
import {UserInfo} from '../../components/UserInfo'

import bannerImage from '../../assets/banner.png'

import { Container, Column, Title, TitleHighlight } from './styles'

const Feed  = () =>{
    return(
        <>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
                    <UserInfo percentual={95} nome="Junno Nobrega" image="https://avatars.githubusercontent.com/u/53883884?v=4"/>
                    <UserInfo percentual={75} nome="Junno Nobrega" image="https://avatars.githubusercontent.com/u/53883884?v=4"/>
                    <UserInfo percentual={65} nome="Junno Nobrega" image="https://avatars.githubusercontent.com/u/53883884?v=4"/>
                    <UserInfo percentual={55} nome="Junno Nobrega" image="https://avatars.githubusercontent.com/u/53883884?v=4"/>
                    <UserInfo percentual={45} nome="Junno Nobrega" image="https://avatars.githubusercontent.com/u/53883884?v=4"/>

                </Column>
            </Container>
      
        
        </>
    )
}

export {Feed}