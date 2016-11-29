import { connect } from 'react-redux';

import { loadGameState, setPlayStyle } from '../actions';
import { parseGameState, getRelics } from '../selectors';

import Relics from '../components/Relics';

const mapStateToProps = state => ({
    playStyle: state.playStyle,
    encodedState: state.encodedState,
    relics: state.gameState ? getRelics(state.gameState.items.items, state.playStyle, state.ancients.tiers) : []
});

const mapDispatchToProps = dispatch => ({
    setPlayStyle: style => dispatch(setPlayStyle(style)),
    saveGameState: gameState => dispatch(loadGameState(parseGameState(gameState), gameState))
});

export default connect(mapStateToProps, mapDispatchToProps)(Relics);
