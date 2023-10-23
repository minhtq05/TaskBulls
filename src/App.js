import Home from './Home'
import NavBar from './NavigationBar';
import Signin from './Signin';
import Footer from './Footer';
import JobDescription from './JobDescription';

function App() {
  return (
    <div>
      {/* <Signin /> */}
      <NavBar />
      <Home />
      <Footer />
      {/* <JobDescription title='Hello World' description='Lorem Ipsum' rate='1 00$/hr' /> */}
    </div >
  );
}

export default App;
