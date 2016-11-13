import { getDogcogPercentage } from '../utils';

export default class DogcogBlock extends React.Component {

    _handleChange = event => {
        this.props.setDogcogLevel(+event.target.value);
    }

    render() {
        return (
            <form className="form-inline">
                <div className="form-group" id="dogcog-block">
                    <label htmlFor="dogcog-level">Dogcog Level</label>
                    <input
                        id="dogcog-level"
                        className="form-control short"
                        value={this.props.dogcogLevel}
                        type="number"
                        onChange={this._handleChange}
                    />
                    <span>-{getDogcogPercentage(this.props.dogcogLevel).toFixed(2)}%</span>
                </div>
            </form>
        );
    }
}
