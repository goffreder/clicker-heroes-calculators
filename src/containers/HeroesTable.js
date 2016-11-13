import { connect } from 'react-redux';

import { setHeroCurrentLevel, setHeroTargetLevel } from '../actions';

import HeroesTable from '../components/HeroesTable';

const mapStateToProps = state => ({
    heroes: state.heroes.costs,
    dogcogLevel: state.heroes.dogcogLevel
});

const mapDispatchToProps = dispatch => ({
    setHeroCurrentLevel: (hero, value) => dispatch(setHeroCurrentLevel(hero, value)),
    setHeroTargetLevel: (hero, value) => dispatch(setHeroTargetLevel(hero, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroesTable);
