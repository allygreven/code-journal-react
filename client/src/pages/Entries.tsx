export function Entries() {
  return (
    <>
      <div data-view="entries" className="entries-wrapper hidden">
        <div className="entries-heading column-full">
          <h1>Entries</h1>
          <button
            type="button"
            className="new-entry-button"
            data-view="entry-form">
            New
          </button>
        </div>
        <p className="no-entries-text">No entries have been recorded</p>
        <ul className="entry-list"></ul>
      </div>
    </>
  );
}
