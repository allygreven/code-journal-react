import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Entries } from './pages/Entries';
import { EntryForm } from './pages/EntryForm';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Entries />} />
        <Route path="entry/:entryId" element={<EntryForm />} />
      </Route>
    </Routes>
  );
}
