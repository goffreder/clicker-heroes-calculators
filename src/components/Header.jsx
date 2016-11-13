export default class Header extends React.Component {
    onClick = event => {
        const dest = event.target.href.match(/#([a-zA-Z-_]*)$/)[1];

        if (this.props.active !== dest) {
            this.props.loadTab(dest);
        }
    }

    render() {
        location.hash = this.props.active;

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
                        <a className="navbar-brand" href="#">Clicker Heroes Calculators</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className={this.props.active === 'relics' ? 'active' : ''}>
                                <a href="#relics" onClick={this.onClick}>Relics</a>
                            </li>
                            <li className={this.props.active === 'heroes' ? 'active' : ''}>
                                <a href="#heroes" onClick={this.onClick}>Hero Costs</a>
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
