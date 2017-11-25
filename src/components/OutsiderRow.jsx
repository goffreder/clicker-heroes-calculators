const { number, string, func } = React.PropTypes;

export default class OutsiderRow extends React.Component {
    static propTypes = {
        id: number.isRequired,
        label: string.isRequired,
        level: number.isRequired,
        minLevel: number.isRequired,
        spentSouls: number.isRequired,
        nextSouls: number.isRequired,
        nextTenSouls: number.isRequired,
        availableSouls: number.isRequired,
        percentage: number.isRequired,

        addLevel: func.isRequired,
        subLevel: func.isRequired,
    };

    addLevel = () => {
        this.props.addLevel(this.props.id, 1);
    };

    addTenLevels = () => {
        this.props.addLevel(this.props.id, 10);
    };

    subLevel = () => {
        this.props.subLevel(this.props.id, 1);
    };

    subTenLevels = () => {
        this.props.subLevel(this.props.id, 10);
    };

    render() {
        const {
            label,
            level,
            minLevel,
            spentSouls,
            nextSouls,
            nextTenSouls,
            availableSouls,
            percentage,
        } = this.props;

        return (
            <div className="row">
                <div>{label}</div>
                <div>
                    <button
                        disabled={level - 9 <= minLevel}
                        onClick={this.subTenLevels}
                    >
                        {'-10'}
                    </button>
                    <button
                        disabled={level <= minLevel}
                        onClick={this.subLevel}
                    >
                        {'-'}
                    </button>
                    <span>{level}</span>
                    <button
                        disabled={nextSouls > availableSouls}
                        onClick={this.addLevel}
                    >
                        {'+'}
                    </button>
                    <button
                        disabled={nextTenSouls > availableSouls}
                        onClick={this.addTenLevels}
                    >
                        {'+10'}
                    </button>
                    <span>{`(${spentSouls} souls spent - ${
                        percentage
                    }% of total souls)`}</span>
                </div>
            </div>
        );
    }
}
