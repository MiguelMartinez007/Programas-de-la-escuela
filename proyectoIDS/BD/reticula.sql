CREATE DATABASE IF NOT EXISTS `reticula` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `reticula`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `class`
--

CREATE TABLE `class` (
  `id` int(11) NOT NULL,
  `course` varchar(50) NOT NULL,
  `year` varchar(50) NOT NULL,
  `section` varchar(50) NOT NULL,
  `sem` varchar(50) NOT NULL,
  `teacher` varchar(100) NOT NULL,
  `subject` varchar(100) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `class`
--

INSERT INTO `class` (`id`, `course`, `year`, `section`, `sem`, `teacher`, `subject`) VALUES
(4, 'BSIT', 'III', 'A', '2nd', '4', 'IT104'),
(7, 'BSIT', 'III', 'A', '2nd', '5', 'IT103'),
(8, 'BSIT', 'I', 'B', '1st', '3', 'IT100'),
(9, 'BSIT', 'I', 'C', '1st', '3', 'IT103'),
(10, 'BSIT', 'IV', 'A', '2nd', '5', 'IT113'),
(11, 'BSIT', 'I', 'A', '1st', '6', 'AEF-1041');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reticula`
--

CREATE TABLE `reticula` (
  `id_reticula` int(11) NOT NULL,
  `estado` varchar(1) NOT NULL,
  `semestre_fk` int(2) NOT NULL,
  `materia_fk` int(2) NOT NULL,
  `usuario_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `reticula`
--

INSERT INTO `reticula` (`id_reticula`, `estado`, `semestre_fk`, `materia_fk`, `usuario_fk`) VALUES
(1, 'V', 1, 1, 19),
(2, 'V', 1, 2, 19),
(3, 'V', 2, 9, 19),
(4, 'V', 2, 26, 19),
(5, 'V', 3, 17, 19),
(6, 'V', 3, 47, 19),
(7, 'V', 4, 48, 19),
(8, 'V', 4, 49, 19),
(9, 'V', 4, 50, 19),
(10, 'V', 4, 51, 19),
(11, 'V', 1, 11, 19),
(12, 'V', 1, 26, 19),
(13, 'V', 1, 22, 19),
(14, 'V', 1, 13, 19),
(15, 'V', 1, 19, 19),
(16, 'V', 1, 11, 19),
(17, 'V', 1, 26, 19),
(18, 'V', 1, 22, 19),
(19, 'V', 1, 13, 19),
(20, 'V', 1, 19, 19);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `semestre`
--

CREATE TABLE `semestre` (
  `id_semestre` int(11) NOT NULL,
  `semestre` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `semestre`
--

INSERT INTO `semestre` (`id_semestre`, `semestre`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `studid` varchar(50) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `face` varchar(60) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `semestre_fk` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `student`
--

INSERT INTO `student` (`id`, `studid`, `fname`, `lname`, `face`, `correo`, `telefono`, `semestre_fk`) VALUES
(1, '0825-2007', 'Jimmy', 'Lomocso', 'https://www.facebook.com/profile.php?', 'chivasrrr@hotmail.com', '435554443432', 0),
(2, '0826-2007', 'Rolan', 'Algara', '', '', '', 0),
(3, '0983-2007', 'Mark', 'Pasicaran', '', '', '', 0),
(4, '0732-2008', 'Fernando', 'Genon', '', '', '', 0),
(5, '0001-2014', 'Cherry', 'Aguaviva', '', '', '', 0),
(6, 'TS15110057', 'JOSE JESUS', 'BALBINO ARTEAGA', 'www.facebook.com', 'balbino@hotmail.com', '46611123455', 5),
(7, 'TS15110036', 'JOSE LUIS', 'RODRIGUEZ ANDRADE', 'www.facebook.com', 'luis@hotmail.com', '45644244343', 5),
(8, 'TS15110010', 'ANGEL', 'ROSILLO RICO', 'www.facebook.com', 'ang@hotmail.com', '554655432', 5),
(9, 'TS14110002', 'RAUL', 'CORTES RUIS PUTO', 'www.facebook.com', 'raul@hotmail.com', '4453322', 7),
(10, 'TS14110003', 'MIGUEL ANGEL', 'MARTINEZ PUGA', 'www.facebook.com', 'migue@hotmail.com', '43433243443', 7),
(11, 'TS14110044', 'HECTOR ABRAHAM', 'PADILLA TIRADO', 'www.facebook.com', 'hec@hotmail.com', '434354343', 7),
(12, 'TS14110027', 'CRISTIAN', 'ROJAS LARA', 'www.facebook.com', 'rojas@hotmail.com', '343542332', 7),
(13, 'TS13110037', 'LUIS', 'MEDINA CAMPOS', 'www.facebook.com', 'lu@hotmail.com', '3823839', 9),
(14, 'TS13110022', 'JOSE MANUEL', 'PERRUSQUIA FLORES', 'www.facebook.com', 'chema@hotmail.com', '44433233', 9),
(15, 'TS13110006', 'MARIANA', 'RODRIGUEZ LULE', 'www.facebook.com', 'mari@hotmail.com', '324423', 9),
(16, 'TS13110018', 'ANTONIO DE JESUS', 'ROSILLO RICO', 'www.facebook.com', 'jes@hotmail.com', '234323', 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `studentsubject`
--

CREATE TABLE `studentsubject` (
  `id` int(11) NOT NULL,
  `studid` varchar(50) NOT NULL,
  `classid` int(11) NOT NULL,
  `att1` float NOT NULL,
  `att2` float NOT NULL,
  `att3` float NOT NULL,
  `exam1` float NOT NULL,
  `exam2` float NOT NULL,
  `exam3` float NOT NULL,
  `quiz1` float NOT NULL,
  `quiz2` float NOT NULL,
  `quiz3` float NOT NULL,
  `project1` float NOT NULL,
  `project2` float NOT NULL,
  `project3` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `studentsubject`
--

INSERT INTO `studentsubject` (`id`, `studid`, `classid`, `att1`, `att2`, `att3`, `exam1`, `exam2`, `exam3`, `quiz1`, `quiz2`, `quiz3`, `project1`, `project2`, `project3`) VALUES
(14, '2', 8, 76, 66, 66, 78, 66, 66, 80, 66, 66, 90, 66, 66),
(15, '2', 9, 78, 78, 87, 74, 66, 88, 85, 77, 88, 90, 90, 75),
(16, '1', 9, 76, 100, 67, 90, 85, 66, 80, 90, 66, 100, 50, 66),
(22, '3', 9, 67, 77, 87, 67, 77, 87, 67, 77, 87, 67, 77, 87),
(23, '1', 4, 87, 0, 0, 98, 0, 0, 78, 0, 0, 89, 0, 0),
(24, '2', 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(25, '3', 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(26, '2', 10, 100, 90, 100, 70, 70, 75, 78, 70, 80, 80, 80, 75),
(27, '1', 10, 100, 100, 100, 80, 85, 80, 75, 90, 90, 80, 90, 95),
(28, '3', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(29, '4', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(31, '5', 4, 90, 100, 80, 75, 80, 75, 80, 80, 90, 50, 75, 90);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subject`
--

CREATE TABLE `subject` (
  `id` int(11) NOT NULL,
  `code` varchar(50) CHARACTER SET latin1 NOT NULL,
  `title` varchar(100) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `clave_inter` varchar(50) CHARACTER SET latin1 NOT NULL,
  `hrs` varchar(50) CHARACTER SET latin1 NOT NULL,
  `semestre_fk` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Volcado de datos para la tabla `subject`
--

INSERT INTO `subject` (`id`, `code`, `title`, `clave_inter`, `hrs`, `semestre_fk`) VALUES
(1, 'IT100', 'IT Fundamentals', '', '', 0),
(2, 'IT104', 'System Analysis Design', '', '', 0),
(4, 'IT103', 'Basic Programming', '', '', 0),
(5, 'IT113', 'Capstone Project', '', '', 0),
(6, 'ACF-090', 'CÃLCULO DIFERENCIAL', 'CC02', ' 3 - 2 - 5', 1),
(7, 'SCD-1008', 'Fundamentos de ProgramaciÃ³n', 'CC15 ', ' 2- 3- 5', 1),
(9, 'ACA-0907', 'TALLER DE Ã‰TICA', 'CC03', ' 0 - 4 - 4', 1),
(10, 'AEF-1041', 'MATEMÃTICAS DISCRETAS', 'CC16 ', '  3-2-5', 1),
(11, 'SCH-1024', 'TALLER DE ADMINISTRACIÃ“N', 'CC21 ', '1 - 3 - 4', 1),
(12, 'ACC-0906', 'FUNDAMENTOS DE INVESTIGACIÃ“N', 'CC04', ' 2 - 2 - 4', 1),
(13, 'ACF-0902', 'CÃLCULO INTEGRAL', 'CC10', '3  - 2 - 5', 2),
(14, 'SCD-1020', 'PROGRAMACIÃ“N ORIENTADA A OBJETOS', 'CC20', '2 - 3 - 5', 2),
(15, 'AEC-1008', 'CONTABILIDAD FINANCIERA', 'CC55', '2 - 2 - 4', 2),
(16, 'AEC-1058', 'QUÃMICA GENERAL', 'CC13', '2 - 2 - 4', 2),
(17, 'ACF-0903', 'ALGEBRA LINEAL', 'CC09', '3 - 2 - 5', 2),
(18, 'AEF-1052', 'PROBABILIDAD Y ESTADÃSTICA ', 'CC14', '3 - 2 - 5', 2),
(19, 'ACF-0904', 'CÃLCULO VECTORIAL', 'CC10', '3 - 2 -5', 3),
(20, 'AED-1026', 'ESTRUCTURA DE DATOS', 'CC26', '2 - 3 -5', 3),
(21, 'SCC-1005', 'CULTURA EMPRESARIAL', 'CC54', '2 - 2 - 4', 2),
(22, 'SCC-1013', 'INVESTIGACIÃ“N DE OPERACIONES', 'CC18', '2 - 2 - 4', 2),
(23, 'AEC-1061', 'SISTEMAS OPERATIVOS', 'CC23', '2 - 2 - 4', 3),
(24, 'SCF-1006', 'FÃSICA GENERAL', 'CC17', '3 - 2 -5', 3),
(26, 'ACF-0905', 'ECUACIONES DIFERENCIALES', 'CC01', '3 - 2 - 5', 4),
(27, 'SCD-1027', 'TÃ“PICOS AVANZADOS DE PROGRAMACIÃ“N', 'CC32', '2 - 3 - 5', 4),
(28, 'AEF-1031', 'FUNDAMENTOS DE BASE DE DATOS', 'CC40', '3 - 2 - 5', 4),
(29, 'SCC-017', 'MÃ‰TODOS NUMÃ‰RICOS', 'CC25', '2 - 2 - 4', 4),
(30, 'SCA-1026', 'TALLER DE SISTEMAS OPERATIVOS', 'CC29', '0 - 4 - 4', 4),
(31, 'SCD-1018', 'PRINCIPIOS ELÃ‰CTRICOS Y APLICACIONES', 'CC22', '2 - 3 - 5', 4),
(32, 'ACD-0908', 'DESARROLLO SUSTENTABLE', 'CC07', '2 - 3 - 5', 5),
(33, 'AEC-1034', 'FUNDAMENTOS DE TELECOMUNICACIONES', 'CC35', '2 - 2 - 4', 5),
(34, 'SCA-1025', 'TALLER DE BASE DE DATOS', 'CC44', '0 – 4 - 4', 5),
(35, 'SCD-1022', 'SIMULACIÃ“N', 'CC31', '2 - 3 - 5', 5),
(36, 'SCC-1007', 'FUNDAMENTOS DE INGENIERÃA DE SOFTWARE', 'CC24', '2 - 2 - 4', 5),
(37, 'SCD-1003', 'ARQUITECTURA DE COMPUTADORAS', 'CC28', '2 - 3 - 5', 5),
(38, 'SCD-1015', 'LENGUAJES Y AUTÃ“MATAS I', 'CC27', '2 - 3 - 5', 6),
(39, 'SCD-1021', 'REDES DE COMPUTADORAS', 'CC41', '2 - 3 - 5', 6),
(40, 'SCB-1001', 'ADMINISTRACIÃ“N DE BASE DE DATOS', 'CC47', '1 - 4 - 5', 6),
(41, 'SCC-1010', 'GRAFICACIÃ“N', 'CC38', '2 - 2 - 4', 6),
(42, 'SCD-1011', 'INGENIERÃA DE SOFTWARE', 'CC30', '2 - 3 - 5', 6),
(43, 'SCC-1014', 'LENGUAJES DE INTERFAZ', 'CC34', '2 - 2 - 4', 6),
(44, 'SCD-1016', 'LENGUAJES Y AUTÃ“MATAS II', 'CC33', '2 - 3 - 5', 7),
(45, 'SCD-1004', 'CONMUTACIÃ“N Y ENRUTAMIENTO DE REDES DE DATOS', 'CC45', '2 - 3 - 5', 7),
(46, 'RDD-1301', 'DISTRIBUCIONES LINUX', 'CC60', '2 - 3 - 5', 7),
(47, 'SCG-1009', 'GESTIÃ“N DE PROYECTOS DE SOFTWARE', 'CC36', '3 -3 - 6', 7),
(48, 'SCC-1023', 'SISTEMAS PROGRAMABLES', 'CC37', '2  - 2 - 4', 7),
(49, 'SCC-1019', 'PROGRAMACIÃ“N LÃ“GICA Y FUNCIONAL', 'CC43', '2 - 2 - 4', 8),
(50, 'SCA-1002', 'ADMINISTRACIÃ“N DE REDES', 'CC46', '0 - 4 - 4', 8),
(51, 'RDD-1302', 'SEGURIDAD INFORMÃTICA ', 'CC61', '2 - 3 - 5', 8),
(52, 'RDH-1303', 'REDES INALÃMBRICAS ', 'CC62', '1 - 3 - 4', 8),
(53, 'ACA-0909', 'TALLER DE INVESTIGACIÃ“N I', 'CC11', '0 - 4 - 4', 8),
(54, 'AEB-1055', 'PROGRAMACIÃ“N WEB', 'CC39', '1 - 4 - 5', 8),
(55, 'SCC-1012', 'INTELIGENCIA ARTIFICIAL ', 'CC42', '2 - 2 - 4', 9),
(56, 'RDM-1304', 'ADMINISTRACIÃ“N Y CONFIGURACIÃ“N DE REDES', 'CC63', '2 - 4 - 6', 9),
(57, 'RDD-1305', 'REDES CONVERGENTES Y CÃ“MPUTO', 'CC64', '2 - 3 - 5', 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `teacher`
--

CREATE TABLE `teacher` (
  `id` int(11) NOT NULL,
  `teachid` varchar(50) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `teacher`
--

INSERT INTO `teacher` (`id`, `teachid`, `fname`, `lname`) VALUES
(3, '0023-2008', 'James', 'Castillo'),
(4, '0823-0000', 'Jimmy', 'Lomocso'),
(5, '9082-2006', 'Robert', 'Quingking'),
(6, '1530', 'Rafael', 'Ramirez Rosillo'),
(7, '1344', 'Ismael ', 'Mendez Trejo'),
(8, '1234', 'ElÃ­as ', 'PerÃ©z ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `userdata`
--

CREATE TABLE `userdata` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `level` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `userdata`
--

INSERT INTO `userdata` (`id`, `username`, `password`, `fname`, `lname`, `level`) VALUES
(1, 'admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', 'admin', 'admin', 'admin'),
(11, '9082-2006', 'd033e22ae348aeb5660fc2140aec35850c4da997', 'Robert', 'Quingking', 'teacher'),
(12, '0825-2007', 'd033e22ae348aeb5660fc2140aec35850c4da997', 'Jimmy', 'Lomocso', 'student'),
(13, '0823-0000', 'd033e22ae348aeb5660fc2140aec35850c4da997', 'Jimmy', 'Lomocso', 'teacher'),
(14, '0001-2014', '2f68984ed15e11940e0345b2a3c478649b677aba', 'Cherry', 'Aguaviva', 'student'),
(15, 'TS15110010', 'b992adb26d2ab39ade8689c963c49685ddc2772c', 'ANGEL', 'ROSILLO RICO', 'student'),
(16, 'TS15110057', '904e6003e93bbf03dd9dde063167fb11c87f51d6', 'JOSE JESUS', 'BALBINO ARTEAGA', 'student'),
(17, 'TS15110036', '71505523f6f1ffeaae447e516b9c5fee27732e7e', 'JOSE LUIS', 'RODRIGUEZ ANDRADE', 'student'),
(18, 'TS14110002', 'cf21673ddf312f6a2909ab752cdb7fe8ac47239e', 'RAUL', 'CORTES RUIS', 'student'),
(19, 'TS14110003', '04966300e5448af9da66d8c2ded52c6ffe26d434', 'MIGUEL ANGEL', 'MARTINEZ PUGA', 'student'),
(20, 'TS14110044', 'b6272ed2d2a6f3120738428d5cb4b6fd21621e02', 'HECTOR ABRAHAM', 'PADILLA TIRADO', 'student'),
(21, 'TS14110027', '2a28435a4f24779d3886c4ed515585c979bfe6dc', 'CRISTIAN', 'ROJAS LARA', 'student'),
(22, 'TS13110037', 'e80c58e888e86267f538496cde3678dfc05c74c2', 'LUIS', 'MEDINA CAMPOS', 'student'),
(23, 'TS13110022', '3f1d200fcd4435501ae4ba0e04abbb710c331144', 'JOSE MANUEL', 'PERRUSQUIA FLORES', 'student'),
(24, 'TS13110006', 'a514e6c25e43c70b8ac28b9ebfa2690c4af6d6d5', 'MARIANA', 'RODRIGUEZ LULE', 'student'),
(25, 'TS13110018', '5516fcf6bcfbdb1fe2108b0f3a110d97d274cc31', 'ANTONIO DE JESUS', 'ROSILLO RICO', 'student'),
(26, '1530', '60b604c96f608f03dd0cf750cfdce0c5ebe6405a', 'Rafael', 'Ramirez Rosillo', 'teacher');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subject` (`subject`);

--
-- Indices de la tabla `reticula`
--
ALTER TABLE `reticula`
  ADD PRIMARY KEY (`id_reticula`);

--
-- Indices de la tabla `semestre`
--
ALTER TABLE `semestre`
  ADD PRIMARY KEY (`id_semestre`);

--
-- Indices de la tabla `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `studentsubject`
--
ALTER TABLE `studentsubject`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`id`),
  ADD KEY `title` (`title`);

--
-- Indices de la tabla `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `userdata`
--
ALTER TABLE `userdata`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `class`
--
ALTER TABLE `class`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT de la tabla `reticula`
--
ALTER TABLE `reticula`
  MODIFY `id_reticula` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT de la tabla `semestre`
--
ALTER TABLE `semestre`
  MODIFY `id_semestre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de la tabla `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT de la tabla `studentsubject`
--
ALTER TABLE `studentsubject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT de la tabla `subject`
--
ALTER TABLE `subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
--
-- AUTO_INCREMENT de la tabla `teacher`
--
ALTER TABLE `teacher`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `userdata`
--
ALTER TABLE `userdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;--
-- Base de datos: `test`