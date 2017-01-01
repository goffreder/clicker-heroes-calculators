import { connect } from 'react-redux';

import { setPlayStyle, toggleEditMode, setAncientCoefficient } from '../actions';

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
    setAncientCoefficient: (ancientId, style, coefficient) => {
        dispatch(setAncientCoefficient(ancientId, style, coefficient));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Ancients);
