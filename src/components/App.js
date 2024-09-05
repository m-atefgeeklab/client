import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { fetchUser } from '../actions/index';
import Header from './Header/Header';
import Landing from './Landing/Landing';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch the user when the component mounts
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
