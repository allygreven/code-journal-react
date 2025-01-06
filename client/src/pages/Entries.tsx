import { Link } from 'react-router-dom';
import { Entry } from '../components/Entry';

export function Entries() {
  return (
    <>
      <div data-view="entries" className="entries-wrapper">
        <div className="entries-heading column-full">
          <h1>Entries</h1>
          <Link to="entry/new">
            <button
              type="button"
              className="new-entry-button"
              data-view="entry-form">
              New
            </button>
          </Link>
        </div>
        <p className="no-entries-text">No entries have been recorded</p>
        <ul className="entry-list">
          <Entry />
        </ul>
      </div>
    </>
  );
}
