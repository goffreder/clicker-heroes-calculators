import HeroesTable from './HeroesTable';
import DogcogBlock from './DogcogBlock';

const Heroes = ({
    heroes,
    relicsBonusChecked,
    dogcogLevel,
    bonusLevels,
    isGameStateSet,
    setHeroCurrentLevel,
    setHeroTargetLevel,
    setDogcogLevel,
    setRelicsBonusCheckboxValue,
}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <HeroesTable
                        heroes={heroes}
                        dogcogLevel={
                            relicsBonusChecked
                                ? Number(dogcogLevel) + Number(bonusLevels)
                                : dogcogLevel
                        }
                        setHeroCurrentLevel={setHeroCurrentLevel}
                        setHeroTargetLevel={setHeroTargetLevel}
                    />
                </div>
                <div className="col-md-4">
                    <DogcogBlock
                        dogcogLevel={dogcogLevel}
                        bonusLevels={bonusLevels}
                        relicsCheckboxEnabled={isGameStateSet}
                        relicsBonusChecked={relicsBonusChecked}
                        setDogcogLevel={setDogcogLevel}
                        setRelicsBonusCheckboxValue={
                            setRelicsBonusCheckboxValue
                        }
                    />
                </div>
            </div>
        </div>
    );
};

const { object, bool, number, func } = React.PropTypes;

Heroes.propTypes = {
    heroes: object,
    relicsBonusChecked: bool,
    dogcogLevel: number,
    bonusLevels: number,
    isGameStateSet: bool,
    setHeroCurrentLevel: func,
    setHeroTargetLevel: func,
    setDogcogLevel: func,
    setRelicsBonusCheckboxValue: func,
};

export default Heroes;
