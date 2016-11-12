import { connect } from 'react-redux';

import { loadTab } from '../actions';

import Header from '../components/Header';

const mapStateToProps = state => ({
    active: state.active
});

const mapDispatchToProps = dispatch => ({
    onClick: tab => dispatch(loadTab(tab))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
