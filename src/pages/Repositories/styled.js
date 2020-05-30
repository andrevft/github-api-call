import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 80%;
  max-width: 991px;
  margin: 0 auto;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`;

export const ListItem = styled.li`
  margin: .8rem 0;
  background: #f1f1f1;
  color: #000;
  padding: 1rem;
  border: 1px solid #000;
  border-radius: 5px;
`;

export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #2dba4e;
  padding: .5rem 0;
  color: #fff;
  text-decoration: none;
  border: 0;
  border-radius: .25rem;
  font-family: sans-serif;

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