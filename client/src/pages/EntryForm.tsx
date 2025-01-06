import { useParams, useNavigate } from 'react-router-dom';
import { FormEntry } from '../components/FormEntry';
import { Modal } from '../components/Modal';
import { useState } from 'react';

export function EntryForm() {
  const entryId = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div data-view="entry-form" className="entry-form-wrapper">
        <FormEntry
          entryId={`${entryId.entryId}`}
          onDeleteClick={() => setIsOpen(true)}
        />
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
