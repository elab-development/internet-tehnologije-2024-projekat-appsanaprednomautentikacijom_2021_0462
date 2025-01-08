
import LoginForm from './Components/LoginForm/LoginForm.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.jsx';
import Header from './Components/Header/Header.jsx';
import Comment from './Components/Comment/Comment.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LoginForm/>}/>
        <Route path="home" element={<>
          <NavBar/>
          <Header/>
          <Comment/>
          </>}/>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
