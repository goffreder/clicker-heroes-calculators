import { connect } from 'react-redux';

import { loadGameState, setPlayStyle } from '../actions';
import {
    getEncodedState,
    getPlayStyle,
    getRelics,
    getRelicsBonuses,
    parseGameState,
} from '../selectors';

import Relics from '../components/Relics';

const mapStateToProps = state => ({
    playStyle: getPlayStyle(state),
    encodedState: getEncodedState(state),
    relics: getRelics(state),
    bonuses: getRelicsBonuses(state),
});

const mapDispatchToProps = dispatch => ({
    setPlayStyle: style => dispatch(setPlayStyle(style)),
    saveGameState: gameState =>
        dispatch(loadGameState(parseGameState(gameState), gameState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Relics);
