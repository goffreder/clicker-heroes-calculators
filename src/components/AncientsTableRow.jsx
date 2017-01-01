import { allImages as images } from '../css/images';

const { Component, PropTypes } = React;
const { number, bool, string, func } = PropTypes;

export default class AncientsTableRow extends Component {
    constructor() {
        super();

        this.state = { hover: false, edit: false };
    }

    static propTypes = {
        id: number,
        coefficient: number,
        editing: bool,
        name: string,
        setAncientCoefficient: func,
        toggleEditMode: func,
    }

    editMode = () => {
        this.setState({ edit: true });
        this.props.toggleEditMode();
    }

    saveCoefficient = event => {
        this.props.setAncientCoefficient(
            this.props.id,
            Number(event.target.value)
        );
        this.props.toggleEditMode();
        this.setState({ edit: false });
    }

    hideIcon = () => this.setState({ hover: false })
    showIcon = () => this.setState({ hover: true })

    onSubmit = e => e.preventDefault()

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
            visibility: this.state.hover && !this.props.editing
                ? 'inherit'
                : 'hidden',
        };

        const content = this.state.edit
            ? (
                <form className="form-inline" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input
                            className="form-control shorter text-center"
                            autoFocus
                            onBlur={this.saveCoefficient}
                            defaultValue={this.props.coefficient}
                        />
                    </div>
                </form>
            )
            : this.props.coefficient;

        return (
            <tr>
                <td className="text-left">
                    <img
                        src={images.ancients[this.props.name]}
                        style={imgStyle}
                    />
                    {this.props.name}
                </td>
                <td
                    style={tdStyle}
                    onMouseOver={this.showIcon}
                    onMouseOut={this.hideIcon}
                >
                    {content}
                    <span
                        className="glyphicon glyphicon-edit"
                        aria-hidden="true"
                        style={iconStyle}
                        onClick={this.editMode}
                    />
                </td>
            </tr>
        );
    }
}
