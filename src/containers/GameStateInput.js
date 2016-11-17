import { connect } from 'react-redux';

import { loadGameState } from '../actions';
import { parseGameState } from '../selectors';

import GameStateInput from '../components/GameStateInput';

const mapStateToProps = state => ({
    encodedState: state.encodedState
});

const mapDispatchToProps = dispatch => ({
    saveGameState: gameState => dispatch(loadGameState(parseGameState(gameState), gameState))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameStateInput);
