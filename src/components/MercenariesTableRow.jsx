import { allImages as images } from '../css/images';
import { rarities, mercenaryQuests } from '../constants';
const { mercenaries } = images;

const getTimeToDie = (s) => {
    const hours = Math.floor(s / 3600);
    const minutes = Math.floor((s - (hours * 3600)) / 60);
    const seconds = s - (hours * 3600) - (minutes * 60);
    return `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
};

const getTimeToLvlup = (val) => {
    return getTimeToDie(Math.ceil(24 * 60 * 60 * (1 - val)));
};


const getRewardType = (merc, rarity) => {
    const stat = merc.statId;
    if (stat === 5) {
        return `+${merc.bonusLives} ${mercenaryQuests.stat[stat]}`;
    }
    return `+${mercenaryQuests.rewards[rarity]}% ${mercenaryQuests.stat[stat]}`;
};

const getReward = (merc, rarity) => {
    const type = merc.lastQuestRewardType;
    const lvl = merc.level;
    if (type <= 1) {
        return '-';
    }
    const bonus = mercenaryQuests.rewards[rarity];
    const base = mercenaryQuests.typeBaseReward[type] || 0;
    const label = mercenaryQuests.type[type] || 'NULL';
    const qty = (100 + bonus ) / 100 * lvl * base;
    return `${Math.floor(qty)}-${Math.ceil(qty)} ${label}`;
};

const getQuest = (type) => {
    if (type === 0) {
        return 'Not on a quest';
    }
    return mercenaryQuests.type[type];
};

const getExperienceBar = (val) => {
    return Math.floor(Math.floor(val * 10000)) / 100;
};

const MercenariesTableRow = ({index, merc}) => {
    const rarity = rarities[merc.rarity];
    return (
        <tr>
            <td>{index}</td>
            <td>
                <img src={mercenaries[`merc${merc.assetId}`]} width="64"/>
            </td>
            <td>
                <strong>{merc.name}</strong>
                <br/>
                <em>{merc.phrase1 !== '' ? merc.phrase1 : merc.phrase2}</em>
                <br/>
                <small>{getRewardType(merc, rarity.label)}</small>
            </td>
            <td>
                {merc.level}
            </td>
            <td>
                <strong className={`relic-name ${rarity.className}`}>
                    {rarity.label}
                </strong>
            </td>
            <td>
                <div>{`${getExperienceBar(merc.experience)}%`}</div>
                <div className={'expBar'}>
                    <div
                        className={'completed'}
                        style={{
                            width: `${getExperienceBar(merc.experience)}%`,
                        }}
                    />
                </div>
            </td>
            <td>{getQuest(merc.lastQuestRewardType)}</td>
            <td>{getReward(merc, rarity.label)}</td>
            <td>{getTimeToLvlup(merc.experience)}</td>
            <td>{getTimeToDie(merc.timeToDie)}</td>
        </tr>
    );
};

const { number, object } = React.PropTypes;
MercenariesTableRow.propTypes = {
    index: number,
    merc: object,
};

export default MercenariesTableRow;
