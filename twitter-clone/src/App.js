
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import  Widgets from './Widgets'
//import {db} from './firebase'
function App() {
  // const aj= db();
  // console.log(aj);
  return (
    //BEM
    <div className="app">
      
      {/* sidebar */}
      <Sidebar />

      {/* feed */}
      <Feed/>

      {/* widgets */}
      <Widgets />
    </div>
  );
}

export default App;
