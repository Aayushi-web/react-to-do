import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header'
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
import TodoItem from './MyComponents/TodoItem'

function App() {
  return (
    <>
    <Header title="MyToDo"/>
    <Todos/>
    <TodoItem/>
    <Footer/>
  </>
  );
}

export default App;
