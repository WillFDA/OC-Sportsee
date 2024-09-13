import { Dashboard } from "./components/dashboard/dashboard";
import { MainContent } from "./components/main-content";
import { Navbar } from "./components/navbar";
import { SideBar } from "./components/sideBar";
function App() {
  return (
    <>
      <Navbar />
      <SideBar />
      <MainContent>
        <Dashboard />
      </MainContent>
    </>
  );
}

export default App;
