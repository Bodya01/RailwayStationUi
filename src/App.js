import './App.css';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../src/components/SharedLayout/SharedLayout.jsx'
import Home from '../src/pages/Home/Home.jsx'
import Help from './pages/Help/Help';
import TrainSchedule from './pages/schedule/TrainSchedule';
import SignIn from './pages/Login/Login';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<SignIn />} />
        <Route path="schedule" element={<TrainSchedule />} />
        <Route path="ride/:id" element={<TrainSchedule />} /> 
          <Route path="wagons" element={<TrainSchedule />} /> 
          <Route path="wagons/:id" element={<TrainSchedule />} /> 
            <Route path="seats" element={<TrainSchedule />} /> 
        <Route path="help" element={<Help />} />
        <Route path="cabinet" element={<Help />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
