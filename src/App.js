import { Container } from 'react-bootstrap';
import JobLists from './JobLists.jsx'
import NavBar from './MainNavBar.jsx';

function App() {
  return (
    <div>
      <NavBar />
      <JobLists />
    </div>
  );
}

export default App;
