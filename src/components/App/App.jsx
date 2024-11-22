import { Routes, Route } from "react-router-dom";

import Navigation from "../../routes/navigation/navigation.component";
import Home from "../../routes/home/home.component";
import Routines from "../../routes/routines/routines.component";
import Exercises from "../../routes/exercises/exercises.component";
import Profile from "../../routes/profile/profile.component";
import Settings from "../../routes/settings/settings.component";
import CreateRoutine from "../../routes/create-routine/create-routine.component";
import { Theme } from "../../utils/theme";
import StartWorkout from "../../routes/start-workout/start-workout.component";
import { AppContainer } from "./App.styles";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faPen,
  faDumbbell,
  faTrash,
  faUser,
  faClipboard,
  faGear,
  faHouse,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { RoutinesProvider } from "../../contexts/routines.context";

library.add(faDumbbell);
library.add(faPen);
library.add(faTrash);
library.add(faUser);
library.add(faClipboard);
library.add(faGear);
library.add(faHouse);
library.add(faMagnifyingGlass);

const App = () => {
  return (
    <Theme>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="routines" element={<RoutinesProvider />}>
              <Route index element={<Routines />} />
              <Route path="create-routine" element={<CreateRoutine />} />
              <Route path="start-workout" element={<StartWorkout />} />
            </Route>
            <Route path="exercises" element={<Exercises />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </AppContainer>
    </Theme>
  );
};

export default App;
