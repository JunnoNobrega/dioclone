import React from 'react'
import {Container,NameText,Progress,UserPictore,} from './styles'

const UserInfo = ({nome, image, percentual}) => {
  return (
    <Container>
        <UserPictore  src={image}/>
        <div>
            <NameText>{nome} </NameText>
            <Progress percentual={percentual}/>

            

        </div>
    </Container>
  )
}

export  {UserInfo}