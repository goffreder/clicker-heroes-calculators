import Header from '../containers/Header';
import Home from './Home';
import Ancients from './Ancients';

export default function Main(props) {
    return (
        <div>
            <Header />
            { props.active === 'home' ? <Home /> : <Ancients /> }
        </div>
    );
}
