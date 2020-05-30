import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: sans-serif;
`;


export const Init = styled.p`
  width: 100vw;
  height: 1.5rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-family: sans-serif;
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 2.5rem;
  padding: 0 1rem;
  border-radius: .25rem 0 0 .25rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  height: 2.5rem;
  border: 0;
  padding:  0 1rem;
  background: #2dba4e;
  color: #fff;
  border-radius: 0 .25rem .25rem 0;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  };

  &:hover {
    outline: none;
    box-shadow: 1px 1px 5px grey;
    cursor:pointer;
  }
`;

export const ErrorMsg = styled.span`
  display: block;
  font-size: 0.65rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
`;

