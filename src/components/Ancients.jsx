import StyleSwitcher from './StyleSwitcher';
import AncientsTable from './AncientsTable';

import { ancients } from '../constants';

export default function Ancients(props) {
    const ancientsIII = Object.keys(ancients)
        .map(k => ancients[k])
        .sort((a, b) => b.multipliers[props.playStyle] - a.multipliers[props.playStyle]);

    const ancientsI = ancientsIII.splice(0, Math.ceil(ancientsIII.length / 3));
    const ancientsII = ancientsIII.splice(0, ancientsI.length);

    return (
        <div className="container">
            <StyleSwitcher
                playStyle={props.playStyle}
                setPlayStyle={props.setPlayStyle}
            />
            <div className="col-md-4">
                <AncientsTable ancients={ancientsI} playStyle={props.playStyle}/>
            </div>
            <div className="col-md-4">
                <AncientsTable ancients={ancientsII} playStyle={props.playStyle} />
            </div>
            <div className="col-md-4">
                <AncientsTable ancients={ancientsIII} playStyle={props.playStyle} />
            </div>
        </div>
    );
}
