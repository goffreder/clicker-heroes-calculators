import StyleSwitcher from './StyleSwitcher';
import GameStateInput from './GameStateInput';
import RelicsTable from './RelicsTable';

export default function Relics(props)  {
    return (
        <div className="container">
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
        </div>
    );
}
