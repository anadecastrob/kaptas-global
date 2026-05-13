import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import DirectHire from "./pages/DirectHire";
import ContractorStaffing from "./pages/ContractorStaffing";
import ExecutiveMapping from "./pages/ExecutiveMapping";
import StartOperation from "./pages/StartOperation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="blog" element={<Blog />} />
          <Route path="direct-hire" element={<DirectHire />} />
          <Route path="contractor-staffing" element={<ContractorStaffing />} />
          <Route path="executive-mapping" element={<ExecutiveMapping />} />
          <Route path="start-operation" element={<StartOperation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
