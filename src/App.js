import './App.css';
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">

<Weather defaultCity="Tokyo" />

<footer>

<a className="gitLink" href="https://github.com/alinainakita" target="_blank" rel="noreferrer" >Open-source code</a> by
{""} <a className="LinkedInLink" href="https://www.linkedin.com/in/alina-varvarici/" target="_blank" rel="noreferrer" > Alina Varvarici</a>
    </footer>
    </div>
  );
}