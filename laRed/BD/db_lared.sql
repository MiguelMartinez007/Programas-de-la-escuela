create database db_lared;

use db_lared;

-- Tabla de usuarios
create table usuario(
	id_usuario int not null auto_increment,
    nombre varchar(60) not null,
    pass varchar(250) not null,
    activo varchar(255) not null,
    primary key (id_usuario)
);

-- Tabla de mensajes del chat
create table chat(
	id_chat int not null auto_increment,
	remitente_fk int(60) not null,
	destinatario_fk int(60) not null,
	direccionMsg varchar(30) not null,
	fecha varchar(40) not null,
	primary key (id_chat),
	index index_usuario_remitente (remitente_fk),
	constraint remitente_fk
		foreign key (remitente_fk) references usuario (id_usuario),
	index index_usuario_destinatario (destinatario_fk),
	constraint destinatario_fk
		foreign key (destinatario_fk) references usuario (id_usuario)
);

insert into usuario (nombre,pass,activo) values('Admin','46584658','1');