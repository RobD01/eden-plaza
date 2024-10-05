import { Routes, Route } from "react-router-dom";
import "./globals.css";
import { Shop, Home, Leasing } from "./_root/pages";
import RootLayout from "./_root/pages/RootLayout";
import { Toaster } from "./components/ui/toaster";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="leasing" element={<Leasing />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
