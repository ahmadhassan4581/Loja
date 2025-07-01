import React from 'react';
import heroBackground from '../assets/img_1.jpg'; // use your actual path

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay for darkening the background if needed */}
      

      {/* Content on top of the image */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Loja</h1>
        <p className="text-lg md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer lorem.
        </p>
      </div>
    </section>
  );
}


// import React from 'react';

// export default function Hero() {
//   return (
//     <section
//       className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white"
      
//     >
//       {/* Overlay for darkening the background if needed */}
//       <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//       {/* Content on top of the image */}
//       <div className="relative z-10 text-center px-4 max-w-2xl">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Loja</h1>
//         <p className="text-lg md:text-xl">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer lorem.
//         </p>
//       </div>
//     </section>
//   );
// }

// in this code the background image in herosection are not showing in the website solve this issue  



