import { RouterProvider } from "react-router";
import { router } from "./app.routes.jsx";
import { AuthProvider } from "./features/auth/auth.context";
function App() {
  return (
    <>
      <div className="relative bg-black text-white h-screen w-screen">
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
