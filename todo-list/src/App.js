// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header'
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
import  {TodoItem} from './MyComponents/TodoItem'

function App() {
 let todos= [
{sno:1,
title:"Go to the market",
desc:"you go to the market to purchased vegetable"},
{sno:1,
  title:"Go to the mall",
  desc:"you go to the market to purchased vegetable"},
  {sno:1,
    title:"Go to the College",
    desc:"you go to the market to purchased vegetable"},
    {sno:1,
      title:"Go to the ghat",
      desc:"you go to the market to purchased vegetable"}
  ]
  return (
    <>
    <Header title="MyToDo list " searchBar= {false}/>
    <Todos/>
    {/* <TodoItem/> */}
    <Footer/>
  </>
  );
}

export default App;
