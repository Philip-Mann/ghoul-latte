import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './sectioning/header/header';
import Footer from './sectioning/footer/footer';
import Main from './sectioning/main/main'

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;