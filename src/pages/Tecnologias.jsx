import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, Mousewheel } from 'swiper/modules'; // <- Importar módulos extra
import 'swiper/css';
import 'swiper/css/pagination';
import '../static/css/estilos.css';

const tecnologias = [
  { nombre: 'React Native', descripcion: 'Framework para desarrollo móvil cross-platform.', imagen: 'https://reactnative.dev/img/header_logo.svg' },
  { nombre: 'Firebase', descripcion: 'Base de datos y servicios en la nube de Google.', imagen: 'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png' },
  { nombre: 'Expo Go', descripcion: 'Entorno para desarrollo rápido en React Native.', imagen: 'https://blixtdev.com/content/images/size/w2000/2022/10/exp.png' },
  { nombre: 'CSS Puro', descripcion: 'Estilos personalizados sin frameworks.', imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
  { nombre: 'Node.js', descripcion: 'Entorno de ejecución para JavaScript en backend.', imagen: 'https://nodejs.org/static/images/logo.svg' },
  { nombre: 'Java', descripcion: 'Lenguaje de programación orientado a objetos.', imagen: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
  { nombre: 'Express', descripcion: 'Framework minimalista para Node.js.', imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
  { nombre: 'Redux', descripcion: 'Manejador global del estado en aplicaciones React.', imagen: 'https://redux.js.org/img/redux-logo-landscape.png' },
  { nombre: 'Axios', descripcion: 'Cliente HTTP basado en promesas.', imagen: 'https://axios-http.com/assets/logo.svg' },
];

const Tecnologias = () => (
  <section className="bg-green-100  py-2">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-6 text-green-700">Tecnologías Usadas</h2>
      <p className="text-gray-600 mb-12">
        Estas son las herramientas que utilizamos para construir nuestra aplicación.
      </p>
      <Swiper className="h-[348px]" 
        modules={[Pagination, Keyboard, Mousewheel]} // <- Se añaden módulos
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }} // <- Navegación con flechas del teclado
        mousewheel={true} // <- Navegación con scroll del mouse
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      >
        {tecnologias.map((tec, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-2xl hover:shadow-black/40 transition duration-300 ease-in-out h-[320px] flex flex-col items-center justify-center">
              <img
                src={tec.imagen}
                alt={tec.nombre}
                className="h-24 mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">{tec.nombre}</h3>
              <p className="text-gray-600 text-sm px-2">{tec.descripcion}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Tecnologias;
