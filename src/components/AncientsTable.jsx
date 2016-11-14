import AncientsTableRow from './AncientsTableRow';

import { ancients } from '../constants';

export default function AncientsTable()  {
    return (
        <table id="ancients-table" className="table table-hover">
            <thead>
                <tr>
                    <th className="text-right">Ancient</th>
                    <th className="text-left">Multiplier</th>
                </tr>
            </thead>
            <tbody>
                {
                    Object.keys(ancients)
                        .map(k => ancients[k])
                        .sort((a, b) => b.multiplier - a.multiplier)
                        .map((a, k) => (
                            <AncientsTableRow
                                key={k}
                                name={a.label}
                                multiplier={a.multiplier}
                            />
                        ))
                }
            </tbody>
        </table>
    );
}
