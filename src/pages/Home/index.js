import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';


function App(props) {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState('');
  const [ erro, setErro ] = useState(false);
  const API_URL = `https://api.github.com/users/${usuario}/repos`;

  function handlePesquisa() {
    axios.get(API_URL)
      .then(response => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          repositoriesName.push(repository);
        });

        
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName)); //transforma em string
        setErro(false);
        history.push('/repositories'); //sempre que os dados são salvos ele chama a rota
      })
      .catch(err => {
        setErro(true);
      });


      
  }

  return (
    <S.HomeContainer>
      <S.Content>
      <S.Init>Digite o nome de usuário GitHub para ver seus repositórios</S.Init>
      </S.Content>

      <S.Content>
        <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      { erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : '' }
    </S.HomeContainer>
  );
}

export default App;