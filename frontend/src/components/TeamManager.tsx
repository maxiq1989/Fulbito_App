import { useState } from 'react';

interface Player {
  name: string;
  lastName: string;
  age: string;
  nickname: string;
  skillLevel: string;
}

interface Team {
  name: string;
  players: Player[];
}

interface TeamManagerProps {
  players: Player[]; // Prop que pasa la lista de jugadores desde App.tsx
}

function TeamManager({ players }: TeamManagerProps) {
  const [teams, setTeams] = useState<Team[]>([]);
  const [teamName, setTeamName] = useState<string>('');
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);

  const handleCreateTeam = () => {
    if (teamName.trim() === '' || selectedPlayers.length === 0) {
      alert('Debes ingresar un nombre y seleccionar jugadores.');
      return;
    }

    const newTeam: Team = { name: teamName, players: selectedPlayers };
    setTeams([...teams, newTeam]);
    setTeamName('');
    setSelectedPlayers([]);
  };

  const togglePlayerSelection = (player: Player) => {
    if (selectedPlayers.includes(player)) {
      setSelectedPlayers(selectedPlayers.filter((p) => p !== player));
    } else if (selectedPlayers.length < 5) {
      setSelectedPlayers([...selectedPlayers, player]);
    } else {
      alert('Un equipo no puede tener más de 5 jugadores.');
    }
  };

  return (
    <div className="mt-5">
      <h3>Gestión de Equipos</h3>
      <input
        type="text"
        placeholder="Nombre del equipo"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <ul>
        {players.map((player, index) => (
          <li
            key={index}
            onClick={() => togglePlayerSelection(player)}
            style={{
              cursor: 'pointer',
              backgroundColor: selectedPlayers.includes(player) ? 'lightgreen' : 'transparent',
            }}
          >
            {player.name} {player.lastName}
          </li>
        ))}
      </ul>
      <button onClick={handleCreateTeam}>Crear Equipo</button>
      <h3>Equipos Creados</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre del Equipo</th>
            <th>Jugadores</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{team.name}</td>
              <td>
                <ul>
                  {team.players.map((player, idx) => (
                    <li key={idx}>{player.name} {player.lastName}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeamManager;
