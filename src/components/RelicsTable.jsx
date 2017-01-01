import RelicsTableRow from './RelicsTableRow';

const RelicsTable = ({ relics }) => {
    if (relics.length) {
        return (
            <div className="col-md-9">
                <table
                    id="relics-table"
                    className="table table-hover table-bordered table-condensed"
                >
                    <thead>
                        <tr>
                            <th>{'#'}</th>
                            <th>{'Relic'}</th>
                            <th>{'Total'}</th>
                            <th>{'Bonus I'}</th>
                            <th>{'Bonus II'}</th>
                            <th>{'Bonus III'}</th>
                            <th>{'Bonus IV'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        { relics.map((r, k) => (
                            <RelicsTableRow key={k} index={k} relic={r} />
                        )) }
                    </tbody>
                </table>
            </div>
        );
    }

    return null;
};

RelicsTable.propTypes = {
    relics: React.PropTypes.array,
};

export default RelicsTable;
