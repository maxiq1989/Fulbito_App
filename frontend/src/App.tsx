import { useState } from 'react';
import RegisterPlayer from './components/RegisterPlayer';
import TeamManager from './components/TeamList';

interface Player {
  name: string;
  lastName: string;
  age: string;
  nickname: string;
  skillLevel: string;
}

function App() {
  const [players, setPlayers] = useState<Player[]>([]); // Estado global para jugadores

  return (
    <div className="container mt-4">
      <h1 className="text-center text-success">Fulbito App</h1>
      {/* Pasamos las props correctamente */}
      <RegisterPlayer players={players} setPlayers={setPlayers} />
      <TeamManager players={players} />
    </div>
  );
}

export default App;
