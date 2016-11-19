import AncientsTableRow from './AncientsTableRow';

export default function AncientsTable(props)  {
    return (
        <table id="ancients-table" className="table table-hover">
            <thead>
                <tr>
                    <th className="text-center">Ancient</th>
                    <th className="text-center">Multiplier</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.ancients.map((a, k) => (
                        <AncientsTableRow
                            key={k}
                            name={a.label}
                            multiplier={a.multipliers[props.playStyle]}
                        />
                    ))
                }
            </tbody>
        </table>
    );
}
