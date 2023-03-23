import './global.css';
import './sidebar.css';
import './app.css';
import './main.css';

import Notes from './components/notes';
import { useEffect, useState } from 'react';

import api from './components/services/api';
import RadioButton from './components/radioButton';

function App() {
  const [title, setTitle ] = useState('');
  const [notes, setNotes ] = useState('');
  const [allNotes, setAllNotes] = useState([]);

  async function getPosts() {
    try{
      const response = await api.get('/annotations')
      const data = response.data;
      setAllNotes(data);
    }catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, [])

  async function handleDelete(id) {
    const deletedNote = await api.delete(`/annotations/${id}`);

    if(deletedNote) {
      setAllNotes(allNotes.filter(note => note._id !== id));
    }
  }

  async function handleChangePriority(id) {
    const note = await api.post(`/priorities/${id}`)

    if(note){
      getPosts();
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/annotations', {
        title,
        notes,
    })

    setNotes('');
    setTitle('');
    
    setAllNotes([...allNotes, response.data])
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
              maxLength="30"
              value={title}
              onChange={e => setTitle(e.target.value)}
              ></input>
            </div>
          <div className="input-block">
              <label htmlFor='nota'>Anotações</label>
              <textarea 
              value={notes}
              maxLength="120"
              onChange={e => setNotes(e.target.value)}
              ></textarea>
          </div>
          
          <button type="submit" style={{background: title.length > 0 && notes.length > 0 ? "#F00" : "#FFD3CA"}}>Salvar</button>
        </form>
        <RadioButton />
      </aside>
      <main>
          {allNotes.map(data => (
            <Notes key={data._id} data={data} handleDelete={handleDelete} handleChangePriority={handleChangePriority}/>
          ))}
      </main>
    </div>
  );
}

export default App;
