import Section from './components/Section';
import Article from './components/Article';
import Aside from './components/Aside';
import Header from './components/Header';
import Tasks from './components/Tasks';
import User from './components/User';

function App() {
  const name = "Lawrence"
  return (
    <>
    <div className="container">
      <Header title = {1} />
      <h1>Hey There {name}</h1>
      <hr />
      <Tasks />
      <hr />
      <br />
      <div class="cards">
        <User title="Mentor" name="Lawrence Lockhart" status="Unmatched" goals="Help community"/>
        <User title="Mentee" name="Richard Smith" status="Matched" goals="Get job offer"/>
      </div>
      <br />

    </div> 
    </>
  );
}
Header.defaultProps  ={
  title: 'Task Tracker',
}

export default App;