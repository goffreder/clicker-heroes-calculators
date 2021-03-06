import { connect } from 'react-redux';

import {
    setAncientSouls,
    addOutsiderLevels,
    subOutsiderLevels,
    highlightOutsider,
} from '../actions';

import {
    getOutsiders,
    getoutsiderCallbacks,
    getTotalAncientSouls,
    getSpentAncientSouls,
    getHighlightedOutsider,
} from '../selectors';

import Outsiders from '../components/Outsiders';

const mapStateToProps = state => ({
    outsiders: getOutsiders(state),
    outsiderCallbacks: getoutsiderCallbacks(),
    totalAncientSouls: getTotalAncientSouls(state),
    spentAncientSouls: getSpentAncientSouls(state),
    highlightedOutsider: getHighlightedOutsider(state),
});

const mapDispatchToProps = dispatch => ({
    setAncientSouls: souls => dispatch(setAncientSouls(souls)),
    addOutsiderLevels: (id, levels) => dispatch(addOutsiderLevels(id, levels)),
    subOutsiderLevels: (id, levels) => dispatch(subOutsiderLevels(id, levels)),
    highlightOutsider: id => dispatch(highlightOutsider(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Outsiders);
