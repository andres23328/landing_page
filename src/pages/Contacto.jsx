import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes hacer validación o enviar los datos por correo, etc.
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Resetea mensaje
  };

  return (
    <section className="py-20 bg-green-100 " data-aos="fade-up">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-green-700">Contáctanos</h2>
        <p className="text-gray-600 mb-8">
          ¿Sugerencias o reclamos? Escríbenos y nos pondremos en contacto contigo lo antes posible.
        </p>

        {submitted && (
          <div className="mb-6 text-green-600 font-semibold bg-green-100 p-3 rounded-lg animate-pulse">
            ¡Gracias por tu mensaje! Te responderemos pronto.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={formData.correo}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            rows="5"
            value={formData.mensaje}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold py-2 px-6 rounded hover:bg-green-700 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
