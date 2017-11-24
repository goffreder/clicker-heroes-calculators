import Header from '../containers/Header';
import Relics from '../containers/Relics';
import Ancients from '../containers/Ancients';
import Heroes from '../containers/Heroes';
import Links from '../components/Links';
import Outsiders from '../containers/Outsiders';

const Main = ({ active }) => {
    let content = null;

    switch (active) {
        case 'heroes':
            content = <Heroes />;
            break;
        case 'ancients':
            content = <Ancients />;
            break;
        case 'links':
            content = <Links />;
            break;
        case 'outsiders':
            content = <Outsiders />;
            break;
        case 'relics':
        default:
            content = <Relics />;
            break;
    }

    return (
        <div>
            <Header />
            {content}
        </div>
    );
};

Main.propTypes = {
    active: React.PropTypes.string,
};

export default Main;
