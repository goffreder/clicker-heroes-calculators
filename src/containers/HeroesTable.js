import { connect } from 'react-redux';

import HeroesTable from '../components/HeroesTable';

const mapStateToProps = state => ({
    heroes: state.heroes.costs,
    dogcogLevel: state.heroes.dogcogLevel
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HeroesTable);
