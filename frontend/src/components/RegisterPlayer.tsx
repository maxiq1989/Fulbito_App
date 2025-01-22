import { useState, ChangeEvent, FormEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Player {
  name: string;
  lastName: string;
  age: string;
  nickname: string;
  skillLevel: string;
}

function RegisterPlayer() {
  const [player, setPlayer] = useState<Player>({
    name: '',
    lastName: '',
    age: '',
    nickname: '',
    skillLevel: ''
  });

  const [players, setPlayers] = useState<Player[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setPlayers([...players, player]);

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
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-header bg-success text-white">
          <h2 className="text-center">
            <i className="fas fa-futbol me-2"></i> Registro de Jugadores
          </h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
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
                  placeholder="Ej: Lionel"
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
                  placeholder="Ej: Messi"
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
                  placeholder="Ej: 35"
                  required
                  min="1"
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
                  placeholder="Ej: La Pulga"
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="skillLevel" className="form-label">Nivel de Habilidad (1-10)</label>
                <input
                  type="number"
                  className="form-control"
                  id="skillLevel"
                  name="skillLevel"
                  value={player.skillLevel}
                  onChange={handleChange}
                  required
                  min="1"
                  max="10"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-success w-100">
              <i className="fas fa-save me-2"></i> Registrar Jugador
            </button>
          </form>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-center text-success">Lista de Jugadores Registrados</h3>
        {players.length > 0 ? (
          <div className="list-group">
            {players.map((p, index) => (
              <div key={index} className="list-group-item">
                <strong>{p.name} {p.lastName}</strong> (Apodo: {p.nickname}) - Nivel: {p.skillLevel}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted">Aún no hay jugadores registrados.</p>
        )}
      </div>
    </div>
  );
}

export default RegisterPlayer;
