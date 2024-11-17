import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Routines from "./routes/routines/routines.component";
import Exercises from "./routes/exercises/exercises.component";
import Profile from "./routes/profile/profile.component";
import Settings from "./routes/settings/settings.component";
import CreateRoutine from "./routes/create-routine/create-routine.component";
import { Theme } from "./utils/css-const.utils";
import StartWorkout from "./routes/start-workout/start-workout.component";

const AppContainer = styled.div`
  display: flex;

  background-color: ${(props) => props.theme.color.bodyBackground};
  color: ${(props) => props.theme.color.textMain};
`;

function App() {
  return (
    <Theme>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="routines" element={<Routines />} />
            <Route path="exercises" element={<Exercises />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="create-routine" element={<CreateRoutine />} />
            <Route path="workout" element={<StartWorkout />} />
          </Route>
        </Routes>
      </AppContainer>
    </Theme>
  );
}

export default App;
