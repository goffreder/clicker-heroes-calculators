import OutsiderRow from './OutsiderRow';
import OutsidersChart from './OutsidersChart';

const { number, func, arrayOf, shape, object, string } = React.PropTypes;

export default class Outsiders extends React.Component {
    static propTypes = {
        outsiders: arrayOf(
            shape({
                id: number.isRequired,
                label: string.isRequired,
                level: number.isRequired,
            }),
        ).isRequired,
        outsiderCallbacks: object.isRequired,
        totalAncientSouls: number.isRequired,
        spentAncientSouls: number.isRequired,
        highlightedOutsider: number.isRequired,

        setAncientSouls: func.isRequired,
        addOutsiderLevels: func.isRequired,
        subOutsiderLevels: func.isRequired,
        highlightOutsider: func.isRequired,
    };

    handleSoulsChange = e => {
        const value = Number(e.target.value);

        this.props.setAncientSouls(value);
    };

    renderAncientSoulsForm = () => {
        return (
            <form className="form-inline">
                <div className="form-group" id="ancient-souls-form">
                    <label htmlFor="ancient-souls">{'Ancient Souls: '}</label>
                    <span>{` spent ${this.props.spentAncientSouls} of`}</span>
                    <input
                        id="ancient-souls"
                        className="form-control short"
                        value={this.props.totalAncientSouls}
                        type="number"
                        min={this.props.spentAncientSouls}
                        onChange={this.handleSoulsChange}
                    />
                </div>
            </form>
        );
    };

    renderOutsiders = () => {
        const {
            outsiders,
            outsiderCallbacks,
            totalAncientSouls,
            spentAncientSouls,
            addOutsiderLevels,
            subOutsiderLevels,
            highlightOutsider,
            highlightedOutsider,
        } = this.props;

        return outsiders.map(o => {
            const { id, level, label } = o;
            const availableSouls = totalAncientSouls - spentAncientSouls;
            const minLevel = 0;
            const spentSouls = outsiderCallbacks[id].costForLevel(level);
            const nextSouls =
                outsiderCallbacks[id].costForLevel(level + 1) - spentSouls;
            const nextTenSouls =
                outsiderCallbacks[id].costForLevel(level + 10) - spentSouls;

            return (
                <OutsiderRow
                    key={id}
                    id={id}
                    level={level}
                    minLevel={minLevel}
                    label={label}
                    addLevel={addOutsiderLevels}
                    subLevel={subOutsiderLevels}
                    highlightOutsider={highlightOutsider}
                    spentSouls={spentSouls}
                    nextSouls={nextSouls}
                    availableSouls={availableSouls}
                    nextTenSouls={nextTenSouls}
                    highlighted={highlightedOutsider === id}
                />
            );
        });
    };

    render() {
        const unspentSouls =
            this.props.totalAncientSouls - this.props.spentAncientSouls;

        return (
            <div>
                {this.renderAncientSoulsForm()}
                <div id="outsiders" className="container">
                    <div className="row">
                        <div className="col-md-6 outsiders-list">
                            {this.renderOutsiders()}
                        </div>
                        <div className="col-md-6">
                            <OutsidersChart
                                outsiders={this.props.outsiders}
                                outsiderCallbacks={this.props.outsiderCallbacks}
                                unspentSouls={unspentSouls}
                                highlightOutsider={this.props.highlightOutsider}
                                highlightedOutsider={
                                    this.props.highlightedOutsider
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
