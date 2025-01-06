export function DeleteDialog() {
  return (
    <dialog>
      <p>
        <strong>Are you sure you want to delete this entry?</strong>
      </p>
      <div className="modal-actions">
        <button className="cancel-modal">CANCEL</button>
        <button className="confirm-modal">CONFIRM</button>
      </div>
    </dialog>
  );
}
