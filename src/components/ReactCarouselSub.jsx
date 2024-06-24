import React from "react";
import Carouselcomp from "./ReactCarousel";

const Imgslides = () => {
  const images = [
    [
      {
        src: "https://i.ibb.co/s2ZsK8J/lindsay-cash-Md-Dha-Fsn-CQ-unsplash-2-1.jpg",
        alt: "Image 1",
        caption: "First slide",
      },
      {
        src: "https://i.ibb.co/s2ZsK8J/lindsay-cash-Md-Dha-Fsn-CQ-unsplash-2-1.jpg",
        alt: "Image 2",
        caption: "Second slide",
      },
      {
        src: "https://i.ibb.co/s2ZsK8J/lindsay-cash-Md-Dha-Fsn-CQ-unsplash-2-1.jpg",
        alt: "Image 3",
        caption: "Third slide",
      }
    ],
    [
        {
          src: "https://i.ibb.co/sPtr8YY/jeppe-monster-T-g-TN3-Po9-RQ-unsplash-1-3.jpg",
          alt: "Image 1",
          caption: "First slide",
        },
        {
          src: "https://i.ibb.co/sPtr8YY/jeppe-monster-T-g-TN3-Po9-RQ-unsplash-1-3.jpg",
          alt: "Image 2",
          caption: "Second slide",
        },
        {
            src: "https://i.ibb.co/sPtr8YY/jeppe-monster-T-g-TN3-Po9-RQ-unsplash-1-3.jpg",
            alt: "Image 1",
            caption: "First slide",
          },
        {
          src: "https://i.ibb.co/sPtr8YY/jeppe-monster-T-g-TN3-Po9-RQ-unsplash-1-3.jpg",
          alt: "Image 3",
          caption: "Third slide",
        }
      ],
      [
        {
          src: "https://i.ibb.co/s2ZsK8J/lindsay-cash-Md-Dha-Fsn-CQ-unsplash-2-1.jpg",
          alt: "Image 1",
          caption: "First slide",
        },
        {
            src: "https://i.ibb.co/sPtr8YY/jeppe-monster-T-g-TN3-Po9-RQ-unsplash-1-3.jpg",
            alt: "Image 1",
            caption: "First slide",
          },
          {
            src: "https://i.ibb.co/s2ZsK8J/lindsay-cash-Md-Dha-Fsn-CQ-unsplash-2-1.jpg",
            alt: "Image 1",
            caption: "First slide",
          },
        {
          src: "https://i.ibb.co/gTK2BGR/pexels-cottonbro-studio-3993472-1.jpg",
          alt: "Image 2",
          caption: "Second slide",
        },
        {
          src: "https://i.ibb.co/gTK2BGR/pexels-cottonbro-studio-3993472-1.jpg",
          alt: "Image 3",
          caption: "Third slide",
        }
      ],
      [
        {
          src: "https://i.ibb.co/gTK2BGR/pexels-cottonbro-studio-3993472-1.jpg",
          alt: "Image 1",
          caption: "First slide",
        },
        {
          src: "https://i.ibb.co/gTK2BGR/pexels-cottonbro-studio-3993472-1.jpg",
          alt: "Image 2",
          caption: "Second slide",
        },
        {
          src: "https://i.ibb.co/gTK2BGR/pexels-cottonbro-studio-3993472-1.jpg",
          alt: "Image 3",
          caption: "Third slide",
        }
      ]
  ];
  return (
    <div>
      <h1>Dynamic Carousel Example</h1>
      <Carouselcomp images={images} />
      <div>
       {
        images.map((img)=>{
            img.map((pic)=>{
                return (
                    <div>
                        <h3>{pic.caption}</h3>
                    </div>
                )
            })
        })
       }
      </div>
    </div>
  );
};

export default Imgslides;