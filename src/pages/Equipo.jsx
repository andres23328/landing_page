import React from 'react';
import '../static/css/estilos.css';

// Importación de imágenes
import angie from '../static/images/integrantes/Angie.jpeg';
import alejandro from '../static/images/integrantes/Alejandro.jpeg';
import andres from '../static/images/integrantes/yo.jpeg';

const equipo = [
  {
    nombre: 'Angie Martínez',
    rol: 'Gestión Documental y Coordinación',
    descripcion:
      'Encargada de la elaboración, organización y entrega de toda la documentación del proyecto. Aseguró la claridad y coherencia en los reportes, cronogramas y entregables. También coordinó tareas clave y gestionó el cumplimiento de los tiempos establecidos.',
    imagen: angie,
  },
  {
    nombre: 'Andrés Ardila',
    rol: 'Desarrollador Fullstack',
    descripcion:
      'Responsable del desarrollo integral de la aplicación móvil, incluyendo la estructura del backend con Node.js y Express, así como la lógica del frontend en React Native. Implementó la base de datos con Firebase, lógica de autenticación, gráficas interactivas y el sistema de predicción con Machine Learning.',
    imagen: andres,
  },
  {
    nombre: 'Alejandro Suárez',
    rol: 'Diseñador de Interfaz y Frontend',
    descripcion:
      'Diseñó y desarrolló toda la interfaz visual de la aplicación, cuidando la experiencia de usuario (UX) y el diseño centrado en el usuario (UI). Se enfocó en un diseño moderno, responsivo y accesible, utilizando Tailwind CSS y React Native para lograr un producto visualmente atractivo y funcional.',
    imagen: alejandro,
  },
];

const Equipo = () => {
  return (
    <section className="bg-green-100 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-green-700 mb-12">Equipo De Desarrolladores</h1>
        <div className="grid md:grid-cols-3 gap-10">
          {equipo.map((miembro, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-black/40 hover:scale-105 transition-all duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-delay={100 * i}
            >
              <img
                src={miembro.imagen}
                alt={miembro.nombre}
                className="w-28 h-28 mx-auto rounded-full mb-4 object-cover ring-4 ring-green-300"
              />
              <h3 className="text-2xl font-bold text-green-800">{miembro.nombre}</h3>
              <p className="text-green-600 font-medium mb-2">{miembro.rol}</p>
              <p className="text-gray-600 text-sm text-justify">{miembro.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipo;
