import React from "react";
import renderer from "react-test-renderer";
import Grid from '@material-ui/core/Grid';
import TableCell from '@material-ui/core/TableCell';
import { shallow } from "enzyme";
import { ListTask } from "./index"
import TableRow from '@material-ui/core/TableRow';
import { mapDispatchToProps, mapStateToProps} from "./index"



describe("Testa o componente ListTask", ()=>{
    test("Snapshot", ()=>{
        const testSnapshot = renderer.create(<Grid />).toJSON();
        expect(testSnapshot).toMatchSnapshot();
    })
})
describe("Testa o container ListTask",()=>{
    test("Testa se os componentes são renderizados",()=>{
        const mock = [
            {text: "nova tarefa", day: "Sexta"},
            {text: "BlaBla", day: "Terça"}
        ]
        const component = shallow(<ListTask allItem={mock} />)

        const allTask = component.find(TableRow)

        expect(allTask).toHaveLength(1)
    })
})
describe('mapDispatchToProps', () => {
    it('Testa se o mapDispatchToProps foi chamado', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).fetchTasks();
        expect(dispatch).toHaveBeenCalledTimes(1);
    });
});

