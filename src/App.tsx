

import Action from './components/Action';
import Article from './components/Article';
import Inventory from './components/Inventory';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Statistic from './components/Statistic';

function App() {

  return (
    <>
      <div className="h-screen flex">
        <Menu className="w-1/5 flex flex-col items-center"/>
        <div className="w-2/3 ml-2 flex flex-col">
          <Navbar className="h-24" />
          <div className="h-full mt-2 flex flex-col gap-2">
             <div className="h-1/2 flex gap-2">
                <Statistic />
                <Inventory />
              </div>
              <div className="h-1/2 flex gap-2">
               <Article />
              <Action /> 
             </div>
            
           </div>   
        </div>
     
      </div>
     
    </>
  )
}

export default App
