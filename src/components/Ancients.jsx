import AncientsTable from './AncientsTable';

import { ancients } from '../constants';

export default function Ancients() {
    const ancientsIII = Object.keys(ancients)
        .map(k => ancients[k])
        .sort((a, b) => b.multiplier - a.multiplier);

    const ancientsI = ancientsIII.splice(0, Math.ceil(ancientsIII.length / 3));
    const ancientsII = ancientsIII.splice(0, ancientsI.length);

    return (
        <div className="container">
            <div className="col-md-4">
                <AncientsTable ancients={ancientsI} />
            </div>
            <div className="col-md-4">
                <AncientsTable ancients={ancientsII} />
            </div>
            <div className="col-md-4">
                <AncientsTable ancients={ancientsIII} />
            </div>
        </div>
    );
}
