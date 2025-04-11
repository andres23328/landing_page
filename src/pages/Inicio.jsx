import React, { useState, useEffect } from 'react';
import { AiOutlineUp } from 'react-icons/ai';
import { FaRuler, FaWeight } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../static/css/estilos.css';

// Importación de imágenes
import anchorIcon from '../static/images/Trust area/anchor.png';
import archiveIcon from '../static/images/Trust area/archive.png';
import userIcon from '../static/images/Trust area/user.png';
import about1 from '../static/images/About/about-1.png';
import about2 from '../static/images/About/about-2.png';
import gridIcon from '../static/images/Services/grid.png';
import cartIcon from '../static/images/Services/cart.png';
import cameraIcon from '../static/images/Services/camera.png';
import logo from '../static/images/Logo/vida_fit.jpeg';
import hero from '../static/images/Cover/image.png';

const Inicio = () => {
  const [showButton, setShowButton] = useState(false);
  const [formData, setFormData] = useState({ altura: '', peso: '' });
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleScroll = () => setShowButton(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const calcularIMC = () => {
    const altura = parseFloat(formData.altura);
    const peso = parseFloat(formData.peso);
  
    if (isNaN(altura) || isNaN(peso)) {
      alert("Por favor ingresa valores válidos.");
      return;
    }
  
    if (altura > 250) {
      alert("La altura maximo permitido es 250 cm.");
      return;
    }
  
    if (peso > 350) {
      alert("El peso maximo permitido es 350 kg.");
      return;
    }
  
    const alturaM = altura / 100;
    const imc = peso / (alturaM * alturaM);
    setResultado(imc.toFixed(2));
    setFormData({ altura: '', peso: '' });
  };
  

  return (
    <section id="inicio" className=" text-gray-800">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-green-100">
        {/* LOGO CENTRADO */}
        <div className="flex justify-center mb-10" data-aos="fade-down">
          <img
            src={logo}
            alt="Logo"
            className="w-24 md:w-28 rounded-full shadow-md"
          />
        </div>

        {/* CONTENEDOR PRINCIPAL */}
        <div
          className="flex flex-col lg:flex-row items-center justify-center max-w-4xl mx-auto text-left gap-8"
          data-aos="fade-up"
        >
          {/* TEXTO */}
          <div className="flex-1 px-4 max-w-md">
            <h1 className="text-2xl md:text-3xl font-extrabold leading-snug mb-4 text-black">
              Importancia del Índice de Masa Corporal (IMC) en la Salud
            </h1>
            <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
              El Índice de Masa Corporal (IMC) es un indicador ampliamente utilizado para evaluar el estado de salud relacionado con el peso corporal. Un IMC dentro de los rangos saludables puede reducir el riesgo de desarrollar enfermedades crónicas, como hipertensión, diabetes tipo 2 y problemas cardiovasculares.
              <br /><br />
              Sin embargo, el IMC por sí solo no es una medida perfecta, ya que no distingue entre masa muscular y grasa. Por eso, es importante acompañar su cálculo con otros análisis clínicos y asesoría médica para obtener una evaluación más completa de la salud general.
            </p>
            <a
              href="/contacto"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
            >
              Contáctanos
            </a>
          </div>

          {/* IMAGEN */}
          <div className="flex-1 px-4">
            <img
              src={hero}
              alt="Imagen IMC"
              className="w-full max-w-xs rounded-xl shadow-md object-cover mx-auto"
            />
          </div>
        </div>
      </div>



      {/* Sección IMC */}
      <div className="bg-green-50 py-16" data-aos="fade-up">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Calcula tu IMC</h2>

          {/* FORMULARIO */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              calcularIMC();
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
              <div className="flex items-center bg-white p-4 rounded-lg shadow w-full md:w-1/2">
                <FaRuler className="text-green-600 text-2xl mr-3" />
                <input
                  type="number"
                  placeholder="Altura (cm)"
                  min={150}
                  value={formData.altura}
                  onChange={(e) => setFormData({ ...formData, altura: e.target.value })}
                  className="w-full outline-none"
                />
              </div>
              <div className="flex items-center bg-white p-4 rounded-lg shadow w-full md:w-1/2">
                <FaWeight className="text-green-600 text-2xl mr-3" />
                <input
                  type="number"
                  placeholder="Peso (kg)"
                  min={50}
                  value={formData.peso}
                  onChange={(e) => setFormData({ ...formData, peso: e.target.value })}
                  className="w-full outline-none"
                />
              </div>
            </div>
          
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-5 rounded-full shadow transition"
            >
              Calcular
            </button>
          </form>
          
          {/* Resultado */}
          {resultado && (
            <p className="mt-4 text-lg font-medium text-green-700">
              Tu IMC es: <span className="font-bold">{resultado}</span> -
              <span className="ml-2">
                {resultado < 18.5 && "Bajo peso"}
                {resultado >= 18.5 && resultado < 25 && "Peso normal"}
                {resultado >= 25 && resultado < 30 && "Sobrepeso"}
                {resultado >= 30 && "Obesidad"}
              </span>
            </p>
          )}
        </div>
      </div>
        


      {/* Beneficios */}
      <div className="py-20 bg-white" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-700">¿Por qué elegirnos?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Rutinas personalizadas", 
                desc: "Recibe ejercicios ajustados a tu nivel, objetivo y tiempo disponible." 
              },
              { 
                title: "Seguimiento inteligente", 
                desc: "Monitorea tu progreso semanal con gráficas y recomendaciones adaptativas." 
              },
              { 
                title: "Tecnología de vanguardia", 
                desc: "Usamos IA, React Native y Firebase para brindarte una experiencia rápida y moderna." 
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-2xl hover:shadow-black/40 transition duration-300 ease-in-out"
                data-aos="fade-up" 
                data-aos-delay={100 * i}
              >
                <h3 className="text-xl font-semibold mb-2 text-green-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
          
      {/* Confianza */}
      <div className="bg-green-50 py-20 px-6" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-green-700 font-semibold text-sm mb-2">PRIMERO, ENFOCA EN LA SALUD</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Gestiona tu progreso fitness con datos precisos</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[{
              img: anchorIcon,
              title: "Control total de tu salud física",
              text: "Monitorea tu estado físico en tiempo real y recibe predicciones sobre tu IMC para un mejor control de tu progreso."
            }, {
              img: archiveIcon,
              title: "Informes detallados sobre tu evolución",
              text: "Accede a análisis completos de tu rendimiento y predicciones futuras basadas en tu historial de IMC y actividades."
            }, {
              img: userIcon,
              title: "Experiencia personalizada para tus metas",
              text: "Crea planes de entrenamiento personalizados y recibe recomendaciones según tus objetivos de salud y estado físico."
            }].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl hover:shadow-black/40 transition duration-300 ease-in-out" data-aos="fade-up" data-aos-delay={100 * i}>
                <img src={item.img} alt={item.title} className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-bold text-green-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sobre nosotros */}
      <div className="bg-white py-20 px-6" data-aos="fade-up">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">Transformación Fitness en Acción</h2>
            <p className="text-gray-600 mb-6">Únete a nuestro equipo y descubre cómo el análisis de tu IMC puede transformar tu salud.</p>
            <a href="#" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition">Descubre más</a>
          </div>
          <div className="flex-1 flex gap-4 justify-center md:justify-end">
            <img src={about1} alt="Sobre el gimnasio 1" className="w-1/2 rounded-lg shadow-md" />
            <img src={about2} alt="Sobre el gimnasio 2" className="w-1/2 rounded-lg shadow-md" />
          </div>
        </div>
      </div>

      {/* Servicios */}
      <div className="bg-green-50 py-20 px-6" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-green-700 font-semibold text-sm mb-2">NUESTROS SERVICIOS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Soluciones para mejorar tu rendimiento físico</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[{
              img: gridIcon,
              title: "Monitoreo de Progreso",
              text: "Controla y visualiza tu evolución física con nuestras herramientas de monitoreo de IMC y peso."
            }, {
              img: cartIcon,
              title: "Planes Personalizados",
              text: "Accede a rutinas y dietas personalizadas basadas en tu IMC y objetivos de salud."
            }, {
              img: cameraIcon,
              title: "Seguimiento a tu disposición",
              text: "Monitorea tu rendimiento despues de los entrenamientos con nuestras soluciones de forma grafica y dinamica."
            }].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl hover:shadow-black/40 transition duration-300 ease-in-out text-left relative" data-aos="fade-up" data-aos-delay={100 * i}>
                <img src={item.img} alt={item.title} className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-bold text-green-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.text}</p>
                <a href="#" className="absolute bottom-6 right-6 text-green-600 hover:text-green-800 text-xl transition">
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Llamado a la acción */}
      <div className="bg-green-600 text-white py-16 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar tu transformación?</h2>
        <p className="text-lg mb-6">Empieza hoy mismo con un plan personalizado.</p>
        <a href="/contacto" className="bg-white text-green-600 hover:text-green-800 font-semibold py-3 px-6 rounded-lg shadow transition duration-300">
          Hablemos
        </a>
      </div>

      {/* Footer */}
      <footer className="footer py-10 px-6 bg-white text-center" data-aos="fade-up">
        <div className="redes-footer flex justify-center gap-6 mb-4">
          <a href="https://www.facebook.com/Lizeth.santos1709" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className="icon-redes-footer text-green-600 text-2xl hover:scale-110 transition" />
          </a>
          <a href="#inicio">
            <FontAwesomeIcon icon={faGooglePlusG} className="icon-redes-footer text-green-600 text-2xl hover:scale-110 transition" />
          </a>
          <a href="https://www.instagram.com/alejox.l" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon-redes-footer text-green-600 text-2xl hover:scale-110 transition" />
          </a>
        </div>
        <hr className="my-4 border-gray-300" />
        <h4 className="text-gray-600">© 2024 VIDA_FIT - Todos los Derechos Reservados</h4>
      </footer>

      {/* Scroll arriba */}
      {showButton && (
        <div
          onClick={scrollUp}
          aria-label="Volver arriba"
          className="fixed bottom-6 right-6 bg-white border border-gray-300 rounded-full p-3 shadow cursor-pointer hover:bg-gray-100 transition"
        >
          <AiOutlineUp size={24} className="text-green-600" />
        </div>
      )}
    </section>
  );
};

export default Inicio;
