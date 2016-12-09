import { connect } from 'react-redux';

import { setPlayStyle, toggleEditMode, setAncientMultiplier } from '../actions';

import {
    getAncients,
    getPlayStyle,
    isEditing,
} from '../selectors';

import Ancients from '../components/Ancients';

const mapStateToProps = state => ({
    playStyle: getPlayStyle(state),
    ancients: getAncients(state),
    editing: isEditing(state),
});

const mapDispatchToProps = dispatch => ({
    setPlayStyle: style => dispatch(setPlayStyle(style)),
    toggleEditMode: () => dispatch(toggleEditMode()),
    setAncientMultiplier: (ancientId, style, multiplier) => dispatch(setAncientMultiplier(ancientId, style, multiplier)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ancients);
