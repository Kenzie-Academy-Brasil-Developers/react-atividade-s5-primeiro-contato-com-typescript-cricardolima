import './App.css';
import Input from './components/input';
import Cards from './components/cards';
import { useState } from 'react';

interface User {
  name:string;
  age:number;
  hobby:string;
}

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [hobby, setHobby] = useState("");

  const [usersList, setUsersList] = useState<User[]>([]);

  const handleSubmit = (name: string, age: number, hobby: string) => {
    const user = {name, age, hobby};
    setUsersList([...usersList, user])
  }

  return (
    <div className="App">
      <header className="App-header">
        <Input 
          placeholder="Nome"
          label="Insira o nome"
          onChange={(e) => setName(e.target.value)}
        />
        <Input 
          placeholder="Idade"
          label="Insira a idade"
          onChange={(e) => setAge(Number((e.target.value)))}
        />
        <Input 
          placeholder="Hobby"
          label="Insira um hobby"
          onChange={(e) => setHobby(e.target.value)}
        />
        <button onClick={() => handleSubmit(name, age, hobby)}>Enviar</button>
        <div>
          {usersList.map(users => (
            <Cards 
              key={users.name}
              name={users.name}
              age={users.age}
              hobby={users.hobby}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
