import { connect } from 'react-redux';

import {
    setDogcogLevel,
    setDogcogRelicsBonusCheckbox,
    setHeroCurrentLevel,
    setHeroTargetLevel
} from '../actions';

import {
    getDogcogLevel,
    getDogcogRelicLevels,
    getHeroCosts,
    isGameStateSet,
    isRelicBonusChecked,
} from '../selectors';

import Heroes from '../components/Heroes';

const mapStateToProps = state => ({
    heroes: getHeroCosts(state),
    isGameStateSet: isGameStateSet(state),
    dogcogLevel: getDogcogLevel(state),
    bonusLevels: getDogcogRelicLevels(state),
    relicsBonusChecked: isRelicBonusChecked(state),
});

const mapDispatchToProps = dispatch => ({
    setDogcogLevel: level => dispatch(setDogcogLevel(level)),
    setRelicsBonusCheckboxValue: checkboxState => dispatch(setDogcogRelicsBonusCheckbox(checkboxState)),
    setHeroCurrentLevel: (hero, value) => dispatch(setHeroCurrentLevel(hero, value)),
    setHeroTargetLevel: (hero, value) => dispatch(setHeroTargetLevel(hero, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);
