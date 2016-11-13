import { connect } from 'react-redux';

import { setDogcogLevel } from '../actions';

import DogcogBlock from '../components/DogcogBlock';

const mapStateToProps = state => ({
    dogcogLevel: state.heroes.dogcogLevel
});

const mapDispatchToProps = dispatch => ({
    setDogcogLevel: level => dispatch(setDogcogLevel(level))
});

export default connect(mapStateToProps, mapDispatchToProps)(DogcogBlock);
