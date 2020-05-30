import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Repositories() {
  const history = useHistory();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    if (repositoriesName !== null) {
      repositoriesName = JSON.parse(repositoriesName); //traansforma em objeto novamente
      setRepositories(repositoriesName);
      localStorage.clear();
    } else {
      history.push('/')
    }


  }, [history]);

  return (
    <div className="container">
      <div className="col-xs-8 mt-3">
        <h1>Repositories</h1>
        {repositories.map(repository => (
          <div className="card mb-2 mt-3 border-secondary">
            <div className="card-body ">
              <h5 className="card-title mb-3">{repository.name}</h5>
              <h6 className="card-text mb-2 text-secondary">
                {repository.description}
              </h6>
              <h6 className="card-text mb-2"> <a href={repository.html_url} target="_blank">
                {repository.html_url}    </a>
              </h6>
            </div>
          </div>
        ))}
      </div>
      <S.LinkHome to="/">Back</S.LinkHome>
    </div>

  )


}