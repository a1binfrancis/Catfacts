import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Container style={{ textAlign: "center", marginTop: "50px" }}>
      <img src="cat.png" alt="Cat" style={{ width: "500px", marginBottom: "20px" }} />
      <h1>Cat Facts</h1>
      <p>random cat facts!</p>
      <button 
        onClick={() => navigate("/")}
        style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}
      >
        See Cat Facts
      </button>
    </Container>
  );
}

export default LandingPage;