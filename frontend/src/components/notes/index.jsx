import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";
import './styles.css'
import './styles-priority.css'

export default function Notes({ data }) {
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

            <textarea defaultValue={data.notes}></textarea>
            <span>
              <AiOutlineExclamationCircle size="20"/>
            </span>
          </li>
        </ul>
        </>
    );
}