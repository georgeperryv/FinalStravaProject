import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ModalWindow from "./components/ModalWindow";
import WorkoutDetails from "./pages/WorkoutDetails";
import EmptySavedWorkoutPage from "./pages/EmptySavedWorkoutPage";
import InvalidSavedWorkoutPage from "./pages/InvalidSavedWorkoutPage";
import SavedWorkoutPage from "./pages/SavedWorkoutPage";
import LibraryHomePage from "./pages/LibraryHomePage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/workoutdetails":
        title = "";
        metaDescription = "";
        break;
      case "/emptysavedworkoutpage":
        title = "";
        metaDescription = "";
        break;
      case "/invalidsavedworkoutpage":
        title = "";
        metaDescription = "";
        break;
      case "/savedworkoutpage2":
        title = "";
        metaDescription = "";
        break;
      case "/library-home":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ModalWindow />} />
      <Route path="/workoutdetails" element={<WorkoutDetails />} />
      <Route
        path="/emptysavedworkoutpage"
        element={<EmptySavedWorkoutPage />}
      />
      <Route
        path="/invalidsavedworkoutpage"
        element={<InvalidSavedWorkoutPage />}
      />
      <Route path="/savedworkoutpage2" element={<SavedWorkoutPage />} />
      <Route path="/library-home" element={<LibraryHomePage />} />
    </Routes>
  );
}
export default App;
