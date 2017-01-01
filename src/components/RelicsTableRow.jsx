import { allImages as images } from '../css/images';

import { roundNum, getRelicImage } from '../utils';

import RelicTooltip from './RelicTooltip';

const { Component, PropTypes } = React;

export default class RelicsTableRow extends Component {
    constructor() {
        super();

        this.state = {
            showTooltip: false,
        };
    }

    static propTypes = {
        index: PropTypes.number,
        relic: PropTypes.object,
    }

    getAncientCell(relicBonus, key) {
        let cells = null;

        if (relicBonus) {
            cells = <td key={key}>{`${relicBonus.ancient} - ${roundNum(relicBonus.level)}`}</td>;
        } else {
            cells = <td key={key} />;
        }

        return cells;
    }

    showRelicTooltip = () => {
        this.setState({ showTooltip: true });
    }

    hideRelicTooltip = () => {
        this.setState({ showTooltip: false });
    }

    render() {
        const { index, relic } = this.props;

        return (
            <tr>
                <td>{index < 4 ? index + 1 : ''}</td>
                <td className="text-left">
                    <div style={{ position: 'relative' }}>
                        <RelicTooltip
                            visible={this.state.showTooltip}
                            {...relic}
                        />
                        <img
                            className={'relic-image ' + relic.rarity.className}
                            src={getRelicImage(relic.name, relic.type, images.relics)}
                            onMouseOver={this.showRelicTooltip}
                            onMouseOut={this.hideRelicTooltip}
                        />
                        {relic.name}
                    </div>
                </td>
                <td>{roundNum(relic.total)}</td>
                {this.getAncientCell(relic.bonuses[0], 0)}
                {this.getAncientCell(relic.bonuses[1], 1)}
                {this.getAncientCell(relic.bonuses[2], 2)}
                {this.getAncientCell(relic.bonuses[3], 3)}
            </tr>
        );
    }
}
