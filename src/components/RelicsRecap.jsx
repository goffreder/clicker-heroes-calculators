const RelicsRecap = ({ bonuses }) => {
    if (bonuses.length) {
        return (
            <div className="col-md-3">
                <table id="relics-recap" className="table table-bordered table-condensed">
                    <thead>
                        <tr><th colSpan="2">{'Bonus Recap'}</th></tr>
                    </thead>
                    <tbody>
                        {
                            bonuses.sort((a, b) => {
                                const coeffDiff = b.ancientCoefficient - a.ancientCoefficient;
                                const levelDiff = b.level - a.level;

                                return coeffDiff || levelDiff;
                            }).map(b => (
                                <tr key={b.id}>
                                    <td>{b.ancient}</td>
                                    <td>{Math.floor(b.level)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }

    return null;
};

RelicsRecap.propTypes = {
    bonuses: React.PropTypes.array,
};

export default RelicsRecap;
