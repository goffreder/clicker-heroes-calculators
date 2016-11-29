import images from '../css/images';

export default class AncientsTableRow extends React.Component {
    constructor() {
        super();

        this.state = { hover: false, edit: false };
    }

    _editMode = () => {
        this.setState({ edit: true });
        this.props.toggleEditMode();
    }
    _saveMultiplier = event => {
        this.props.setAncientMultiplier(
            this.props.id,
            event.target.value
        );
        this.props.toggleEditMode();
        this.setState({ edit: false });
    }
    _hideIcon = () => this.setState({ hover: false })
    _showIcon = () => this.setState({ hover: true })

    render() {
        const imgStyle = {
            width: 50,
            marginRight: 5,
        };
        const tdStyle = {
            verticalAlign: 'middle',
            padding: this.state.edit ? '10px 0px 0px 0px' : 'inherit',
        };
        const iconStyle = {
            marginLeft: 5,
            cursor: 'pointer',
            visibility: this.state.hover && !this.props.editing ? 'inherit' : 'hidden'
        };

        const content = this.state.edit
            ? (
                <form className="form-inline">
                    <div className="form-group">
                        <input
                            className="form-control shorter text-center"
                            autoFocus
                            onBlur={this._saveMultiplier}
                            defaultValue={this.props.multiplier}
                        />
                    </div>
                </form>
            )
            : this.props.multiplier;

        return (
            <tr>
                <td className="text-left">
                    <img
                        src={images.ancients[this.props.name.toLowerCase()]}
                        style={imgStyle}
                    />
                    {this.props.name}
                </td>
                <td
                    style={tdStyle}
                    onMouseOver={this._showIcon}
                    onMouseOut={this._hideIcon}
                >
                    {content}
                    <span
                        className="glyphicon glyphicon-edit"
                        aria-hidden="true"
                        style={iconStyle}
                        onClick={this._editMode}
                    />
                </td>
            </tr>
        );
    }
}
