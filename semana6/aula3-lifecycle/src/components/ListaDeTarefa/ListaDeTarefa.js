import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 300px;
    margin: 0 auto;
`;

const ListaFormato = styled.ul `
    list-style: outside;
    text-align: left;
`;

const ListaSelecao = styled.li `
    padding: 5px;
`;
const ItemPendente = styled.li `
    text-decoration: none;
`;
const ItemCompleto = styled.li `
    text-decoration: line-through;
`;


class ListaDeTarefa extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            arrayDeTarefa: [],
            descTarefa: '',
            filtroDeTarefa: ''
        };
    }

    controleTarefa = event => {
        this.setState ({
            descTarefa: event.target.value
        });
    };

    controleFiltro = event => {
        this.setState({
            filtroDeTarefa: event.target.value
        });
    };

    adicionaNovaTarefa = () => {
        const novaTarefa = {
            id: Date.now(),
            tarefa: this.state.descTarefa,
            completa: false
        }
        let arrayCopiaTarefa = [...this.state.arrayDeTarefa]
        arrayCopiaTarefa.push(novaTarefa)
        this.setState ({
            arrayDeTarefa: arrayCopiaTarefa
        })
    }

    onClickCheckup = id => {
        const varificaTarefa = this.state.arrayDeTarefa.map(descricao => {
          if (descricao.id === id) {
            return {
              ...descricao,
              completa: !descricao.completa
            };
          }
          return descricao;
        });
        this.setState({ 
            arrayDeTarefa: varificaTarefa 
        });
      };

    render () {
        return (
            <div>
                <div>
                    <h1>Lista de Tarefas</h1>
                    <input value={this.state.descTarefa} onChange={this.controleTarefa}/>
                    <button onClick={this.adicionaNovaTarefa}>Adicionar</button>
                    <p>Filtro</p>
                        <select value={this.state.filtroDeTarefa} onChange={this.controleFiltro}>
                            <option value="nenhum">Nenhum</option>
                            <option value="pendentes">Pendentes</option>
                            <option value="completas">Completas</option>
                        </select>
                </div>
                <Container>
                    <ListaFormato>
                        
                        {this.state.arrayDeTarefa.map(descricao =>{
                            if (!descricao.completa){
                                return (
                                    <ItemPendente onClick={() => this.onClickCheckup(descricao.id)}>{descricao.tarefa}{console.log(descricao)}</ItemPendente>
                                )
                            }else{
                                return (
                                
                                    <ItemCompleto onClick={() => this.onClickCheckup(descricao.id)}>{descricao.tarefa}{console.log(descricao)}</ItemCompleto>
                                )
                        } 
                    })}
                     {this.state.arrayDeTarefa.filter(descricao => {
                            if (this.state.filtroDeTarefa === 'pendentes'){
                                return descricao.completa
                            }else if (this.state.filtroDeTarefa === 'completas'){
                                return !descricao.completa
                            }else{
                                return false;
                            }
                            }).map(descricao => <ListaSelecao>{descricao.tarefa}</ListaSelecao>)}
                     </ListaFormato>
                </Container>
            </div>
        );
    }
}

export default ListaDeTarefa;  
