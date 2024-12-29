import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './page/Landing'; // Adjust path if necessary
import Student from './page/Student'; // Adjust path if necessary

function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (student) => {
    if (!favorites.includes(student)) {
      setFavorites([...favorites, student]);
    }
  };

  const removeFavorite = (student) => {
    setFavorites(favorites.filter(fav => fav !== student));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing addToFavorites={addToFavorites} />} />
        <Route path="/favorites" element={<Student favorites={favorites} removeFavorite={removeFavorite} />} />
      </Routes>
    </Router>
  );
}

export default App;
