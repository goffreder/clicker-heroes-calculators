import { allImages as images } from '../css/images';
import BigInt from '../utils/bigInt';

function getHeroImage(hero, heroesImages) {
    return heroesImages[hero];
}

const { Component, PropTypes } = React;
const { string, object, func } = PropTypes;

export default class HeroesTableRow extends Component {
    static propTypes = {
        hero: object,
        id: string,
        setHeroCurrentLevel: func,
        setHeroTargetLevel: func,
    }

    setHeroCurrentLevel = (e) => {
        this.props.setHeroCurrentLevel(this.props.id, e.target.value);
    }

    setHeroTargetLevel = (e) => {
        this.props.setHeroTargetLevel(this.props.id, e.target.value);
    }

    render() {
        const { hero, id } = this.props;
        const { heroes } = images;

        const imgStyle = { marginLeft: 10 };
        const image = getHeroImage(id, heroes);
        const baseCost = new BigInt(hero.newBaseCost).show();

        return (
            <tr>
                <td className="text-right">
                    {hero.label}
                    <img src={image} style={imgStyle} />
                </td>
                <td>{baseCost}</td>
                <td>
                    <input
                        type="number"
                        className="form-control short"
                        value={hero.currentLevel}
                        onChange={this.setHeroCurrentLevel}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        className="form-control short"
                        value={hero.targetLevel}
                        onChange={this.setHeroTargetLevel}
                    />
                </td>
                <td>{hero.total}</td>
            </tr>
        );
    }
}
