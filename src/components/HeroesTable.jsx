import HeroesTableRow from './HeroesTableRow';

import { heroes } from '../constants';

import { getHeroCost } from '../utils';

const HeroesTable = props => {
    const fullHeroes = deepAssign({}, heroes, props.heroes);

    return (
        <table id="heroes-table" className="table table-hover">
            <thead>
                <tr>
                    <th className="text-right">{'Hero'}</th>
                    <th className="text-left">{'Base Cost'}</th>
                    <th className="text-center">{'Current Level'}</th>
                    <th className="text-center">{'Target Level'}</th>
                    <th className="text-center">{'Total Cost'}</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(fullHeroes)
                    .sort(
                        (a, b) =>
                            fullHeroes[b].baseCost - fullHeroes[a].baseCost,
                    )
                    .map((h, k) => (
                        <HeroesTableRow
                            hero={Object.assign({}, fullHeroes[h], {
                                total: getHeroCost(
                                    fullHeroes[h],
                                    props.dogcogLevel,
                                ),
                            })}
                            id={h}
                            key={k}
                            setHeroCurrentLevel={props.setHeroCurrentLevel}
                            setHeroTargetLevel={props.setHeroTargetLevel}
                        />
                    ))}
            </tbody>
        </table>
    );
};

HeroesTable.propTypes = {
    heroes: React.PropTypes.object,
    setHeroCurrentLevel: React.PropTypes.func,
    setHeroTargetLevel: React.PropTypes.func,
};

export default HeroesTable;
