import Header from '../containers/Header';
import Relics from '../containers/Relics';
import Ancients from '../containers/Ancients';
import Heroes from '../containers/Heroes';
import Links from '../components/Links';

export default function Main(props) {
    let content = null;

    switch (props.active) {
        case 'heroes':
            content = <Heroes />;
            break;
        case 'ancients':
            content = <Ancients />;
            break;
        case 'links':
            content = <Links />;
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
}
