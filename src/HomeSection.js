// import { MainSectionForm } from './Forms.js';
// import { MainSectionGames } from './Games.js';
// import { MainSectionCharts } from './Charts.js';

// MAIN COMPONENTS
// main base
export function MainSection(props) {
    // more code here!
    return (
      <main>
        <div className="flex-container">
          <MainSectionForm inputGames={inputGames} setInputGames={setGames} inputGameName={inputGameName} inputGameDescription={inputGameDescription} handleClickDescription={handleClickDescription} setGameName={setGameName} setGameDescription={setGameDescription} setUser={setUser} user={user}/>
          <MainSectionGames inputGames={inputGames} gameplay={props.gameplay}/>
          <MainSectionCharts inputGameName={inputGameName}/>
        </div>
      </main>
    )
  }