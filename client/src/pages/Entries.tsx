import { Link, useNavigate } from 'react-router-dom';
import { EntryCard } from '../components/EntryCard';
import { readEntries, type Entry } from '../data';
import { useEffect, useState } from 'react';

export function Entries() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadEntries() {
      try {
        const values = await readEntries();
        setEntries(values);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadEntries();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  function onEditClick(entryId: number) {
    navigate(`entry/${entryId}`);
  }

  return (
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
      {entries.length < 1 && (
        <p className="no-entries-text">No entries have been recorded</p>
      )}
      <ul className="entry-list">
        {entries?.map((entry) => (
          <EntryCard
            key={entry.entryId}
            entry={entry}
            onEditClick={(entryId) => onEditClick(entryId)}
          />
        ))}
      </ul>
    </div>
  );
}
