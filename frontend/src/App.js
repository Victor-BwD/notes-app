import './global.css'
import './sidebar.css'
import './app.css'
import './main.css'

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
      <main>
        <ul>
          <li className='notepad-infos'>
            <div>
              <strong>Fazer compras</strong>
              <div>
                x
              </div>
            </div>

            <textarea>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</textarea>
            <span>!</span>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
