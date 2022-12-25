import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetalis from './components/AuthDetalis';

function App() {
  return (
    <div className="App">
      <SignIn/>
      <SignUp/>
      <AuthDetalis/>
    </div>
  );
}

export default App;
