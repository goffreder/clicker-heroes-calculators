export default class StyleSwitcher extends React.Component {
    _handleChange = event => {
        this.props.setPlayStyle(event.target.value);
    }

    render() {
        const switcherStyle = { marginBottom: 20 };
        const switcherLabelStyle = { marginRight: 10 };

        return (
            <div id="style-switcher" style={switcherStyle}>
                <label style={switcherLabelStyle}>Playstyle:</label>
                <label className="radio-inline">
                    <input
                        type="radio"
                        name="style-switcher"
                        value="idle"
                        checked={this.props.playStyle === 'idle'}
                        onChange={this._handleChange}
                    />
                    Idle
                </label>
                <label className="radio-inline">
                    <input
                        type="radio"
                        name="style-switcher"
                        value="hybrid"
                        checked={this.props.playStyle === 'hybrid'}
                        onChange={this._handleChange}
                    />
                    Hybrid
                </label>
            </div>
        )
    };
}
