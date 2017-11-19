import MercenariesTableRow from './MercenariesTableRow';

const MercenariesTable = ({ mercenaries }) => {
    if (mercenaries.length) {
        return (
            <div className="col-md-12">
                <table
                    id="mercenaries-table"
                    className="table table-hover table-bordered table-condensed"
                >
                    <thead>
                        <tr>
                            <th>{'#'}</th>
                            <th colSpan="2">{'Mercenary'}</th>
                            <th>{'Lvl'}</th>
                            <th>{'Rarity'}</th>
                            <th>{'Experience'}</th>
                            <th>{'Quest'}</th>
                            <th>{'Reward'}</th>
                            <th>{'Time to lvl up'}</th>
                            <th>{'Time to die'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        { mercenaries.map((m, k) => (
                            <MercenariesTableRow
                                key={k}
                                index={k}
                                merc={m}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
    return null;
};

const { array } = React.PropTypes;

MercenariesTable.propTypes = {
    mercenaries: array,
};

export default MercenariesTable;
