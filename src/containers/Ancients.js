import { connect } from 'react-redux';

import { setPlayStyle } from '../actions';

import Ancients from '../components/Ancients';

const mapStateToProps = state => ({
    playStyle: state.playStyle,
});

const mapDispatchToProps = dispatch => ({
    setPlayStyle: style => dispatch(setPlayStyle(style)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ancients);
