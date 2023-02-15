import './global.css';
import './sidebar.css';
import './app.css';
import './main.css';

import Notes from './components/notes';
import { useEffect, useState } from 'react';

import api from './components/services/api';

function App() {
  const [title, setTitle ] = useState('');
  const [notes, setNotes ] = useState('');

  async function getPosts() {
    try{
      const response = await api.get('/annotations')
      const data = response.data;
      console.log(data)
    }catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, [])

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/annotations', {
        title,
        notes,
    })

    setNotes('');
    setTitle('');
    
    console.log(await response.data)
  }

  return (
    <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-block">
          <label htmlFor='title'>Título da anotação</label>
          <input 
              required
              value={title}
              onChange={e => setTitle(e.target.value)}
              ></input>
            </div>
          <div className="input-block">
              <label htmlFor='nota'>Anotações</label>
              <textarea 
              value={notes}
              onChange={e => setNotes(e.target.value)}
              ></textarea>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
          <Notes />
          <Notes />
          <Notes />
          <Notes />
      </main>
    </div>
  );
}

export default App;
