import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import FactViewer from "./FactViewer";
import LandingPage from "./LandingPage";

function App() {
  return (
    <Router>
      <Nav style={{ padding: "10px", background: "#eee" }}>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/LandingPage">About</Nav.Link>
        </Nav.Item>
      </Nav>

      <Container>
        <Routes>
          <Route path="/" element={<FactViewer />} />
          <Route path="/LandingPage" element={<LandingPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;