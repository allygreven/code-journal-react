import { useParams, useNavigate } from 'react-router-dom';
import { FormEntry } from '../components/FormEntry';
import { Modal } from '../components/Modal';
import { useEffect, useState } from 'react';
import { readEntry, removeEntry, type Entry } from '../data';

export function EntryForm() {
  const { entryId } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [entry, setEntry] = useState<Entry>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  const navigate = useNavigate();

  useEffect(() => {
    async function loadEntry(entryId: number) {
      try {
        const entry = await readEntry(entryId);
        setEntry(entry);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (entryId === 'new') {
      setIsLoading(false);
      setEntry({ title: '', notes: '', photoUrl: '', entryId: 0 });
    } else if (entryId) {
      setIsLoading(true);
      loadEntry(+entryId);
    }
  }, [entryId]);

  if (isLoading) return <div>Loading...</div>;

  if (error || !entry) {
    return (
      <div>
        Error Loading Entry {entryId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <>
      <div data-view="entry-form" className="entry-form-wrapper">
        <FormEntry entry={entry} onDeleteClick={() => setIsOpen(true)} />
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>
          <strong>Are you sure you want to delete this entry?</strong>
        </p>
        <div className="modal-actions">
          <button onClick={() => setIsOpen(false)} className="cancel-modal">
            CANCEL
          </button>
          <button
            onClick={() => {
              removeEntry(entry.entryId);
              alert('Okay fine, its deleted!');
              setIsOpen(false);
              navigate('/');
            }}
            className="confirm-modal">
            CONFIRM
          </button>
        </div>
      </Modal>
    </>
  );
}
