# Servicio Web de Registro e Inicio de Sesión

**Evidencia:** GA7-220501096-AA5-EV01 — Diseño y desarrollo de servicios web - caso.

**Programa:** Tecnólogo en Análisis y Desarrollo de Software (ADSO)

**Ficha:** 3186635

## Aprendices

- Johan Camilo Rodríguez Bautista
- Juan David Salamanca Cristancho
- Santiago Cepeda Fonseca

## Descripción

Servicio web desarrollado con Node.js y Express para resolver el caso solicitado en la evidencia. Permite registrar un usuario y validar sus credenciales mediante un servicio de inicio de sesión.

Cuando la autenticación es correcta, el servicio devuelve **"Autenticación satisfactoria."**. Cuando las credenciales no son correctas, devuelve **"Error en la autenticación."**.

El código contiene comentarios y se organizó por rutas, controladores y servicios para facilitar su mantenimiento.

## Tecnologías

- Node.js
- Express
- JavaScript
- bcryptjs
- JSON
- Git
- GitHub
- Visual Studio Code

## Estructura

```text
AA5_EV01_AUTH/
├── data/
│   └── usuarios.json
├── src/
│   ├── controllers/
│   │   └── authController.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── services/
│   │   └── userService.js
│   └── server.js
├── .gitignore
├── ENLACE_REPOSITORIO.txt
├── package.json
└── README.md
```

## Instalación

1. Instalar Node.js.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Abrir una terminal en la carpeta del proyecto.
4. Ejecutar:

```bash
npm install
```

## Ejecución

```bash
npm start
```

El servicio queda disponible en:

```text
http://localhost:3000
```

## Endpoints

### Comprobar servicio

`GET /`

### Registrar usuario

`POST /api/auth/register`

Body JSON:

```json
{
  "email": "usuario@correo.com",
  "password": "Clave123"
}
```

Respuesta esperada:

```json
{
  "ok": true,
  "message": "Usuario registrado correctamente."
}
```

### Iniciar sesión

`POST /api/auth/login`

Body JSON:

```json
{
  "email": "usuario@correo.com",
  "password": "Clave123"
}
```

Respuesta correcta:

```json
{
  "ok": true,
  "message": "Autenticación satisfactoria."
}
```

Respuesta con credenciales incorrectas:

```json
{
  "ok": false,
  "message": "Error en la autenticación."
}
```

## Pruebas sugeridas para la evidencia

1. Iniciar el servidor.
2. Probar `GET /` y tomar captura.
3. Registrar un usuario con `POST /api/auth/register` y tomar captura.
4. Iniciar sesión con las credenciales correctas y tomar captura del mensaje de autenticación satisfactoria.
5. Intentar iniciar sesión con una contraseña incorrecta y tomar captura del error en la autenticación.
6. Intentar registrar nuevamente el mismo correo y tomar captura de la validación.

Las pruebas pueden realizarse con Postman, Thunder Client o una herramienta equivalente para solicitudes HTTP.

## Control de versiones

El proyecto debe administrarse con Git y publicarse en GitHub. Se recomienda realizar commits separados para la creación del proyecto, desarrollo del servicio y documentación.

## Nota de seguridad

Para la evidencia se utiliza un archivo JSON como almacenamiento local. Las contraseñas se almacenan mediante hash con bcryptjs, no como texto plano. Para un sistema real se recomienda utilizar una base de datos, variables de entorno, HTTPS y mecanismos de autenticación adicionales.
