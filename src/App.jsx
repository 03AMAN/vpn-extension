import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button, Alert, Form } from "react-bootstrap";
import { motion } from "framer-motion";

const App = () => {
  const [ip, setIp] = useState("");
  const [proxies, setProxies] = useState([]);
  const [selectedProxy, setSelectedProxy] = useState("");
  const [connectedProxy, setConnectedProxy] = useState("");

  useEffect(() => {
    fetchIp();
    fetchProxies();
  }, []);

  // FETCH CURRENT IP
  const fetchIp = async () => {
    try {
      const url = "https://api64.ipify.org?format=json";
      let response = await fetch(url);
      response = await response.json();
      setIp(response.ip);
    } catch (error) {
      console.error("Error fetching Ip:", error);
    }
  };

  // FETCH PROXY LIST
  const fetchProxies = async () => {
    try {
      const url =
        "https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=1000&country=all";
      let response = await fetch(url);
      let text = await response.text();
      let proxyArray = text.split("\n").filter((item) => item.trim() !== "");
      setProxies(proxyArray.slice(0, 10)); // limiting to first 10 proxies for demo
    } catch (error) {
      console.error("Error fetching Proxies:", error);
    }
  };

  // HANDLE CONNECT (simulate)
  const handleConnect = () => {
    if (selectedProxy) {
      setConnectedProxy(`Connected to Proxy: ${selectedProxy}`);
      setIp("Simulated New IP");
    } else {
      alert("Please select a proxy first to connect.");
    }
  };

  return (
    <div className="bg-dark text-light min-vh-100 d-flex align-items-center justify-content-center">
      <Container>
        {/* Animated Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="shadow-lg p-4 rounded-4 bg-secondary text-light border-0">
            <Card.Body>
              <Card.Title className="text-center text-info mb-4 fw-bold fs-3">
                🚀 VPN Extension (Demo)
              </Card.Title>

              {/* Current IP */}
              <p className="lead text-center mb-4">
                Your Current IP: <strong className="text-warning">{ip}</strong>
              </p>

              {/* Proxy Selector */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Select Proxy:</Form.Label>
                <Form.Select
                  className="bg-dark text-light border-info"
                  value={selectedProxy}
                  onChange={(e) => setSelectedProxy(e.target.value)}
                >
                  <option value="">-- Choose Proxy --</option>
                  {proxies.map((proxy, index) => (
                    <option key={index} value={proxy}>
                      {proxy}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              {/* Connect Button with animation */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="info"
                  className="w-100 mb-3 fw-semibold shadow-sm"
                  onClick={handleConnect}
                >
                  🔗 Connect to Proxy
                </Button>
              </motion.div>

              {/* Connection Alert */}
              {connectedProxy && (
                <Alert
                  variant="success"
                  className="mt-3 text-center fw-semibold rounded-3"
                >
                  {connectedProxy}
                  <br />
                  <span className="text-warning">(New IP Simulated)</span>
                </Alert>
              )}
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </div>
  );
};

export default App;
