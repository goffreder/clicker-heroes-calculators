import Header from '../containers/Header';
import Relics from './Relics';
import Ancients from './Ancients';
import Heroes from './Heroes';

export default function Main(props) {
    let content = null;

    switch (props.active) {
        case 'heroes':
            content = <Heroes />;
            break;
        case 'ancients':
            content = <Ancients />;
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
