import { connect } from 'react-redux';

import { setPlayStyle, toggleEditMode, setAncientMultiplier } from '../actions';

import Ancients from '../components/Ancients';

const mapStateToProps = state => ({
    playStyle: state.playStyle,
    ancients: Object.keys(state.ancients.tiers).map(id => ({ ...state.ancients.tiers[id], id })),
    editing: state.ancients.editing,
});

const mapDispatchToProps = dispatch => ({
    setPlayStyle: style => dispatch(setPlayStyle(style)),
    toggleEditMode: () => dispatch(toggleEditMode()),
    setAncientMultiplier: (ancientId, style, multiplier) => dispatch(setAncientMultiplier(ancientId, style, multiplier)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ancients);
