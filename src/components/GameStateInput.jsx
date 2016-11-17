export default class GameStateInput extends React.Component {

    onTextareaClick = event => {
        event.target.select();
    }

    onTextareaBlur = event => {
        if (event.target.value !== '') {
            this.props.saveGameState(event.target.value);
        }
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="gamestate">Enter your game state:</label>
                    <textarea
                        id="gamestate"
                        className="form-control"
                        rows="3"
                        cols="30"
                        defaultValue={this.props.encodedState}
                        onClick={this.onTextareaClick}
                        onBlur={this.onTextareaBlur}
                    >
                        </textarea>
                </div>
            </form>
        );
    }
}
