import { Container } from 'react-bootstrap';
import JobCards from './JobDetails';
import marshallImage from './images/marshall.png';
import NavBar from './NavigationBar';

function Home() {
    return (
        <div>

            <div className>
                <img alt="MSC - Marshall Students Center" src={marshallImage} style={{ width: '100%', objectFit: 'cover', height: '500px', filter: 'brightness(80%)' }} />
                <p style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '150px', color: 'white', fontFamily: 'montserrat', fontWeight: 'bold' }}>TASKBULLS</p>
            </div>
            <JobCards />
        </div>
    );
}

export default Home;


