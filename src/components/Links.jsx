const Links = () => {
    const gameLink = 'http://www.clickerheroes.com/';
    const redditLink = 'https://www.reddit.com/r/ClickerHeroes/';
    const wikiaLink = 'http://clickerheroes.wikia.com/';
    const ancientsCalcLink = 'https://graceoflives.github.io/fluffy-garbanzo/';
    const clickerTracker = 'https://clickerheroestracker.azurewebsites.net/';
    // eslint-disable-next-line max-len
    const outsidersCalcLink = 'https://docs.google.com/spreadsheets/d/1m09HoNiLW-7t96gzguG9tU_HHaRrDrtMpAoAuukLB4w/edit#gid=233428405';
    // eslint-disable-next-line max-len
    const regildingChart = 'https://www.reddit.com/r/ClickerHeroes/comments/7dvpi2/hero_gilding_chart_for_clicker_heroes_10e10/';
    const gameEditorLink = 'https://www.itshax.com/Clicker-Heroes/';
    const repoLink = 'https://github.com/goffreder/clicker-heroes-calculators/';

    return (
        <div id="links" className="container">
            <h2>{''}</h2>
            <ul>
                <li>
                    <a href={gameLink} target="_blank">{gameLink}</a>
                    {' (the game)'}
                </li>
                <li>
                    <a href={redditLink} target="_blank">{redditLink}</a>
                    {' (the subreddit)'}
                </li>
                <li>
                    <a href={wikiaLink} target="_blank">{wikiaLink}</a>
                    {' (the wikia)'}
                </li>
                <li>
                    <a href={ancientsCalcLink} target="_blank">{ancientsCalcLink}</a>
                    {' (ancients calculator)'}
                </li>
                <li>
                    <a href={clickerTracker} target="_blank">{clickerTracker}</a>
                    {' (clicker heroes tracker)'}
                </li>
                <li>
                    <a href={outsidersCalcLink} target="_blank">{outsidersCalcLink}</a>
                    {' (outsiders spreadsheet)'}
                </li>
                <li>
                    <a href={regildingChart} target="_blank">{regildingChart}</a>
                    {' (regilding chart)'}
                </li>
                <li>
                    <a href={gameEditorLink} target="_blank">{gameEditorLink}</a>
                    {' (save game editor)'}
                </li>
                <li>
                    <a href={repoLink} target="_blank">{repoLink}</a>
                    {' (this repo)'}
                </li>
            </ul>
        </div>
    );
};

export default Links;
