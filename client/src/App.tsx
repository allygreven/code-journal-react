import { Header } from './components/Header';
import { Entries } from './pages/Entries';
import { EntryForm } from './pages/EntryForm';

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <EntryForm />
        <Entries />
      </main>
    </>
  );
}
