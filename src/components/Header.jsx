import { clearState } from '../utils';

export default class Header extends React.Component {
    onClick = event => {
        const dest = event.target.href.match(/#([a-zA-Z-_]*)$/)[1];

        if (this.props.active !== dest) {
            this.props.loadTab(dest);
        }
    }

    resetState = () => {
        if (confirm('Are you sure?')) {
            clearState();

            location.href = location.origin;
        }
    }

    render() {
        const githubLink = { paddingTop: 10, paddingBottom: 10 };
        const githubIcon = { width: 30 };

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
                            <li className={this.props.active === 'relics' ? 'active' : null}>
                                <a href="#relics" onClick={this.onClick}>Relics</a>
                            </li>
                            <li className={this.props.active === 'ancients' ? 'active' : null}>
                                <a href="#ancients" onClick={this.onClick}>Ancients Relic Tiers</a>
                            </li>
                            <li className={this.props.active === 'heroes' ? 'active' : null}>
                                <a href="#heroes" onClick={this.onClick}>Hero Costs</a>
                            </li>
                            <li>
                                <a href="#" onClick={this.resetState}>Reset</a>
                            </li>
                            <li className={this.props.active === 'links' ? 'active' : null}>
                                <a href="#links" onClick={this.onClick}>Links</a>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="https://github.com/goffreder/clicker-heroes-calculators/releases" target="_blank">v{appData.version}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
