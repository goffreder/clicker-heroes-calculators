import { connect } from 'react-redux';

import { getActiveTab } from '../selectors';

import Main from '../components/Main';

const mapStateToProps = state => ({
    active: getActiveTab(state),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
