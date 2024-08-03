import logo from './logo.svg';
import './App.css';
import Tag from './component/Tag';
import Random from './component/Random';
import Spinner from './component/Spinner';


function App() {
  return (
    <div className='flex flex-col items-center w-full h-screen overflow-x-hidden background'>
     <h1 className='bg-white rounded-lg  w-11/12 text-center mt-[40px]
       text-4xl font-bold'>RANDOM GIFS</h1>
     <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
      <Random></Random>
      <Tag></Tag>
     </div>

    </div>
  );
}

export default App;
