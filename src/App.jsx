import { React } from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import ScheduleInspection from "./Components/ScheduleInspection/ScheduleInspection";
import './index.css';
import AboutUs from "./Pages/AboutUs";


export default function App() {
  return (
    <div>
      {/* <Pages /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scheduleInspection" element={<ScheduleInspection />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}
