import { connect } from 'react-redux';

import { loadTab } from '../actions';

import { getActiveTab } from '../selectors';

import Header from '../components/Header';

const mapStateToProps = state => ({
    active: getActiveTab(state),
});

const mapDispatchToProps = dispatch => ({
    loadTab: tab => dispatch(loadTab(tab)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
