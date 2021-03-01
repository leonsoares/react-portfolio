import './App.css';
import WelcomeSection from "./components/sectionOne/welcomeSection/WelcomeSection.component"
import Skills from "./components/sectionTwo/skill-section/Skills.component"

function App() {
  return (
    <div className="App">
      <WelcomeSection/>
      <Skills/>
    </div>
  );
}

export default App;
