import HeroesTable from '../containers/HeroesTable';
import DogcogBlock from '../containers/DogcogBlock';

export default function Heroes()  {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <HeroesTable />
                </div>
                <div className="col-md-4">
                    <DogcogBlock />
                </div>
            </div>
        </div>
    );
}
