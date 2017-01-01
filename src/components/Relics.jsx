import StyleSwitcher from './StyleSwitcher';
import GameStateInput from './GameStateInput';
import RelicsTable from './RelicsTable';
import RelicsRecap from './RelicsRecap';

const Relics = ({ playStyle, setPlayStyle, encodedState, saveGameState, relics, bonuses }) => {
    return (
        <div className="container-fluid">
            <StyleSwitcher
                playStyle={playStyle}
                setPlayStyle={setPlayStyle}
            />
            <GameStateInput
                encodedState={encodedState}
                saveGameState={saveGameState}
            />
            <RelicsTable
                relics={relics}
            />
            <RelicsRecap
                bonuses={bonuses}
            />
        </div>
    );
};

const { string, func, array } = React.PropTypes;

Relics.propTypes = {
    playStyle: string,
    setPlayStyle: func,
    encodedState: string,
    saveGameState: func,
    relics: array,
    bonuses: array,
};

export default Relics;
