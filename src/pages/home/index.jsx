import {Link} from 'react-router-dom'
import { Button } from '../../components/Buttom'
import { Header } from '../../components/Header'

import bannerImage from '../../assets/banner.png'

import { Container, TextContent,Title,TitleHighLight, } from './styles'

const Home  = () =>{
    return(
        <>
            <Header/>
            <Container>
                <div>
                    <Title> 
                        <TitleHighLight>
                            Implemente
                            <br/>
                        </TitleHighLight>
                        o seu futuro global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizada pelas empresas mais inovadora do mundo e encare seu
                        novo desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title="Começar agora" variant="" onClick={() => null}/>
                </div>
                <div>
                    <img src={bannerImage} alt='Imagem principal'/>
                </div>
            </Container>
      
        
        </>
    )
}

export {Home}