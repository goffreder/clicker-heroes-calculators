import { getDogcogPercentage } from '../utils';

const { Component, PropTypes } = React;
const { number, bool, func } = PropTypes;

export default class DogcogBlock extends Component {
    static propTypes = {
        bonusLevels: number,
        dogcogLevel: number,
        relicsBonusChecked: bool,
        relicsCheckboxEnabled: bool,
        setDogcogLevel: func,
        setRelicsBonusCheckboxValue: func,
    }

    handleLevelChange = event => {
        this.props.setDogcogLevel(Number(event.target.value));
    }

    handleCheckboxChange = event => {
        this.props.setRelicsBonusCheckboxValue(event.target.checked);
    }

    render() {
        const {
            bonusLevels, dogcogLevel,
            relicsBonusChecked, relicsCheckboxEnabled,
        } = this.props;
        const checkboxLabelStyle = { marginRight: 10, marginTop: 10 };

        const relicBonusLabel = bonusLevels === 1
            ? `Include ${bonusLevels} level from relics`
            : `Include ${bonusLevels} levels from relics`;

        const dogcogTotalLevel = Number(dogcogLevel) +
            (relicsBonusChecked ? bonusLevels : 0);

        return (
            <form className="form-inline">
                <div className="form-group" id="dogcog-block">
                    <label htmlFor="dogcog-level">{'Dogcog Level'}</label>
                    <input
                        id="dogcog-level"
                        className="form-control short"
                        value={dogcogTotalLevel}
                        type="number"
                        min="0"
                        onChange={this.handleLevelChange}
                    />
                    <span>
                        {`-${getDogcogPercentage(dogcogTotalLevel).toFixed(2)}%`}
                    </span>
                </div>
                <div className={'checkbox' + (!relicsCheckboxEnabled ? ' disabled' : '')}>
                    <label style={checkboxLabelStyle}>
                        {relicBonusLabel}
                    </label>
                    <input
                        type="checkbox"
                        checked={relicsBonusChecked}
                        disabled={!relicsCheckboxEnabled}
                        onChange={this.handleCheckboxChange}
                    />
                </div>
            </form>
        );
    }
}
