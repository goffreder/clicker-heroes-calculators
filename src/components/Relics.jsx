import StyleSwitcher from './StyleSwitcher';
import GameStateInput from './GameStateInput';
import RelicsTable from './RelicsTable';
import RelicsRecap from './RelicsRecap';

export default function Relics(props)  {
    return (
        <div className="container-fluid">
            <StyleSwitcher
                playStyle={props.playStyle}
                setPlayStyle={props.setPlayStyle}
            />
            <GameStateInput
                encodedState={props.encodedState}
                saveGameState={props.saveGameState}
            />
            <RelicsTable
                relics={props.relics}
            />
            <RelicsRecap
                bonuses={props.bonuses}
            />
        </div>
    );
}
