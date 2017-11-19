import MercenariesTable from './MercenariesTable';

const Mercenaries = ({ mercenaries }) => {
    return (
        <div className="container-fluid">
            <MercenariesTable mercenaries={mercenaries}/>
        </div>
    );
};

const { array } = React.PropTypes;

Mercenaries.propTypes = {
    mercenaries: array,
};

export default Mercenaries;
