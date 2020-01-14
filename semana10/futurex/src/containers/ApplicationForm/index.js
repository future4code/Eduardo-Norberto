import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router";
import Router from "../Router";


const tripForm = [
  {
    name: "name",
    type: "text",
    label: "Nome da viagem",
    required: true,
    pattern: "[A-Za-z]{5}"
  },
  {
    name:"date",
    type: "date",
    label: "Data da viagem",
  },
  {
    name: "description",
    type: "text",
    label: "Descrição da viagem",
    pattern: "/^[a-z]{0,30}$/"
  },
  {
    name: "durationInDays",
    type: "number",
    label: "Duração da viagem em dias",
    min: 50,
  }
]

const candidateForm = [
  {
    name: "name",
    type: "text",
    label: "Seu nome",
    pattern: "[A-Za-z]{3}"
  },
  {
    name: "age",
    type: "number",
    label: "Sua idade",
    min: 18
  },
  {
    name: "applicationText",
    type: "text",
    label: "Texto de aplicação",
    pattern: "/^[a-z]{0,30}$/",
  },
  {
    name: "profession",
    type: "text",
    label: "Sua profissão",
    pattern: "/^[a-z]{0,10}$/"
  }
]

class ApplicationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
     form: {}
    };
  }

  hadleInputChange = event => {
    const { name, value } = event.target;
    this.setState({form: {...this.state.form, [name]: value }})
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.state.form);
  };

  render() {
    
    return (
     <div>
       
       <h2>Formulário de Viagem</h2>
       <form onSubmit={this.handleOnSubmit}>
          {tripForm.map(input => (
            <div key={input.name}>
              <label htmlFor={input.name}>{input.label}: </label>
              <input 
              name={input.name}
              type={input.type}
              value={this.state.form[input.name] || ""}
              required={input.required}
              onChange={this.hadleInputChange}
              pattern={input.pattern}
              />
            </div>
          ))}
          <button type="submit">Enviar</button>
       </form>

       <h2>Formulário do Candidato</h2>
       <form onSubmit={this.handleOnSubmit}>
          {candidateForm.map(input => (
            <div key={input.name}>
              <label htmlFor={input.name}>{input.label}: </label>
              <input 
              name={input.name}
              type={input.type}
              value={this.state.form[input.name] || ""}
              required={input.required}
              onChange={this.hadleInputChange}
              pattern={input.pattern}
              />
            </div>
          ))}
          <button type="submit">Enviar</button>
       </form>
     </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  goToHome: ()=> dispatch(push(routes.home))
})

export default connect(null, mapDispatchToProps) (ApplicationForm);
