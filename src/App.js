import './App.css';
import SideInput from './layout/SideInput';

function App() {
  const here = () => {
    console.log(document.getElementById('sidea'));
  };

  return (
    <div className='App'>
      <SideInput side='a' keyDown={here()} />
      <SideInput side='b' />
      <SideInput side='c' />
    </div>
  );
}

export default App;
