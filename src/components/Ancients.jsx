import StyleSwitcher from './StyleSwitcher';
import AncientsTable from './AncientsTable';

const { Component, PropTypes } = React;
const { object, string, func, bool } = PropTypes;

export default class Ancients extends Component {
    static propTypes = {
        ancients: object,
        playStyle: string,
        editing: bool,
        setAncientCoefficient: func,
        setPlayStyle: func,
        toggleEditMode: func,
    };

    setAncientCoefficient = (ancientId, coefficient) =>
        this.props.setAncientCoefficient(
            ancientId,
            this.props.playStyle,
            coefficient,
        );

    render() {
        const {
            ancients,
            editing,
            playStyle,
            setPlayStyle,
            toggleEditMode,
        } = this.props;

        const ancientsIII = Object.keys(ancients)
            .map(k => ancients[k])
            .sort(
                (a, b) => b.coefficients[playStyle] - a.coefficients[playStyle],
            );

        const ancientsI = ancientsIII.splice(
            0,
            Math.ceil(ancientsIII.length / 3),
        );
        const ancientsII = ancientsIII.splice(0, ancientsI.length);

        return (
            <div className="container">
                <StyleSwitcher
                    playStyle={playStyle}
                    setPlayStyle={setPlayStyle}
                />
                <div className="col-md-4">
                    <AncientsTable
                        ancients={ancientsI}
                        playStyle={playStyle}
                        editing={editing}
                        toggleEditMode={toggleEditMode}
                        setAncientCoefficient={this.setAncientCoefficient}
                    />
                </div>
                <div className="col-md-4">
                    <AncientsTable
                        ancients={ancientsII}
                        playStyle={playStyle}
                        editing={editing}
                        toggleEditMode={toggleEditMode}
                        setAncientCoefficient={this.setAncientCoefficient}
                    />
                </div>
                <div className="col-md-4">
                    <AncientsTable
                        ancients={ancientsIII}
                        playStyle={playStyle}
                        editing={editing}
                        toggleEditMode={toggleEditMode}
                        setAncientCoefficient={this.setAncientCoefficient}
                    />
                </div>
            </div>
        );
    }
}
