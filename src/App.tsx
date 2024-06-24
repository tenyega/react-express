

import Action from './components/Action';
import Article from './components/Article';
import Inventory from './components/Inventory';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Statistic from './components/Statistic';

function App() {

  return (
    <>
      <div className='vh-100 flex '>
        <Menu className='w-1/3 pr-2'/>
        <div className=' w-2/3 flex flex-col gap-5'>
          <Navbar />
          <Statistic />
          <Inventory />
    
      <Article />
      <Action />
        
        </div>
     
      </div>
     
    </>
  )
}

export default App
