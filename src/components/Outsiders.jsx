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
        addOutsiderLevel: func.isRequired,
        subOutsiderLevel: func.isRequired,
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
        return this.props.outsiders.map(o => {
            const availableSouls = this.props.totalAncientSouls - this.props.spentAncientSouls;
            const oMinLevel = 0;
            const oMaxLevel = this.props.outsiderCallbacks[
                o.id
            ].maxLevelForSouls(availableSouls);

            return (
                <OutsiderRow
                    key={o.id}
                    id={o.id}
                    level={o.level}
                    minLevel={oMinLevel}
                    maxLevel={oMaxLevel}
                    label={o.label}
                    addLevel={this.props.addOutsiderLevel}
                    subLevel={this.props.subOutsiderLevel}
                />
            );
        });
    };

    render() {
        const styles = {
            container: {
                width: 600,
                margin: 'auto',
            },
        };

        return (
            <div style={styles.container}>
                {this.renderAncientSoulsForm()}
                <div id="outsiders">{this.renderOutsiders()}</div>
            </div>
        );
    }
}
