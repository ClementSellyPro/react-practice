import './App.css';
import { Calendar } from './component/Calendar';
import { Container } from './component/Container';
import { Organisation } from './component/Organisation';

function App() {
  return (
    <div className="App">
      <Container>
        <Calendar />
        <Organisation />
      </Container>
    </div>
  );
}

export default App;
