import { React } from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import ScheduleInspection from "./Components/ScheduleInspection/ScheduleInspection";
import OurProperties from "./Pages/OurProperties/OurProperties";
import EstatePage from "./Pages/EstatePage/EstatePage";
import AboutUs from "./Pages/AboutUs";
import './index.css';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourproperties/fajuyiEstate" element={<OurProperties />} />
        <Route path="/fajuyiEstate" element={<EstatePage />} />
        <Route path="/scheduleInspection" element={<ScheduleInspection />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}
