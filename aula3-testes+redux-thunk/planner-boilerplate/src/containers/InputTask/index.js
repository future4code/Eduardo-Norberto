import React from "react";
import { connect } from "react-redux";
import { Input } from 'rsuite';
import { Button, ButtonToolbar } from 'rsuite';
import { Dropdown } from 'rsuite';
import { Panel } from 'rsuite';
import { createTask } from "../../actions"


class InputTask extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            form: {},
        }
    }

    handleInputTask = event =>{
        event.preventDefault()
        
    }

    createTask = (event) =>{
        event.preventDefault()
        const { text, day } = this.state.form;
        this.props.createTask(text, day)
    }

    handleInputChange = event =>{
        const {name, value} = event.target;
        this.setState({form: {...this.state.form, [name]: value}})
    }

    render(){
        return(
            <Panel bordered>
                <form onSubmit={this.handleInputTask} onChange={this.handleInputChange}>
                    <Input  value={this.state.form.text} type="text" name="text" size="lg" placeholder="Digite uma tarefa" />
                    <ButtonToolbar>
                        <select  name="day" value={this.state.form.day} onChange={this.handleInputChange}>
                            <option value="" selected="selected">Selecione o dia</option>
                            <option value="Segunda">Segunda</option>
                            <option value="Terça">Terça</option> 
                            <option value="Quarta">Quarta</option> 
                            <option value="Quinta">Quinta</option>
                            <option value="Sexta">Sexta</option>
                            <option value="Sabado">Sabado</option> 
                            <option value="Domingo">Domingo</option> 
                        </select>
                        <Button appearance="primary" onClick={this.createTask}>Salvar</Button>
                    </ButtonToolbar>
                </form>
                <hr />
            </Panel>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    createTask: (text, day) => dispatch(createTask(text, day))
})

export default connect(null, mapDispatchToProps) (InputTask);