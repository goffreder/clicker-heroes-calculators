import { roundNum } from '../utils';

const RelicTooltip = ({ visible, rarity, level, bonuses, name }) => {
    const relicTooltipStyle = {
        position: 'absolute',
        left: 55,
        display: visible ? 'initial' : 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        fontWeight: 'bold',
        border: '5px solid lightgray',
        borderRadius: 5,
        padding: 5,
        fontSize: 12,
        zIndex: 1,
        width: 300,
    };

    const relicNameStyle = {
        fontSize: 14,
        marginBottom: 5,
    };

    return (
        <div style={relicTooltipStyle}>
            <div className={'relic-name ' + rarity.className} style={relicNameStyle}>{name}</div>
            <div>{rarity.label}</div>
            <div style={{ marginBottom: 15 }}>{'Level ' +  level}</div>

            {
                bonuses.map(
                    (b, i) => (
                        <div key={i} style={{ marginBottom: 15 }}>
                            <div>{`+${roundNum(b.level)} Levels to ${b.ancientFullName}`}</div>
                            <div style={{ color: 'grey' }}>{`(${b.tooltip})`}</div>
                        </div>
                    )
                )
            }
        </div>
    );
};

const { bool, object, string, array, number } = React.PropTypes;

RelicTooltip.propTypes = {
    visible: bool,
    rarity: object,
    bonuses: array,
    level: number,
    name: string,
};

export default RelicTooltip;
