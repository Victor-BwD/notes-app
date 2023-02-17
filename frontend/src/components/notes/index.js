

export default function Notes({ data }) {
    return (
        <>
        <ul>
          <li className='notepad-infos'>
            <div>
              <strong>{data.title}</strong>
              <div>
                x
              </div>
            </div>

            <textarea defaultValue={data.notes}></textarea>
            <span>!</span>
          </li>
        </ul>
        </>
    );
}