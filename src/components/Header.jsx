export default class Header extends React.Component {
    onClick = event => {
        const dest = event.target.textContent.toLowerCase();

        if (this.props.active !== dest) {
            this.props.onClick(event.target.textContent.toLowerCase());
        }
    }

    render() {
        switch (this.props.active) {
            case 'home':
                location.hash = '';
                break;
            default:
                location.hash = this.props.active;
                break;
        }

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Clicker Heroes Relic Calculator</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className={this.props.active === 'home' ? 'active' : ''}>
                                <a href="#" onClick={this.onClick}>Home</a>
                            </li>
                            {/* <li className={this.props.active === 'ancients' ? 'active' : ''}>
                                <a href="#ancients" onClick={this.onClick}>Ancients</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
