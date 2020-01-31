import React from "react";
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createTask } from "../../actions";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";

const ContainerInput = styled.div `
    padding: 20px;
`;
const DivButton = styled.div `
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex: auto;
`;


export class InputTask extends React.Component {
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
            <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="center"
            
            
                >
                <ContainerInput>
                        <Grid>
                            <form onSubmit={this.handleInputTask} onChange={this.handleInputChange}>
                            <TextField variant="outlined" size="small" value={this.state.form.text} type="text" name="text" size="lg" placeholder="Digite uma tarefa" />
                        
                        <Grid
                            container
                            direction="row"
                            justify="space-evenly"
                            alignItems="center"
                            >
                                <DivButton>
                                    <Select  
                                        name="day" 
                                        value={this.state.form.day} 
                                        onChange={this.handleInputChange}
                                        variant="outlined"
                                        autoWidth={true}
                                            >
                                            <MenuItem value="Segunda">Segunda</MenuItem>
                                            <MenuItem value="Terça">Terça</MenuItem> 
                                            <MenuItem value="Quarta">Quarta</MenuItem> 
                                            <MenuItem value="Quinta">Quinta</MenuItem>
                                            <MenuItem value="Sexta">Sexta</MenuItem>
                                            <MenuItem value="Sabado">Sabado</MenuItem> 
                                            <MenuItem value="Domingo">Domingo</MenuItem> 
                                    </Select>
                                    <Button variant="contained" color="primary" disableElevation onClick={this.createTask}>Salvar</Button>
                                </DivButton>
                        </Grid>
                    </form>
                    </Grid>
                </ContainerInput>
            </Grid>
        )
    }
}

export const mapDispatchToProps = dispatch => ({
    createTask: (text, day) => dispatch(createTask(text, day))
})

export default connect(null, mapDispatchToProps) (InputTask);