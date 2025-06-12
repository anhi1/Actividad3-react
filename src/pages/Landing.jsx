import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Landing = () => (
    <div style={{
      backgroundImage:
        'url("https://images.pexels.com/photos/547116/pexels-photo-547116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      flex: 1,
      color: 'white',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
    }}>
        <h1>Outdoor Adventure</h1>
        <p>Descubre experiencias al aire libre y deportivas</p>
        <Link to="/activities">
            <Button>Ver ahora</Button>
        </Link>
    </div>
);

export default Landing;
