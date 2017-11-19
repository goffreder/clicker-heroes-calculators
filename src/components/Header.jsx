/* global appData */

import HeaderLink from './HeaderLink';

import { clearState } from '../utils';

export default class Header extends React.Component {
    static propTypes = {
        active: React.PropTypes.string,
        loadTab: React.PropTypes.func,
    }

    onClick = event => {
        const dest = event.target.href.match(/#([a-zA-Z-_]*)$/)[1];

        if (this.props.active !== dest) {
            this.props.loadTab(dest);
        }
    }

    resetState = () => {
        // eslint-disable-next-line no-alert
        if (confirm('Are you sure?')) {
            clearState();

            location.reload();
        }
    }

    renderNavButton = () => {
        return (<button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
        >
            <span className="sr-only">{'Toggle navigation'}</span>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
        </button>);
    }

    render() {
        const githubReleasesLink =
            'https://github.com/goffreder/clicker-heroes-calculators/releases';

        location.hash = this.props.active;

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        {this.renderNavButton()}
                        <a className="navbar-brand" href="#">{'CH Calculators'}</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <HeaderLink
                                active={this.props.active === 'relics'}
                                href="#relics"
                                onClick={this.onClick}
                                label="Relics"
                            />
                            <HeaderLink
                                active={this.props.active === 'ancients'}
                                href="#ancients"
                                onClick={this.onClick}
                                label="Ancients Relic Tiers"
                            />
                            <HeaderLink
                                active={this.props.active === 'heroes'}
                                href="#heroes"
                                onClick={this.onClick}
                                label="Hero Costs"
                            />
                            <HeaderLink
                                active={this.props.active === 'mercenaries'}
                                href="#mercenaries"
                                onClick={this.onClick}
                                label="Mercenaries"
                            />
                            <HeaderLink
                                href="#"
                                onClick={this.resetState}
                                label="Reset"
                            />
                            <HeaderLink
                                active={this.props.active === 'links'}
                                href="#links"
                                onClick={this.onClick}
                                label="Links"
                            />
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <HeaderLink
                                href={githubReleasesLink}
                                label={`v${appData.version}`}
                            />
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
