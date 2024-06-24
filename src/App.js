import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import About from './components/About';
function App() {
  return (
    <>
    <Navbar title="Aaditya" aboutText ="asdfasdfasd" />
    <div className="container">
      <TextFrom heading="This is New form" subheading="Form is just made for you!"/>
    </div>
    </>
  );
}

export default App;