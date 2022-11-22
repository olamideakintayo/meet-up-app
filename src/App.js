import { Routes, Route } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';

const App = () => {
  return (
    <div>
     <Routes>
   
    <Route path='/' element={<AllMeetupsPage />}/>
    <Route path='/' element={<NewMeetupPage />}/>
    <Route path='/' element={<FavoritesPage />}/>

    </Routes>
    </div>
  );
}

export default App;