import { getDogcogPercentage, roundNum } from '../utils';

export default class DogcogBlock extends React.Component {

    _handleLevelChange = event => {
        this.props.setDogcogLevel(+event.target.value);
    }

    _handleCheckboxChange = event => {
        this.props.setRelicsBonusCheckboxValue(event.target.checked);
    }

    render() {
        const checkboxLabelStyle = { marginRight: 10, marginTop: 10 };

        const relicBonusLabel = this.props.bonusLevels === 1
            ? 'Include ' + roundNum(this.props.bonusLevels) + ' level from relics'
            : 'Include ' + roundNum(this.props.bonusLevels) + ' levels from relics';

        const dogcogLevel = +this.props.dogcogLevel + (this.props.relicsBonusChecked ? this.props.bonusLevels : 0);

        return (
            <form className="form-inline">
                <div className="form-group" id="dogcog-block">
                    <label htmlFor="dogcog-level">Dogcog Level</label>
                    <input
                        id="dogcog-level"
                        className="form-control short"
                        value={dogcogLevel}
                        type="number"
                        min="0"
                        onChange={this._handleLevelChange}
                    />
                    <span>-{getDogcogPercentage(dogcogLevel).toFixed(2)}%</span>
                </div>
                <div className={'checkbox' + (!this.props.relicsCheckboxEnabled ? ' disabled' : '')}>
                    <label style={checkboxLabelStyle}>
                        {relicBonusLabel}
                    </label>
                    <input
                        type="checkbox"
                        checked={this.props.relicsBonusChecked}
                        disabled={!this.props.relicsCheckboxEnabled}
                        onChange={this._handleCheckboxChange}
                    />
                </div>
            </form>
        );
    }
}
