import RelicsTableRow from './RelicsTableRow';

export default function RelicsTable(props) {
    if (props.relics.length) {
        return (
            <table id="relics-table" className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th rowSpan="2">#</th>
                        <th rowSpan="2">Relic</th>
                        <th rowSpan="2">Rarity</th>
                        <th rowSpan="2">Level</th>
                        <th colSpan="2">I</th>
                        <th colSpan="2">II</th>
                        <th colSpan="2">III</th>
                        <th colSpan="2">IV</th>
                        <th rowSpan="2">Total</th>
                    </tr>
                    <tr>
                        <th>Ancient</th>
                        <th>Level</th>
                        <th>Ancient</th>
                        <th>Level</th>
                        <th>Ancient</th>
                        <th>Level</th>
                        <th>Ancient</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                    { props.relics.map((r, k) => (
                        <RelicsTableRow key={k} index={k} relic={r} />
                    )) }
                </tbody>
            </table>
        );
    }

    return null;
}
