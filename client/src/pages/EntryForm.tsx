import { useParams } from 'react-router-dom';
import { FormEntry } from '../components/FormEntry';

export function EntryForm() {
  const entryId = useParams();
  console.log(entryId);

  return (
    <div data-view="entry-form" className="entry-form-wrapper">
      <FormEntry entryId={`${entryId.entryId}`} />
    </div>
  );
}
