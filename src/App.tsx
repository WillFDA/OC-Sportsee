import { Dashboard } from "./components/Dashboard";
import { MainContent } from "./components/main-content";
import { Navbar } from "./components/navbar";
import { SideBar } from "./components/SideBar";
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
