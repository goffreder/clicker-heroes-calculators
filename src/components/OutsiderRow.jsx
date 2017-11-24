const { number, string, func } = React.PropTypes;

export default class OutsiderRow extends React.Component {
    static propTypes = {
        id: number.isRequired,
        label: string.isRequired,
        level: number.isRequired,
        minLevel: number.isRequired,
        maxLevel: number.isRequired,

        addLevel: func.isRequired,
        subLevel: func.isRequired,
    };

    addLevel = () => {
        this.props.addLevel(this.props.id);
    };

    subLevel = () => {
        this.props.subLevel(this.props.id);
    };

    render() {
        const { label, level, minLevel, maxLevel } = this.props;

        return (
            <div className="row">
                <div
                    style={{
                        width: 200,
                        textAlign: 'right',
                    }}
                >
                    {label}
                </div>
                <div style={{ width: 400 }}>
                    <span>{minLevel}</span>
                    <button
                        disabled={level <= minLevel}
                        onClick={this.subLevel}
                    >
                        {'-'}
                    </button>
                    <span>{level}</span>
                    <button
                        disabled={level >= maxLevel}
                        onClick={this.addLevel}
                    >
                        {'+'}
                    </button>
                    <span>{maxLevel}</span>
                </div>
            </div>
        );
    }
}
