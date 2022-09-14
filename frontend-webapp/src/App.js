import Wilder from "./components/Wilder";
import './App.css';
import { useState } from "react";

function App() {

  const [nameArr] = useState(["Jeanjean Bon", "Jane Doe", "Manu triment", "Baby Bliothèque"]);
  const [skills] = useState(["JS", "Java", "PHP", "Ruby", "HTML"])

  return (
    <div>
      <header>
        <div className="container">
            <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
            <h2>Wilders</h2>
        {nameArr.map((name) => (
          <Wilder name={name} skills={skills} />
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
