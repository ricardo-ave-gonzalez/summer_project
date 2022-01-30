create database `summerproject`;
use `summerproject`;

create table `usuarios`(
    `id` varchar(36),
    `email` varchar(40) not null,
    `password` varchar(250) not null -- 250 para bcrypt
);

alter table `usuarios`
    add primary key (id);

INSERT INTO `usuarios` (`id`,`email`,`password`)
    VALUES (uuid(), 'name@gmail.com', '1234');
