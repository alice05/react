import React from 'react';
import styled from 'styled-components';

const styledDiv = styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 400px;
    }
`;

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '400px'
        }
    }
    return (
        <styledDiv>
            <p onClick={props.click}> I'm {props.name} and I am {props.age} years old</p>
            <input type="text" onChange={props.changed} value={props.name} />
            <p>{props.children}</p>
        </styledDiv>
    )
};

export default person;