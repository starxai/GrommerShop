import React, { useState } from 'react';
import Carousel from './Carousel';

function App() {
  const images = [
    "https://pngfre.com/wp-content/uploads/ben-10-poster.png",
    "https://img.freepik.com/free-vector/cute-koala-hanging-tree-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-8369.jpg?size=338&ext=jpg&ga=GA1.1.867424154.1713571200&semt=sph"
    ,"https://pngfre.com/wp-content/uploads/ben-10-poster.png"
]

  return (
    <div className="App">
      <Carousel images={images} />
    </div>
  );
}

export default App;