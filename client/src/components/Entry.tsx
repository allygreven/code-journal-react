import { FaPencil } from 'react-icons/fa6';

export function Entry() {
  return (
    <li data-entry-id="1">
      <div className="row">
        <div className="column-half">
          <div className="list-image-wrapper">
            <img src="https://placehold.co/600x400" />
          </div>
        </div>
        <div className="column-half">
          <h2>
            1<FaPencil className="edit" />
          </h2>
          <p>1</p>
        </div>
      </div>
    </li>
  );
}
