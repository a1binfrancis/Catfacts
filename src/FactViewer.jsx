import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";

function FactViewer() {
  const [fact, setFact] = useState("");

  const fetchFact = async () => {
    try {
      const res = await fetch("https://catfact.ninja/fact");
      const data = await res.json();
      setFact(data.fact);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Card style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
        {fact}
      </Card>
      <Button onClick={fetchFact} style={{ marginTop: "20px" }}>
        New Fact
      </Button>
    </div>
  );
}

export default FactViewer;