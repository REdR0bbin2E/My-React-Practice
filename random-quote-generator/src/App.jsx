import { useState, useEffect } from 'react';
import './App.css';
import quotes from "./quotes.json"
import { AnimatePresence, motion } from 'framer-motion';
function App() {




  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetchQuote();

  }, []);

  const fetchQuote = async () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };


  const getRandomQuote = () => {
    fetchQuote();
  };

  if (!quote) {
    return <p>Loading quote...
    </p>
  }
  return (
    <div className="App" style={{ padding: "2rem", textAlign: "center" }}>
      <motion.h1 whileHover={{ scale: 1.2 }} transition={{ duration: 3 }}>Random Quote Generator</motion.h1>

      <motion.p whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.2 }} initial={{ opacity: 0, color: "blue" }} animate={{ opacity: 1, color: "blue", fontSize: 55 }} transition={{ duration: 3 }} style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
        {quote.a || "Unknown"}, {quote.q}
      </motion.p>

      <button onClick={getRandomQuote}>Show Another Quote</button>
    </div>
  );
}

export default App;
