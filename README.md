# Contact Microservice

Este repositorio contiene un microservicio desarrollado con **NestJS** para la gestión de contactos. Es un componente independiente que forma parte de una arquitectura de microservicios y está diseñado para ser modular, escalable y fácil de mantener.

---

## Características

- CRUD completo para la gestión de contactos.
- Arquitectura modular basada en **NestJS**.
- Preparado para contenedorización con Docker.
- Uso de TypeScript para un desarrollo tipado y robusto.
- Configurable mediante variables de entorno.

---

## Requisitos Previos

- **Node.js** (versión 18 o superior).
- **npm** (versión 8 o superior) o **yarn**.
- **Docker** y **Docker Compose** (opcional, para ejecutar en contenedores).

---

## Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/GermanSan2002/contact-microservice.git
   cd contact-microservice
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   # o usando yarn
   yarn install
   ```

3. **Configurar variables de entorno:**
   Crear un archivo `.env` en la raíz del proyecto y definir las siguientes variables:
   ```env
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USER=your_user
   DATABASE_PASSWORD=your_password
   DATABASE_NAME=your_database
   PORT=3000
   ```

4. **Ejecutar migraciones de base de datos:** (si aplica)
   ```bash
   npm run migration:run
   ```

---

## Ejecución

### Desarrollo
Para ejecutar el proyecto en modo de desarrollo:
```bash
npm run start:dev
```
El servidor estará disponible en `http://localhost:3000` (o el puerto definido en las variables de entorno).

### Producción
Para compilar y ejecutar en producción:
```bash
npm run build
npm run start:prod
```

### Uso con Docker
Si prefieres ejecutar el microservicio en un contenedor Docker:
```bash
docker-compose up --build
```
Esto levantará el servicio y las dependencias (como la base de datos) especificadas en el archivo `docker-compose.yml`.

---

## Endpoints Principales

| Método | Endpoint            | Descripción                 |
|--------|---------------------|-----------------------------|
| GET    | `/contacts`         | Obtener todos los contactos |
| GET    | `/contacts/:id`     | Obtener un contacto por ID  |
| POST   | `/contacts`         | Crear un nuevo contacto     |
| PUT    | `/contacts/:id`     | Actualizar un contacto por ID |
| DELETE | `/contacts/:id`     | Eliminar un contacto por ID |

**Nota:** La API usa JSON para las solicitudes y respuestas.

---

## Pruebas

Para ejecutar las pruebas:
```bash
npm run test
```
Esto ejecutará las pruebas unitarias y de integración configuradas en el proyecto.

---

## Mejoras Futuras

- Implementar un sistema de autenticación y autorización.
- Mejorar el manejo de errores y registros.
- Agregar más pruebas unitarias y de integración.

---

## Contribuciones

Si deseas contribuir a este proyecto, sigue los pasos a continuación:
1. Haz un fork del repositorio.
2. Crea una rama nueva para tu funcionalidad o corrección: `git checkout -b feature/nueva-funcionalidad`.
3. Realiza tus cambios y haz un commit: `git commit -m "Agrega nueva funcionalidad"`.
4. Envía un pull request a este repositorio.

---

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

## Contacto

Para preguntas o soporte, puedes contactar al propietario del repositorio a través de GitHub.