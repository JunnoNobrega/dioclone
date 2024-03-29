import {MdEmail, MdLock} from 'react-icons/md'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from 'react-router-dom'

import { Button } from '../../components/Buttom'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'


import {Column,Container,CriarText,EsqueciText ,Row,SubTitleLogin,Title,TitleLogin,Wraper} from './styles'
import { IFormData } from './types';
import { useAuth } from '../../hooks/useAuth';

const schema = yup.object({
    email: yup.string().email("email não é válido").required("Campo obrigatório"),
    password: yup.string().min(3, "No minimo 3 characteres").required("Campo obrigatório")
})


const Login  = () =>{

    const {handleLogin} = useAuth();

    const { control, handleSubmit,  formState: { errors, isValid} } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',

    });

    console.log(isValid, errors)

    const onSubmit = async (loginData: IFormData) => {
        handleLogin(loginData);
    }

  


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
                        
                        <SubTitleLogin>Já cadastrado? Faça seu login e make the change!</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" 
                                control={control} 
                                errorText={errors?.email?.message}  
                                placeholder="E-mail" 
                                leftIcon={<MdEmail size={25}/>}/>
                            <Input  
                                name="password" 
                                control={control}  
                                errorText={errors?.password?.message}
                                placeholder="Senha" 
                                type="password" 
                                leftIcon={<MdLock size={25}/>}/>
                                <Button title="Entrar" variant="secundary"  type="submit"/>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText> <Link to='/register'>Cirar Conta</Link> </CriarText>
                        </Row>
                    </Wraper>
                </Column>
            </Container>
      
        
        </>
    )
}

export {Login}