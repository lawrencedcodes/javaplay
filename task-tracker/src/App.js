import Section from './components/Section'
import Article from './components/Article'
import Aside from './components/Aside'
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks'

function App() {
  const name = "Lawrence"
  return (
    <>
    <div className="container">
      <Header title = {1} />
      <h1>Hey There {name}</h1>
      <Tasks />
      <Footer />
    </div> 
    </>
  );
}
Header.defaultProps  ={
  title: 'Task Tracker',
}

export default App;