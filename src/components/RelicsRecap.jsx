import { roundNum } from '../utils';

export default function RelicsRecap(props) {
    if (props.bonuses.length) {
        return (
            <div className="col-md-3">
                <table id="relics-recap" className="table table-bordered table-condensed">
                    <thead>
                        <tr><th colSpan="2">Bonus Recap</th></tr>
                    </thead>
                    <tbody>
                        {props.bonuses.map(b => <tr key={b.id}><td>{b.ancient}</td><td>{Math.floor(b.level)}</td></tr>)}
                    </tbody>
                </table>
            </div>
        );
    }

    return null;
};
