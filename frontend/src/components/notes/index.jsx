import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";
import './styles.css'
import './styles-priority.css'
import { useState } from "react";
import api from '../services/api'

export default function Notes({ data }) {
  const [changedNote, setChangedNote] = useState('');

  async function handleSave(e, notes) {
    if(changedNote && changedNote !== notes) {
      await api.post(`/contents/${data._id}`,{
        notes: changedNote,
      });
    }
  }

  function handleEdit(e, priority) {
    e.style.cursor = 'text';
    e.style.borderRadius = '5px';
  }

    return (
        <>
        <ul>
          <li className={data.priority ? "notepad-infos-priority" : "notepad-infos"}>
            <div>
              <strong>{data.title}</strong>
              <div>
                <AiTwotoneDelete size="20"/>
              </div>
            </div>

            <textarea 
            defaultValue={data.notes}

            onClick={e => handleEdit(e.target, data.priority)}
            onChange={e => setChangedNote(e.target.value)}
            onBlur={e => handleSave(e.target, data.notes)}
            >

            </textarea>
            <span>
              <AiOutlineExclamationCircle size="20"/>
            </span>
          </li>
        </ul>
        </>
    );
}