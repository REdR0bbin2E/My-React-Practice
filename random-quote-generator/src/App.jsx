import { useState, useEffect } from 'react';
import './App.css';
import { AnimatePresence, motion } from 'framer-motion';
function App() {




  const [quotes, setQuotes] = useState([]);
  const [index, setIndex] = useState(0);


  useEffect(() => {
    fetch("https://zenquotes.io/api/random") //ask the API
      .then(res => res.json())  //this is me converting it to a useable JSON
      .then(data => {
        setQuotes(data) //Store the quotes in my state
        setIndex(Math.floor(Math.random() * data.length)); //Pick a random quote
      });
  }, [])



  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setIndex(randomIndex);
  };

  if (quotes.length === 0) {
    return <p>Loading quotes...
    </p>
  }
  return (
    <div className="App" style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Random Quote Generator</h1>

      <motion.p whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} initial={{ opacity: 0, color: "blue" }} animate={{ animationDelay: 5, opacity: 1, color: "blue", fontSize: 55 }} transition={{ duration: 5, repeat: 2 }} style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{quotes[index]?.a || "Unknown"}, {quotes[index]?.q}
      </motion.p>

      <button onClick={getRandomQuote}>Show Another Quote</button>
    </div>
  );
}

export default App;
