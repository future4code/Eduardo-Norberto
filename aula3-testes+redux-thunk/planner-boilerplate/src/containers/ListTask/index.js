import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllTasks } from "../../actions"
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled from "styled-components";

const useStyles = makeStyles({
    table: {
      maxWidth: 700,
    },
    head: {
        backgroundColor: "black",
        color: "white",
        fontSize: "15pt",
      },
});

const RadioBar = styled.div `
    margin: 20px;
`;

export function ListTask(props){
    const classes = useStyles();

    useEffect(() =>{
        props.fetchTasks();
    }, [])
    
    const [selectedValue, setSelectedValue] = useState('Todos');

    const handleChange = event => {
        setSelectedValue(event.target.value);
    };
    
    const taskFilter = props.tasks && props.tasks.filter((task)=>{
        if(selectedValue === "Todos"){
            return true
        }
        return selectedValue === task.day;   
    })

    return(

        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
             <RadioBar>
                <RadioGroup value={props.value} onChange={props.onChange} name="selectedValue"  row>
                    <FormControlLabel
                    control={<Radio color="primary" checked={selectedValue === 'Todos'} onChange={handleChange}/>}
                    label="Todas"
                    value="Todos"
                    labelPlacement="end"
                    />  
                    <FormControlLabel
                    control={<Radio color="primary" checked={selectedValue === 'Segunda'} onChange={handleChange}/>}
                    label="Segunda"
                    value="Segunda"
                    labelPlacement="end"
                    />  
                    <FormControlLabel
                    control={<Radio color="primary" checked={selectedValue === 'Terça'} onChange={handleChange}/>}
                    label="Terça"
                    value="Terça"
                    labelPlacement="end"
                    />  
                    <FormControlLabel
                    control={<Radio color="primary" checked={selectedValue === 'Quarta'} onChange={handleChange}/>}
                    label="Quarta"
                    value="Quarta"
                    labelPlacement="end"
                    />  
                    <FormControlLabel
                    control={<Radio color="primary" checked={selectedValue === 'Quinta'} onChange={handleChange}/>}
                    label="Quinta"
                    value="Quinta"
                    labelPlacement="end"
                    />  
                    <FormControlLabel
                    control={<Radio color="primary" checked={selectedValue === 'Sexta'} onChange={handleChange}/>}
                    label="Sexta"
                    value="Sexta"
                    labelPlacement="end"
                    />  
                    <FormControlLabel
                    control={<Radio color="primary" checked={selectedValue === 'Sabado'} onChange={handleChange}/>}
                    label="Sabado"
                    value="Sabado"
                    labelPlacement="end"
                    />  
                    <FormControlLabel
                    control={<Radio color="primary" checked={selectedValue === 'Domingo'} onChange={handleChange}/>}
                    label="Domingo"
                    value="Domingo"
                    labelPlacement="end"
                    />  
                </RadioGroup> 
            </RadioBar>
            <TableContainer className={classes.table} component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.head}>Descrição</TableCell>
                            <TableCell className={classes.head}>Dia</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {taskFilter && taskFilter.map((task)=>
                            <TableRow>
                                <TableCell><Checkbox />{task.text} </TableCell>
                                <TableCell>{task.day} </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

export const mapStateToProps = state =>({
        tasks: state.tasks.allTasks
    })

export const mapDispatchToProps = dispatch =>({
        fetchTasks: ()=> dispatch(getAllTasks())
    })
    


export default connect(mapStateToProps, mapDispatchToProps)(ListTask);