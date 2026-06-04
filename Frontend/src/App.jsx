import { RouterProvider } from "react-router";
import { router } from "./app.routes.jsx";
function App() {
  return (
    <>
      <div className="bg-black text-white h-screen w-screen">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
