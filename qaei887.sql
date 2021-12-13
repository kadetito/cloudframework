-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 13-12-2021 a las 17:17:01
-- Versión del servidor: 5.6.40
-- Versión de PHP: 7.3.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `qaei887`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cloud_contacts`
--

CREATE TABLE `cloud_contacts` (
  `id` int(11) NOT NULL,
  `firstname` varchar(250) DEFAULT NULL,
  `lastname` varchar(250) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `telefono` varchar(250) NOT NULL,
  `address` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='public id_persona: string;\npublic nombres: string;\npublic password:string;\npublic email:string;\npublic telefono:string;\npublic direccion: string;\npublic imagen:string;\npublic registrado:string;\npublic id_rol:string;\npublic tokenid: string;';

--
-- Volcado de datos para la tabla `cloud_contacts`
--

INSERT INTO `cloud_contacts` (`id`, `firstname`, `lastname`, `email`, `telefono`, `address`) VALUES
(1, 'Susana', 'Aparicio Gómez', 'mail1@correo.com', '622989963', 'Elm Street 400 50937 Wisconsin'),
(7, 'Sara ', 'Yélamo', 'mail7@correo.com', '648985632', 'Avda Diagonal 234, Barcelona'),
(23, 'Carlos', 'Gabriel López', 'mail23@correo.com', '856321265', 'C/ Somer, 17 bajos Salamanca'),
(24, 'Peter', 'Smithson', 'mail24@correo.com', '674595562', 'C/Viriato, 276 Oviedo'),
(33, 'Ibrahim', 'Mahmoud', 'mail33@correo.com', '754695854', 'C/Lleida, 837 Madrid'),
(34, 'Rafaello', 'Martín Vazquez', 'maila@webentorn.com', '23423344', 'C/ Velazquez, 2 1-7');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cloud_match_contacts`
--

CREATE TABLE `cloud_match_contacts` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_contacto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `cloud_match_contacts`
--

INSERT INTO `cloud_match_contacts` (`id`, `id_usuario`, `id_contacto`) VALUES
(4, 7, 7),
(5, 7, 23),
(10, 1, 1),
(17, 1, 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cloud_usuarios`
--

CREATE TABLE `cloud_usuarios` (
  `id` int(11) NOT NULL,
  `firstname` varchar(250) DEFAULT NULL,
  `lastname` varchar(250) NOT NULL,
  `username` varchar(250) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `birthday` varchar(250) NOT NULL,
  `password` longtext,
  `role` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='public id_persona: string;\npublic nombres: string;\npublic password:string;\npublic email:string;\npublic telefono:string;\npublic direccion: string;\npublic imagen:string;\npublic registrado:string;\npublic id_rol:string;\npublic tokenid: string;';

--
-- Volcado de datos para la tabla `cloud_usuarios`
--

INSERT INTO `cloud_usuarios` (`id`, `firstname`, `lastname`, `username`, `email`, `birthday`, `password`, `role`) VALUES
(1, 'Rafa ', 'Peña ', 'rafapenya', 'correo1@correo.com', '28/12/1974', 'RkUyUjdGMThnd2lIVG1DNklOZVdoZz09', 1),
(7, 'Juan Antonio', 'González Tendillo', 'gonzatendillo', 'correo7@correo.com', '05/10/1986', '123456', 2),
(23, 'John', 'Jackson', 'jacksonjohn', 'correo23@correo.com', '18/03/1974', '$2b$10$Pd8dtBuTahfPYh9OGiVgDuxXEk6mAk8IrTjkaWO3fo9BeXhgc6x/i', 1),
(24, 'Francoise Antoine', 'De Pernaud ', 'depernaud', 'correo24@correo.com', '22/04/1969', '$2b$10$yXQeo.7y/9ByhKrJME4OPeV6tu8uz9blR2dt3UKRwP3y1/6w52lru', 2),
(33, 'Rogelio', 'Wilson Martínez Castro', 'rolgeiomartinez', 'correo33@correo.com', '30/02/1954', '$2b$10$h5JS2JHFddIWnnZZM1BmxOkgyqYPj0Yo37ibhSuXtGBXgL466kp2O', 2),
(68, 'Miguel Angel', 'Hastraid', 'migastraid', 'miga@mail.com', '12/12/1985', '123456789', 0),
(69, 'Morgan', 'Peña', '333', 'rafa@webentorn.com', '333', '333', 0),
(70, 'Rafadwedwedwed', 'Peña', 'dwedwe', 'rafa@wad.cat', 'dwedwe', 'dwedwe', 0),
(72, 'Holilla', 'Perez', 'myusername', 'rafa@webentorn.com', 'birthday', 'password', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cloud_contacts`
--
ALTER TABLE `cloud_contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cloud_match_contacts`
--
ALTER TABLE `cloud_match_contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cloud_usuarios`
--
ALTER TABLE `cloud_usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cloud_contacts`
--
ALTER TABLE `cloud_contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `cloud_match_contacts`
--
ALTER TABLE `cloud_match_contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `cloud_usuarios`
--
ALTER TABLE `cloud_usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
