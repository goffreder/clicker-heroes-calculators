import { connect } from 'react-redux';

import {
    getMercenaries,
} from '../selectors';

import Mercenaries from '../components/Mercenaries';

const mapStateToProps = state => ({
    mercenaries: getMercenaries(state),
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Mercenaries);
