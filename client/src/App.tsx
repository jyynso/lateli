import './index.css'
import Navigation from './components/Navigation';

function App() {
  return (
    <div className='p-7  bg-amber-50 h-screen'>
      <Navigation />
      <div className='flex justify-center'>
        <div className='text-center'>
          <h1 className='font-bold text-9xl'>wow</h1>
          <p className='font-semibold'>wowzers</p>
        </div>
      </div>
    </div>
  );
}

export default App
