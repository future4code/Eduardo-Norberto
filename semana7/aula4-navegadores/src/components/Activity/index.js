import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div `
  perspective: 900px;
  margin: 4em auto; 
  width: 37em;
`;

const Inner = styled.div `
  transition: .3s; 
  transform: rotateY(3deg);
`;

const InnerFigure = styled.figure `
  box-shadow: -6px 6px 2px -3px  rgba(100,100,100,.1);
  width: 460px;
  height: 310px;
  padding: 1em;
  display: inline-block;
  margin-right: 1em;
  background: rgba(250,200,200,0.1);
  border: 1px solid rgba(250,200,200,.5);
`;

const TitleH2 = styled.h2 `
  text-align: center;
  font-family: Helvetica, sans-serif;
  padding: 10px;
`;

const InnerImg = styled.img `
  display: block;
  height: auto;
  width: 450px;
  height: 299px;
  margin: 0 auto;
`;



function Activity () {
    
    return(
      <div>
        <TitleH2>I'm So Bored</TitleH2>
        <Wrapper>
            <Inner>
                <InnerFigure>
                    <InnerImg src={require('../image/giphy.gif')}/>
                </InnerFigure>
                <InnerFigure>
                    <InnerImg src={require('../image/giphy1.gif')}/>
                </InnerFigure>
                <InnerFigure>
                    <InnerImg src={require('../image/giphy2.gif')}/>
                </InnerFigure>
                <InnerFigure>
                    <InnerImg src={require('../image/giphy3.gif')}/>
                </InnerFigure>
            </Inner>
        </Wrapper>
      </div>
    )

}

export default Activity;