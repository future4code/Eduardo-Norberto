import React from 'react';
import './FormPost.css'
import styled from 'styled-components';



class  FormPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nomeUser: "",
            urlFotoPerfil: "",
            urlFotoPost: ""
        };
    }

    controleNome = e => {
        this.setState({
            nomeUser: e.target.value
        });
    };

    controlePerfil = e => {
        this.setState({
            urlFotoPerfil: e.target.value
        });
    };

    controleFoto = e => {
        this.setState({
            urlFotoPost: e.target.value
        });
    };


    aoClicarLimpar = () => {
        this.setState({
            nomeUser: "",
            urlFotoPerfil: "",
            urlFotoPost: ""
        });
    };

    render() {
        return (
            <div>
                <div className="formulario">
                    Nome do Usuário: <input value={this.state.nomeUser} onChange={this.controleNome}/>
                    URL da foto de perfil: <input value={this.state.urlFotoPerfil} onChange={this.controlePerfil}/>
                    URL da foto: <input value={this.state.urlFotoPost} onChange={this.controleFoto}/>
                    <button onClick={this.aoClicarLimpar}>Limpar</button>
                </div>
                <article className="area-post">
                    <h4>{this.state.nomeUser}</h4>
                    <img alt="" className="img-perfil" src={this.state.urlFotoPerfil}/>
                    <img alt="" src={this.state.urlFotoPost}/>
                </article>
            </div>
        );
    }
}

export default FormPost;