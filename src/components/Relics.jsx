import GameStateInput from '../containers/GameStateInput';
import RelicsTable from '../containers/RelicsTable';

export default function Relics(props)  {
    return (
        <div className="container">
            <GameStateInput />
            <RelicsTable />
        </div>
    );
}
