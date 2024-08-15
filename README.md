<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

### Historias de Usuario
Historia de Usuario 1: Configuración Inicial y Estructura del Proyecto.

Preguntas:

#### ¿Qué propósito cumple el archivo main.ts en un proyecto NestJS y por qué es crucial en la configuración inicial? Puedes leer más sobre el archivo aquí en la sección inferior de notas.
- El principal proposito que cumple el archivo main es la ejecucion del programa es el primer archivo en ejecutarse en un programa 

#### ¿Qué diferencia existe entre app.module.ts y app.controller.ts? ¿Cómo se relacionan estos archivos con la modularidad y la estructura de la aplicación? Puedes leer sobre el archivo aquí o aquí.
- app.module.ts es nuestra conexion a la base de datos donde vamos a agregar entidades y syncronizar con la base de datos.
- app.controller.ts es el archivo encargado de manejar las solicituces HTTP y asociar rutas especificas

#### ¿Por qué crees que es importante modularizar la aplicación separando funcionalidades en diferentes módulos?
- Es importante modularizar la aplicacion para tener un codigo bien estructurado, con una facilidad escalable pudiendo reusar componentes y tener una arquitectura organizacional clara.

#### ¿Cómo crees que afecta la modularidad al mantenimiento y escalabilidad de la aplicación?
- Permite una organizacvion del codigo con una estructura clara y precisa, permitiendo tambien realizar actualizaciones independeintes y un mantenimiento reducido, al tener menor impacto en el sistema global las modificaciones son localizadas.

#### Despues de crear los archivos de los módulos, ¿qué archivos se generan y cómo se relacionan con los módulos creados?
- Para que estos archivos se relacionen hay que hacerlo atravez de la herramienta ORM de type/orm

#### ¿Qué sucede si defines incorrectamente un decorador en un controlador? ¿Cómo afecta esto a la funcionalidad del endpoint?
- La consecuencia sera que el endpoint no sera accesible  y el resultado sera en errores 404 o 405.

#### ¿Por qué es importante manejar rutas dinámicas (por ejemplo, @Get(':id')) en aplicaciones que interactúan con bases de datos?
- en la creacion de una API REST tener rutas dinamicas permite identificar y acceder a recursos especificos, ademas de facilitar la implementacion de operaciones CRUD 

##### Historia de Usuario 2: Implementación de la Lógica de Negocio y Seguridad
##### ¿Qué ventajas tiene manejar la lógica de negocio en servicios en lugar de controladores?
- De esta forma se permite tener una separacion de responsabilidades mas eficiente, como tambien poder reutilizar el codigo 

##### ¿Cómo se relaciona la inyección de dependencias con la modularidad y la capacidad de prueba de la aplicación?
- Facilita la modularidad al permitir que los módulos dependan de servicios y componentes sin necesidad de conocer cómo se crean esos servicios. Los módulos solo interactúan con interfaces o contratos, no con implementaciones concretas.

##### ¿Por qué es crucial validar los datos de entrada en una aplicación que maneja transacciones financieras?
- Es crucial porque se puede introducir codigo malicioso que afecte el desempeño denuestra aplicacion asi como manejar las peticiones que se realizan a estos 

##### ¿Qué podría suceder si un decorador está mal colocado o si no se aplican los pipes correctamente?
- Lo principal es que se presentaran errores de sintaxis, perdida de la funcionalidad, dificultades en la depuracion y no se podrian prevenir errores en la aplicaciòn