import { Route } from 'react-router-dom';

import AllMeetupPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';


const App = () => {
  return <div>
    <Route path='/'>
    <AllMeetupPage />
    </Route>
    <Route path='/new-meetup'>
    <NewMeetupPage />
    </Route>
    <Route path='/favorites'>
    <FavoritesPage />
    </Route>
  </div>;
}

export default App;