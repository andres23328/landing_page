import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Inicio from '../pages/Inicio';
import Equipo from '../pages/Equipo';
import Tecnologias from '../pages/Tecnologias';
import Contacto from '../pages/Contacto';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Inicio /> },
      { path: 'Equipo', element: <Equipo /> },
      { path: 'Tecnologias', element: <Tecnologias /> },
      { path: 'contacto', element: <Contacto /> },
    ]
  }
]);
