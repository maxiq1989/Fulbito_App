import { useEffect, useState } from 'react';

interface Team {
  id: number;
  name: string;
  players: string[];
}

function TeamList() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/teams')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error obteniendo equipos:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Equipos</h2>
      <ul>
        {teams.map(team => (
          <li key={team.id}>
            {team.name} - {team.players.length} jugadores
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamList;
