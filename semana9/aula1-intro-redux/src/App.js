import React from 'react';
import styled from "styled-components";
import ListaTarefa from "./components/ListaTarefa/ListaTarefa"

const DivMain = styled.div `
  background-color: #ccffcc;
  margin-top: -20px;
  height: 750px;
  padding: 10px;
`;

const TextTitle = styled.h2 `
  text-align: center;
  color: tomato;
  font-family: Helvetica, sans-serif;
  font-size: 30pt;
`;

function App() {

  function inputItemList(item) {
    return {
      type: 'ADD_ITEM_LISTA',
      payload: {
        valor: item
      }
    }
  }

  function selectItemList(item) {
    return{
      type: 'SELECT_ITEM_LISTA',
      payload: {

      }
    }
  }

  function deleteItemList(item) {
    return{
      type: 'DELETE_ITEM_LISTA',
      payload: {

      }
    }
  }

  function deleteItemCompleto(item) {
    return{
      type: 'DELETE_ITEM_COMPLETO',
      payload: {

      }
    }
  }

  function selectALLItem(item) {
    return{
      type: 'SELECT_TODOS_ITEM',
      payload: {

      }
    }
  }

  function showAllItem(item) {
    return{
      type: 'MOSTRAR_TODOS_ITEM',
      payload: {

      }
    }
  }

  function showItemIn(item) {
    return{
      type: 'MOSTRAR_PENDENTES_ITEM',
      payload: {

      }
    }
  }

  function showItem(item) {
    return{
      type: 'MOSTRAR_ITEM_COMPLETO',
      payload: {

      }
    }
  }

  return (
    <DivMain>
      <TextTitle>4Task</TextTitle>
        <ListaTarefa>
        </ListaTarefa>
    </DivMain>
  );
}

export default App;
