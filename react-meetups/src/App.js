import { Route } from 'react-router-dom';

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <div>
        <Route path="/" Component={AllMeetupsPage}/>
        <Route path="/new-meetup" Component={NewMeetupPage}/>
        <Route path="/favorites" Component={FavoritesPage} />
    </div>
  );
}
 
export default App;
