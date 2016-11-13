import images from '../css/images';

function getHeroImage(hero, images) {
    return images[hero];
}

export default function HeroesTableRow(props) {
    const { hero } = props;
    const { heroes } = images;

    return (
        <tr>
            <td className="text-right">
                <img src={getHeroImage(props.id, heroes)} />
                {hero.label}
            </td>
            <td className="text-left">{hero.baseCost.toExponential(2)}</td>
            <td>{hero.currentLevel}</td>
            <td>{hero.targetLevel}</td>
            <td>{hero.total.toExponential(2)}</td>
        </tr>
    );
}
