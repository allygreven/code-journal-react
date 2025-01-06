import { FormEvent, useState } from 'react';
import { addEntry } from '../data';
import { useNavigate } from 'react-router-dom';

type Props = {
  entryId: string;
  onDeleteClick: () => void;
};

export function FormEntry({ entryId, onDeleteClick }: Props) {
  const [photoUrl, setPhotoUrl] = useState('');
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const isNew = entryId === 'new';
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addEntry({ title, notes, photoUrl });
    navigate('/');
  }

  return (
    <form id="entry-form" onSubmit={handleSubmit}>
      <div className="column-full">
        <h1 className="new-entry-header">
          {isNew ? 'New Entry' : 'Edit Entry'}
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
              className={'delete-button' + (isNew ? ' hide' : '')}
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
