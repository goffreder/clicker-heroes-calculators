import { connect } from 'react-redux';

import { loadGameState } from '../actions';
import { parseGameState } from '../selectors';

import GameStateInput from '../components/GameStateInput';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    saveGameState: gameState => dispatch(loadGameState(parseGameState(gameState)))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameStateInput);
