import {MdEmail, MdLock} from 'react-icons/md'


import { Button } from '../../components/Buttom'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'


import {Column,Container,CriarText,EsqueciText ,Row,SubTitleLogin,Title,TitleLogin,Wraper} from './styles'

const Login  = () =>{
    return(
        <>
        
            <Header/>
            <Container>
                <Column>
                    <Title> 
                       A plataforma para você aprender com experts, dominar as principais tecnologias
                       e entrar mais rápido ns empresas mais desejadas. 
                    </Title>
                  
                </Column>
                <Column>
                    <Wraper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change_</SubTitleLogin>
                        <form>
                            <Input placeholder="E-mail" leftIcon={<MdEmail size={25}/>}/>
                            <Input placeholder="Senha" type="password" leftIcon={<MdLock size={25}/>}/>
                                <Button title="Entrar" variant="secundary"/>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Cirar Conta </CriarText>
                        </Row>
                    </Wraper>
                </Column>
            </Container>
      
        
        </>
    )
}

export {Login}