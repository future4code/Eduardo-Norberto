import React from "react";
import { List } from 'rsuite';
import { connect } from "react-redux";
import { getAllTasks } from "../../actions"


class ListTask extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.fetchTasks();
    }

    render(){
        return(
            <div>
                <List bordered>
                    {this.props.tasks && this.props.tasks.map((task)=>
                        <List.Item>
                            {task.text} 
                            {task.day}
                        </List.Item>
                     )}
                </List>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    tasks: state.tasks.allTasks
})

const mapDispatchToProps = dispatch => ({
    fetchTasks: ()=> dispatch(getAllTasks())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);