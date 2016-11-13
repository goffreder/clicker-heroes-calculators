import images from '../css/images';

function roundNum(num) {
    return parseFloat(num).toFixed(2);
}

function getRelicImage(name, type, images) {
    switch (type) {
        case 'sword':
            switch (true) {
                case name.match('Azurewrath') !== null:
                    return images.swords.azurewrath;
                case name.match('Rusty Sword') !== null:
                    return images.swords.rustySword;
                case name.match('Onslaught') !== null:
                    return images.swords.onslaught;
                case name.match('Crimson Edge') !== null:
                    return images.swords.crimsonEdge;
                case name.match('Scimitar') !== null:
                    return images.swords.scimitar;
                case name.match('Master Blade') !== null:
                    return images.swords.masterBlade;
                case name.match('Cloud Edge') !== null:
                    return images.swords.cloudEdge;
                case name.match('Runeblade') !== null:
                    return images.swords.runeblade;
                case name.match('Needler') !== null:
                    return images.swords.needler;
                case name.match('Night Piercer') !== null:
                    return images.swords.nightPiercer;
                case name.match('Gladius') !== null:
                    return images.swords.gladius;
                case name.match('Broadsword') !== null:
                    return images.swords.broadsword;
                case name.match('Mantastyle') !== null:
                    return images.swords.mantastyle;
            }
            break;
        case 'helm':
            switch (true) {
                case name.match('Spartan Guard') !== null:
                    return images.helms.spartanGuard;
                case name.match('Gladiator Guard') !== null:
                    return images.helms.gladiatorGuard;
                case name.match('Wanderer\'s Shade') !== null:
                    return images.helms.wanderersShade;
                case name.match('Praetor Guard') !== null:
                    return images.helms.praetorGuard;
                case name.match('Royal Cover') !== null:
                    return images.helms.royalCover;
                case name.match('Onslaught Helmet') !== null:
                    return images.helms.onslaughtHelmet;
                case name.match('Beast Lid') !== null:
                    return images.helms.beastLid;
                case name.match('Crimson Guard') !== null:
                    return images.helms.crimsonGuard;
                case name.match('Arcane Protector') !== null:
                    return images.helms.arcaneProtector;
                case name.match('Red Keeper') !== null:
                    return images.helms.redKeeper;
                case name.match('Celestial Gate') !== null:
                    return images.helms.celestialGate;
                case name.match('Ronin\'s Shade') !== null:
                    return images.helms.roninsShade;
                case name.match('Tundra Topper') !== null:
                    return images.helms.tundraTopper;
            }
            break;
        case 'gloves':
            switch (true) {
                case name.match('Ranger Gloves') !== null:
                    return images.gloves.rangerGloves;
                case name.match('Arctic Wraps') !== null:
                    return images.gloves.arcticWraps;
                case name.match('Handwraps') !== null:
                    return images.gloves.handwraps;
                case name.match('Barkholds') !== null:
                    return images.gloves.barkholds;
                case name.match('Bear Paws') !== null:
                    return images.gloves.bearPaws;
                case name.match('Fire Grips') !== null:
                    return images.gloves.fireGrips;
                case name.match('Unknown') !== null:
                    return images.gloves.unknown;
                case name.match('Celestial Command') !== null:
                    return images.gloves.celestialCommand;
            }
            break;
        case 'amulet':
            switch (true) {
                case name.match('Spirit Beads') !== null:
                    return images.amulets.spiritBeads;
                case name.match('Ram Spirit') !== null:
                    return images.amulets.ramSpirit;
                case name.match('Fluorite Necklace') !== null:
                    return images.amulets.fluoriteNecklace;
                case name.match('Jade Pendant') !== null:
                    return images.amulets.jadePendant;
                case name.match('Copper Sun') !== null:
                    return images.amulets.copperSun;
                case name.match('Cloudstone Necklace') !== null:
                    return images.amulets.cloudstoneNecklace;
                case name.match('Sinhalite') !== null:
                    return images.amulets.sinhalite;
                case name.match('Sharktoof') !== null:
                    return images.amulets.sharktoof;
                case name.match('Giant\'s End') !== null:
                    return images.amulets.giantsEnd;
                case name.match('Galaxy Orb') !== null:
                    return images.amulets.galaxyOrb;
                case name.match('Furry Touch') !== null:
                    return images.amulets.furryTouch;
                case name.match('Confusing Magnet') !== null:
                    return images.amulets.confusingMagnet;
                case name.match('Clay Emblem') !== null:
                    return images.amulets.clayEmblem;
            }
            break;
        case 'ring':
            switch (true) {
                case name.match('Copper Band') !== null:
                    return images.rings.copperBand;
                case name.match('Garnet Ring') !== null:
                    return images.rings.garnetRing;
                case name.match('Jade Band') !== null:
                    return images.rings.jadeBand;
                case name.match('Copper Mark') !== null:
                    return images.rings.copperMark;
                case name.match('Frog Faction') !== null:
                    return images.rings.frogFaction;
                case name.match('Violet Hoop') !== null:
                    return images.rings.violetHoop;
                case name.match('Skull Brim') !== null:
                    return images.rings.skullBrim;
                case name.match('Golden Onyx') !== null:
                    return images.rings.goldenOnyx;
                case name.match('Galaxy Loop') !== null:
                    return images.rings.galaxyLoop;
                case name.match('Silver Azurite') !== null:
                    return images.rings.silverAzurite;
                case name.match('Golden Emerald') !== null:
                    return images.rings.goldenEmerald;
                case name.match('Golden Ruby') !== null:
                    return images.rings.goldenRuby;
                case name.match('Verdant Surge') !== null:
                    return images.rings.verdantSurge;
            }
            break;
    }

    return images.ooze;
}

export default function RelicsTableRow(props) {
    return (
        <tr>
            <td>{props.index < 4 ? props.index + 1 : ''}</td>
            <td className="text-left">
                <img
                    className="relic-image"
                    style={{ backgroundColor: props.relic.rarity.color }}
                    src={getRelicImage(props.relic.name, props.relic.type, images.relics)}
                />
                {props.relic.name}
            </td>
            <td style={{
                color: props.relic.rarity.color,
                fontWeight: 'bold'
            }}>{props.relic.rarity.label}</td>
            <td>{props.relic.level}</td>
            <td>{roundNum(props.relic.total)}</td>
            <td>{props.relic.bonuses[0].ancient}</td>
            <td>{roundNum(props.relic.bonuses[0].level)}</td>
            <td>{props.relic.bonuses[1] ? props.relic.bonuses[1].ancient : ''}</td>
            <td>{props.relic.bonuses[1] ? roundNum(props.relic.bonuses[1].level) : ''}</td>
            <td>{props.relic.bonuses[2] ? props.relic.bonuses[2].ancient : ''}</td>
            <td>{props.relic.bonuses[2] ? roundNum(props.relic.bonuses[2].level) : ''}</td>
            <td>{props.relic.bonuses[3] ? props.relic.bonuses[3].ancient : ''}</td>
            <td>{props.relic.bonuses[3] ? roundNum(props.relic.bonuses[3].level) : ''}</td>
        </tr>
    );
}
