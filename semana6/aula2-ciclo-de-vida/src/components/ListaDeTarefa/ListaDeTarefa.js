import React from 'react';
import './ListaDeTarefa.css';

class ListaDeTarefa extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            arrayDeTarefa: [],
            descTarefa: ''
        };
    }

    controleTarefa = event => {
        this.setState ({
            descTarefa: event.target.value
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


    componentDidMount() {
        const estadoComStrings = localStorage.getItem('valorTnput')
        const estadoSalvo = JSON.parse(estadoComStrings)
        this.setState({
            novaTarefa: estadoSalvo
        })
    }

    componentDidUpdate () {
        const estadoComStrings = JSON.stringify(this.state)
        localStorage.setItem('valorInput', estadoComStrings)
    }

    componentWillUnmount () {
       

    }


    render () {
        return (
            <div>
                <div>
                    <h1>Lista de Tarefas</h1>
                    <input value={this.state.descTarefa} onChange={this.controleTarefa}/>
                    <button onClick={this.adicionaNovaTarefa}>Adicionar</button>
                    <p>Filtro</p>
                        <select value onChange>
                            <option value="">Nenhum</option>
                            <option value="pendentes">Pendentes</option>
                            <option value="completas">Completas</option>
                        </select>
                </div>
                <div>
                    {this.state.arrayDeTarefa.map((descricao, index, array)=>{
                        return (
                            <div className="container-tarefas">
                                <ul>
                                    <li onClick={this.onClickCheckup}>{descricao.tarefa}</li>
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default ListaDeTarefa;