import { allImages as images } from '../css/images';

function getHeroImage(hero, images) {
    return images[hero];
}

export default function HeroesTableRow(props) {
    const { hero } = props;
    const { heroes } = images;

    const imgStyle = { marginLeft: 10 };

    return (
        <tr>
            <td className="text-right">
                {hero.label}
                <img src={getHeroImage(props.id, heroes)} style={imgStyle} />
            </td>
            <td>{hero.baseCost.toExponential(2)}</td>
            <td>
                <input
                    type="number"
                    className="form-control short"
                    value={hero.currentLevel}
                    onChange={event => props.setHeroCurrentLevel(props.id, event.target.value)}
                />
            </td>
            <td>
                <input
                    type="number"
                    className="form-control short"
                    value={hero.targetLevel}
                    onChange={event => props.setHeroTargetLevel(props.id, event.target.value)}
                />
            </td>
            <td>{hero.total.toExponential(2)}</td>
        </tr>
    );
}
