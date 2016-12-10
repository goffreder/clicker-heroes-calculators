import RelicsTableRow from './RelicsTableRow';

export default function RelicsTable(props) {
    if (props.relics.length) {
        return (
            <div className="col-md-9">
                <table id="relics-table" className="table table-hover table-bordered table-condensed">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Relic</th>
                            <th>Total</th>
                            <th>Bonus I</th>
                            <th>Bonus II</th>
                            <th>Bonus III</th>
                            <th>Bonus IV</th>
                        </tr>
                    </thead>
                    <tbody>
                        { props.relics.map((r, k) => (
                            <RelicsTableRow key={k} index={k} relic={r} />
                        )) }
                    </tbody>
                </table>
            </div>
        );
    }

    return null;
}
