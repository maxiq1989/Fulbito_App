import { useState } from 'react';
import RegisterPlayer from './components/RegisterPlayer';
import TeamManager from './components/TeamManager';

interface Player {
  name: string;
  lastName: string;
  age: string;
  nickname: string;
  skillLevel: string;
}

function App() {
  const [players, setPlayers] = useState<Player[]>([]); // ✅ Estado global de jugadores

  return (
    <div className="container mt-4">
      <h1 className="text-center text-success">Fulbito App</h1>

      {/* ✅ Pasamos `players` a ambos componentes para que compartan datos */}
      <RegisterPlayer players={players} setPlayers={setPlayers} />
      <TeamManager players={players} />
    </div>
  );
}

export default App;
