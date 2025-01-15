import { useState, ChangeEvent, FormEvent } from 'react';

function RegisterPlayer() {
  const [player, setPlayer] = useState({
    name: '',
    lastName: '',
    age: '',
    nickname: '',
    skillLevel: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:3001/players', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(player)
      });
      alert('Jugador registrado');
    } catch (error) {
      console.error('Error registrando jugador:', error);
    }
  };

  return (
    <div>
      <h2>Registrar Jugador</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nombre" onChange={handleChange} required />
        <input name="lastName" placeholder="Apellido" onChange={handleChange} required />
        <input name="age" type="number" placeholder="Edad" onChange={handleChange} required />
        <input name="nickname" placeholder="Apodo" onChange={handleChange} required />
        <input name="skillLevel" type="number" placeholder="Nivel de Habilidad (1-10)" onChange={handleChange} required />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegisterPlayer;
