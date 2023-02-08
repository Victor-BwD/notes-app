import './global.css'
import './sidebar.css'

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>
        <form>
          <div className="input-block">
              <label for="title">Título da anotação</label>
              <input></input>
          </div>
          <div className="input-block">
              <label for="nota">Anotações</label>
              <textarea></textarea>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main></main>
    </div>
  );
}

export default App;
