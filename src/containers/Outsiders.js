import { connect } from 'react-redux';

import { setAncientSouls, addOutsiderLevel, subOutsiderLevel } from '../actions';

import {
    getOutsiders,
    getoutsiderCallbacks,
    getTotalAncientSouls,
    getSpentAncientSouls,
} from '../selectors';

import Outsiders from '../components/Outsiders';

const mapStateToProps = state => ({
    outsiders: getOutsiders(state),
    outsiderCallbacks: getoutsiderCallbacks(),
    totalAncientSouls: getTotalAncientSouls(state),
    spentAncientSouls: getSpentAncientSouls(state),
});

const mapDispatchToProps = dispatch => ({
    setAncientSouls: souls => dispatch(setAncientSouls(souls)),
    addOutsiderLevel: id => dispatch(addOutsiderLevel(id)),
    subOutsiderLevel: id => dispatch(subOutsiderLevel(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Outsiders);
