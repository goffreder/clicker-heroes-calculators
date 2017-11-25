import OutsiderRow from './OutsiderRow';

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

        setAncientSouls: func.isRequired,
        addOutsiderLevels: func.isRequired,
        subOutsiderLevels: func.isRequired,
    };

    handleSoulsChange = e => {
        this.props.setAncientSouls(Number(e.target.value));
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
                        min="0"
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
            const percentage = spentSouls * 100 / totalAncientSouls;

            return (
                <OutsiderRow
                    key={id}
                    id={id}
                    level={level}
                    minLevel={minLevel}
                    label={label}
                    addLevel={addOutsiderLevels}
                    subLevel={subOutsiderLevels}
                    spentSouls={spentSouls}
                    nextSouls={nextSouls}
                    availableSouls={availableSouls}
                    nextTenSouls={nextTenSouls}
                    percentage={percentage}
                />
            );
        });
    };

    render() {
        return (
            <div>
                {this.renderAncientSoulsForm()}
                <div id="outsiders" className="container">
                    <div className="row">
                        <div className="col-md-7">
                            {this.renderOutsiders()}
                        </div>
                        <div className="col-md-5">
                            {'Graph'}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
