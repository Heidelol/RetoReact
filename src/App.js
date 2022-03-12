import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import Count from './components/count'

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <Card 
        img ='https://th.bing.com/th/id/OIP.6HY1kWt52qwYAv-Q14tuvQHaHa?pid=ImgDet&rs=1'
        producto="Playera Negra"
        precio="$12.99"
        tag="#MenClothing"
        > 
        </Card>
        <Count />
        <Card 
        img="https://th.bing.com/th/id/OIP.hziUmFUTbAgFI7ynEy1qMwHaHa?pid=ImgDet&rs=1"
        producto="Playera Azul"
        precio="$14.99"
        tag="#MenClothing"
        > 
        
        </Card>
      </main>
    </div>
  );
}

export default App;
