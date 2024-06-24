// import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
// import * as bootstrap from 'bootstrap'; // Import bootstrap object for carousel initialization

// const slides = [
//   [
//     {
//       image: 'https://via.placeholder.com/800x400.png?text=Slide+1',
//       title: 'First Slide',
//       description: 'This is the first slide.',
//     },
//     {
//       image: 'https://via.placeholder.com/800x400.png?text=Slide+2',
//       title: 'Second Slide',
//       description: 'This is the second slide.',
//     },
//     {
//       image: 'https://via.placeholder.com/800x400.png?text=Slide+3',
//       title: 'Third Slide',
//       description: 'This is the third slide.',
//     },
//   ],
//   [
//     {
//       image: 'https://via.placeholder.com/800x400.png?text=Slide+1',
//       title: 'First Slide',
//       description: 'This is the first slide.',
//     },
//     {
//       image: 'https://via.placeholder.com/800x400.png?text=Slide+2',
//       title: 'Second Slide',
//       description: 'This is the second slide.',
//     }
//   ],
// ];

// const App = () => {
//   useEffect(() => {
//     // Initialize all carousels
//     const carousels = document.querySelectorAll('.carousel');
//     carousels.forEach((carousel) => {
//       new bootstrap.Carousel(carousel, {
//         interval: 2000, // 2-second interval between slides
//         wrap: true,
//         pause: 'hover',
//       });
//     });
//   }, []);

//   return (
//     <div className="container mt-4">
//       {slides.map((slideGroup, index) => (
//         <div key={index} className="mb-4">
//           <h2>Carousel {index + 1}</h2>
//           <div
//             id={carousel${index}}
//             className="carousel slide"
//             data-bs-ride="carousel"
//           >
//             {/* Carousel indicators */}
//             <div className="carousel-indicators">
//               {slideGroup.map((_, slideIndex) => (
//                 <button
//                   key={slideIndex}
//                   type="button"
//                   data-bs-target={#carousel${index}}
//                   data-bs-slide-to={slideIndex}
//                   className={slideIndex === 0 ? 'active' : ''}
//                   aria-current={slideIndex === 0 ? 'true' : 'false'}
//                   aria-label={Slide ${slideIndex + 1}}
//                 ></button>
//               ))}
//             </div>

//             {/* Carousel content */}
//             <div className="carousel-inner">
//               {slideGroup.map((slide, slideIndex) => (
//                 <div
//                   key={slideIndex}
//                   className={`carousel-item ${
//                     slideIndex === 0 ? 'active' : ''
//                   }`}
//                 >
//                   <img
//                     className="d-block w-100"
//                     src={slide.image}
//                     alt={slide.title}
//                     style={{ height: '300px' }}
//                   />
//                   <div className="carousel-caption d-none d-md-block">
//                     <h3>{slide.title}</h3>
//                     <p>{slide.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Carousel controls */}
//             <button
//               className="carousel-control-prev"
//               type="button"
//               data-bs-target={#carousel${index}}
//               data-bs-slide="prev"
//             >
//               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//               <span className="visually-hidden">Previous</span>
//             </button>
//             <button
//               className="carousel-control-next"
//               type="button"
//               data-bs-target={#carousel${index}}
//               data-bs-slide="next"
//             >
//               <span className="carousel-control-next-icon" aria-hidden="true"></span>
//               <span className="visually-hidden">Next</span>
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;