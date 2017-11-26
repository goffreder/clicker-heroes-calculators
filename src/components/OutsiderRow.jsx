const { number, string, func, bool } = React.PropTypes;

export default class OutsiderRow extends React.Component {
    static propTypes = {
        id: number.isRequired,
        label: string.isRequired,
        level: number.isRequired,
        image: string.isRequired,
        minLevel: number.isRequired,
        spentSouls: number.isRequired,
        nextSouls: number.isRequired,
        nextTenSouls: number.isRequired,
        availableSouls: number.isRequired,
        highlighted: bool.isRequired,

        addLevel: func.isRequired,
        subLevel: func.isRequired,
        highlightOutsider: func.isRequired,
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

    handleOutsiderHover = () => {
        this.props.highlightOutsider(this.props.id);
    };

    render() {
        const {
            label,
            image,
            level,
            minLevel,
            spentSouls,
            nextSouls,
            nextTenSouls,
            availableSouls,
            highlighted,
        } = this.props;

        const imgStyle = {
            width: 50,
            marginLeft: 10,
        };

        return (
            <div
                className={'outsider row' + (highlighted ? ' highlighted' : '')}
                onMouseEnter={this.handleOutsiderHover}
            >
                <div
                    className="col-md-4"
                    style={{ textAlign: 'right', padding: 0 }}
                >
                    {label}
                    <img src={image} style={imgStyle} />
                </div>
                <div className="col-md-8">
                    <button
                        type="button"
                        className="btn btn-default"
                        disabled={level - 9 <= minLevel}
                        onClick={this.subTenLevels}
                    >
                        {'-10'}
                    </button>
                    <button
                        type="button"
                        className="btn btn-default"
                        disabled={level <= minLevel}
                        onClick={this.subLevel}
                    >
                        {'-'}
                    </button>
                    <div style={{ width: 50 }}>{level}</div>
                    <button
                        type="button"
                        className="btn btn-default"
                        disabled={nextSouls > availableSouls}
                        onClick={this.addLevel}
                    >
                        {'+'}
                    </button>
                    <button
                        type="button"
                        className="btn btn-default"
                        disabled={nextTenSouls > availableSouls}
                        onClick={this.addTenLevels}
                    >
                        {'+10'}
                    </button>
                    <div style={{ width: 60 }}>{` (${spentSouls} AS)`}</div>
                </div>
            </div>
        );
    }
}
