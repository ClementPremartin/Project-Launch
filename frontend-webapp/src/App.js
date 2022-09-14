import { useState } from "react";
import './App.css';

import Wilder from "./components/Wilder";
import wilders from "./data/wilders";

function App() {

  const [wildersStudent] = useState(wilders);

  return (
    <div>
      <header>
        <div className="container">
            <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
            <h2>Wilders</h2>
        {wildersStudent.map((wilder) => (
          <Wilder
            key={wilder.id}
            firstname={wilder.firstname}
            lastname={wilder.lastname}
            skills={wilder.skill}
            />
        ))}
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
