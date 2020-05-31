import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';


function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);
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
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 mb-2">GitHub Calling</h1>
          <p class="lead">Type a GitHub username to see its repositories.</p>
        </div>
      </div>

      <S.Content>
        <S.Input className="usuarioInput" placeholder="User" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>Search</S.Button>
      </S.Content>
      {erro ? <S.ErrorMsg>An error occured. Try again.</S.ErrorMsg> : ''}
      <div class="alert alert-light mb-5" role="alert">
        You can try "filipedeschamps" as example!
      </div>

      <footer class="site-footer mt-5">
            <p class="text-center text-black">Developed with ❤ by <a href="https://github.com/andrevft" target="_blank"
                    rel="" class="badge badge-dark"> André Terrasan</a> </p>
        </footer>
    </S.HomeContainer>
  );
}

export default App;