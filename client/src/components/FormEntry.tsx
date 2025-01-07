import { FormEvent, useState } from 'react';
import { addEntry, updateEntry, type Entry } from '../data';
import { useNavigate } from 'react-router-dom';

type Props = {
  entry: Entry;
  onDeleteClick: () => void;
};

export function FormEntry({ entry, onDeleteClick }: Props) {
  const [photoUrl, setPhotoUrl] = useState(entry.photoUrl);
  const [title, setTitle] = useState(entry.title);
  const [notes, setNotes] = useState(entry.notes);
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (entry.entryId === 0) {
      await addEntry({ title, notes, photoUrl });
    } else {
      await updateEntry({ title, notes, photoUrl, entryId: entry.entryId });
    }
    navigate('/');
  }

  return (
    <form id="entry-form" onSubmit={handleSubmit}>
      <div className="column-full">
        <h1 className="new-entry-header">
          {entry.entryId === 0 ? 'New Entry' : 'Edit Entry'}
        </h1>
      </div>
      <div className="row">
        <div className="photo-wrapper column-half">
          <img
            id="entry-image"
            src={
              photoUrl !== ''
                ? photoUrl
                : '/images/placeholder-image-square.jpg'
            }
            alt="Placeholder image"
          />
        </div>
        <div className="column-half">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="photo-url">Photo URL</label>
          <input
            id="photo-url"
            type="url"
            name="photoUrl"
            required
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
          />
        </div>
        <div className="column-full">
          <label htmlFor="notes">Notes</label>
          <textarea
            name="notes"
            id="notes"
            required
            value={notes}
            onChange={(e) => setNotes(e.target.value)}></textarea>
          <div className="form-actions">
            <button
              onClick={onDeleteClick}
              className={'delete-button' + (entry.entryId === 0 ? ' hide' : '')}
              type="button">
              Delete Entry
            </button>
            <button type="submit">Save</button>
          </div>
        </div>
      </div>
    </form>
  );
}
