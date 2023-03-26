import "./App.css";
import { ContextProvider } from "./Context/Context";
import Stars from "./Components/Stars";
import { Canvas } from "@react-three/fiber";
import MainAvatar from "./Components/MainAvatar";
import AvatarControl from "./Components/AvatarControl";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <div className="sub-app">
          <Canvas className="img-1">
            <Stars />
            <MainAvatar />
            <Stars />
          </Canvas>

          <AvatarControl />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
