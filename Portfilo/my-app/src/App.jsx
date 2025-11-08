// src/App.jsx
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Header from "./component/header";
import Background from "./component/background";
import Fetures from "./component/fetures";
import Resume from "./component/resume";
import Blog from "./component/blog";
import Contact from "./component/contact";
import Footer from "./component/footer";

import Development from "./details/development";
import Ui from "./details/ui";
import Flutter from "./details/flutter";
import Back from "./details/backend";
import Ceo from "./details/ceo";
import Cyber from "./details/cyber";

function MainLayout() {
  return (
    <>
      <Header />
      <Background />
      <Fetures />
      <Resume />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
function DetailLayout() {
  return <Outlet />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />

        <Route element={<DetailLayout />}>
          <Route path="/development" element={<Development />} />
          <Route path="/ui" element={<Ui />} />
          <Route path="/flutter" element={<Flutter />} />
          <Route path="/backend" element={<Back />} />
          <Route path="/ceo" element={<Ceo />} />
          <Route path="/cyber" element={<Cyber />} /> 
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;