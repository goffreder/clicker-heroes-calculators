export default function HeroesTableRow(props) {
    const { hero } = props;

    return (
        <tr>
            <td className="text-right">{hero.label}</td>
            <td className="text-left">{hero.baseCost.toExponential(2)}</td>
            <td>{hero.currentLevel}</td>
            <td>{hero.targetLevel}</td>
            <td>{hero.total.toExponential(2)}</td>
        </tr>
    );
}
