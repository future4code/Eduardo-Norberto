import React from "react";
import renderer from "react-test-renderer";
import Grid from '@material-ui/core/Grid';
import { mapDispatchToProps } from "./index"


describe("Testar o InputTask", ()=>{
    test("Snapshot", ()=>{
        const testSnapshot = renderer.create(<Grid />).toJSON();
        expect(testSnapshot).toMatchSnapshot();
    })  
})

describe('mapDispatchToProps', () => {
    it('Testa se o mapDispatchToProps foi chamado', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).createTask();
        expect(dispatch).toHaveBeenCalledTimes(1);
    });
});

