import { connect } from 'react-redux';

import { getRelics } from '../selectors';

import RelicsTable from '../components/RelicsTable';

const mapStateToProps = state => ({
    relics: state.gameState ? getRelics(state.gameState.items.items) : []
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RelicsTable);
