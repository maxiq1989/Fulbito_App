import { useState, ChangeEvent, FormEvent } from 'react';

interface Player {
  name: string;
  lastName: string;
  age: string;
  nickname: string;
  skillLevel: string;
}

interface RegisterPlayerProps {
  players: Player[];
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
}

function RegisterPlayer({ players, setPlayers }: RegisterPlayerProps) {
  const [player, setPlayer] = useState<Player>({
    name: '',
    lastName: '',
    age: '',
    nickname: '',
    skillLevel: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setPlayers([...players, player]); // Actualizamos la lista global de jugadores

    setPlayer({
      name: '',
      lastName: '',
      age: '',
      nickname: '',
      skillLevel: ''
    });

    alert('¡Jugador registrado exitosamente!');
  };

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-header bg-success text-white">
        <h2 className="text-center">
          <i className="fas fa-futbol me-2"></i> Registro de Jugadores
        </h2>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          {/* Formulario de registro */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={player.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={player.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="age" className="form-label">Edad</label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                value={player.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="nickname" className="form-label">Apodo</label>
              <input
                type="text"
                className="form-control"
                id="nickname"
                name="nickname"
                value={player.nickname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="skillLevel" className="form-label">Nivel de Habilidad</label>
              <input
                type="number"
                className="form-control"
                id="skillLevel"
                name="skillLevel"
                value={player.skillLevel}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-success w-100">Registrar Jugador</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPlayer;
