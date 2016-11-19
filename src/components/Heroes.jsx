import HeroesTable from './HeroesTable';
import DogcogBlock from './DogcogBlock';

export default function Heroes(props)  {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <HeroesTable
                        heroes={props.heroes}
                        dogcogLevel={
                            props.relicsBonusChecked
                                ? +props.dogcogLevel + +props.bonusLevels
                                : props.dogcogLevel
                        }
                        setHeroCurrentLevel={props.setHeroCurrentLevel}
                        setHeroTargetLevel={props.setHeroTargetLevel}
                    />
                </div>
                <div className="col-md-4">
                    <DogcogBlock
                        dogcogLevel={props.dogcogLevel}
                        bonusLevels={props.bonusLevels}
                        relicsCheckboxEnabled={props.isGameStateSet}
                        relicsBonusChecked={props.relicsBonusChecked}
                        setDogcogLevel={props.setDogcogLevel}
                        setRelicsBonusCheckboxValue={props.setRelicsBonusCheckboxValue}
                    />
                </div>
            </div>
        </div>
    );
}
