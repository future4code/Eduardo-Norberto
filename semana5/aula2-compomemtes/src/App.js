import React from 'react';
import './App.css';
import BigCard from './components/BigCard/BigCard'
import PageSection from './components/PageSection/PageSection'
import SmallCard from './components/SmallCard/SmallCard'
import ButtonIcon from './components/ButtonIcon/ButtonIcon'

function App() {
  return (
    <div className="App">
      <PageSection>
        <h2>Dados Pessoais</h2>
          <BigCard>
            <h3 className="nome">Eduardo Mendes Norberto</h3>
            <div className="posicao-item">
              <img className="foto-perfil" alt="perfil" src={require("./imagem/perfil.png")}/>
              <p className="descricao">Olá, meu nome é Eduardo. Estou na Missão Bouman da Future4, estudo para ser um Desenvolverdor Web Full Stack.</p>
            </div>
          </BigCard>
          <SmallCard>
            <div className="posicao-item">
                <img className="icon" alt="email-icon" src={require('./imagem/email.png')}/>
                <p className="icon-desc"><strong>Email: </strong>eduardomendesnorberto@outlook.com</p>
            </div>
          </SmallCard> 
          <SmallCard>
            <div className="posicao-item">
                  <img className="icon-local" alt="end-icon" src={require('./imagem/local.png')}/>
                  <p className="icon-desc"><strong>Endereço: </strong>Rua Geraldo Costa Cruz, Taquara, Cataguases-MG </p>
            </div>
            <ButtonIcon>
              <div className="posicao-item">
                    <img className="botao-ver" alt="ver-icon" src={require('./imagem/vermais.png')}/>
                    <p className="botao-desc">Ver Mais</p>
              </div>
            </ButtonIcon>
          </SmallCard> 
      </PageSection>  
      <PageSection>
        <h2>Experiências Profissionais</h2>
          <BigCard>
            <div className="posicao-item">
                <img className="icon-job" alt="end-job" src={require('./imagem/job.png')}/>
                <p className="icon-desc"><strong>Prefeitura de Cataguases: </strong>Suporte tecnico, assistência intelectual e tecnológica e material ao cliente.</p>
            </div>
          </BigCard>
          <BigCard>
            <div className="posicao-item">
                <img className="icon-job" alt="end-job" src={require('./imagem/job.png')}/>
                <p className="icon-desc"><strong>Prefeitura de Cataguases: </strong>Técnico de Redes, manutenção, configuração e instalação de equipamente de infraestrutura de redes, configuração de acessos para usuários a rede de computadores </p>
            </div>
          </BigCard>
      </PageSection>
      <PageSection>
        <h2>Minhas redes sociais</h2>
          <ButtonIcon>
            <div className="posicao-item">
                <img className="botao-facebook" alt="ver-icon" src={require('./imagem/facebook.png')}/>
                <p className="facebook-desc">Facebook</p>
            </div>
          </ButtonIcon>
      </PageSection>
    </div>
  );
}

export default App;
