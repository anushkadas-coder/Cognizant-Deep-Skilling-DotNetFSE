import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GitClient() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/anushkadas-coder/repos')
      .then(res => setRepos(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ margin: '20px' }}>
      <h3>GitHub Repositories</h3>
      <ul>
        {repos.map(repo => <li key={repo.id}>{repo.name}</li>)}
      </ul>
    </div>
  );
}
export default GitClient;