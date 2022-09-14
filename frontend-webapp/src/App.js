import { useState } from "react";
import './App.css';

import Wilder from "./components/Wilder";
import wilders from "./data/wilders";

function App() {

  const [wildersStudent] = useState(wilders);
  console.log(wildersStudent);

  return (
    <div>
      <header>
        <div className="container">
            <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
            <h2>Wilders</h2>
            <section className="card-row">
        {wildersStudent.map((wilder) => (
          <Wilder
            key={wilder.id}
            firstname={wilder.firstname}
            lastname={wilder.lastname}
            skills={wilder.skills}
            description={wilder.description}
            />
        ))}
        </section>
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
