import GameStateInput from '../containers/GameStateInput';
import RelicsTable from '../containers/RelicsTable';

export default function Home(props)  {
    return (
        <div>
            <GameStateInput />
            <RelicsTable />
        </div>
    );
}
