import { FaPencil } from 'react-icons/fa6';
import { Entry } from '../data';

type Props = {
  entry: Entry;
  onEditClick: (entryId: number) => void;
};

export function EntryCard({ entry, onEditClick }: Props) {
  return (
    <li data-entry-id={entry.entryId}>
      <div className="row">
        <div className="column-half">
          <div className="list-image-wrapper">
            <img src={entry.photoUrl} />
          </div>
        </div>
        <div className="column-half">
          <h2>
            {entry.title}
            <FaPencil
              className="edit"
              onClick={() => onEditClick(entry.entryId)}
            />
          </h2>
          <p>{entry.notes}</p>
        </div>
      </div>
    </li>
  );
}
