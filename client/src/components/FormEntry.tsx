type Props = {
  entryId: string;
};

export function FormEntry({ entryId }: Props) {
  const isNew = entryId === 'new';

  return (
    <form id="entry-form">
      <div className="column-full">
        <h1 className="new-entry-header">
          {isNew ? 'New Entry' : 'Edit Entry'}
        </h1>
      </div>
      <div className="row">
        <div className="photo-wrapper column-half">
          <img
            id="entry-image"
            src="/images/placeholder-image-square.jpg"
            alt="Placeholder image"
          />
        </div>
        <div className="column-half">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" name="title" required />
          <label htmlFor="photo-url">Photo URL</label>
          <input id="photo-url" type="url" name="photoUrl" required />
        </div>
        <div className="column-full">
          <label htmlFor="notes">Notes</label>
          <textarea name="notes" id="notes" required></textarea>
          <div className="form-actions">
            <button
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
