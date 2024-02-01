import {MdEmail, MdLock, MdAccountBox } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from 'react-router-dom'

import { api } from '../../services/api';
import { Button } from '../../components/Buttom'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'



import {Column, Container, Row, SubTitleLogin, Title, TitleLogin, Wraper, JaCadastrado} from './styles'

const schema = yup.object({
    email: yup.string().email("email não é válido").required("Campo obrigatório"),
    password: yup.string().min(3, "No minimo 3 characteres").required("Campo obrigatório"),
    name: yup.string().min(3, "O nome deve ter no mínimo 3 characteres").required("Campo obrigatório"),
})


const Register  = () =>{

    const navigate = useNavigate();

    const { control, handleSubmit,  formState: { errors, isValid} } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',

    });

    console.log(isValid, errors)

    const onSubmit = async FormData => {
        try {
            const {data} = await api.get(`users?email=${FormData.email}&senha=${FormData.password}`);
            console.log('retorno api', data)
            if(data.length ===1){


            }else {
                alert("Email ou senha inválido.")
            }
        } catch  {
            alert("Houve um erro, tente novamente.")
        }
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
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        
                        <SubTitleLogin>Cire sua conta e make the change!</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="name" 
                                control={control} 
                                errorText={errors?.name?.message}  
                                placeholder="Nome completo" 
                                leftIcon={<MdAccountBox size={25} color="#8647AD"/>}/>
                            <Input name="email" 
                                control={control} 
                                errorText={errors?.email?.message}  
                                placeholder="E-mail" 
                                leftIcon={<MdEmail size={25} color="#8647AD"/>}/>
                            <Input  
                                name="password" 
                                control={control}  
                                errorText={errors?.password?.message}
                                placeholder="Senha" 
                                type="password" 
                                leftIcon={<MdLock size={25} color="#8647AD"/>}/>
                                <Button title="Criar minha conta" variant="secundary"  type="submit"/>
                        </form>
                        <Row>
                            <SubTitleLogin>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubTitleLogin>
                        </Row>

                            <JaCadastrado>já tenho conta. <Link to='/login'>Fazer login</Link> </JaCadastrado>
                            
                       
                    </Wraper>
                </Column>
            </Container>
      
        
        </>
    )
}

export {Register}