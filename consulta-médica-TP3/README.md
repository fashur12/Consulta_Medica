# 🏥 Proyecto: Clínica Salud+ - Gestión de Turnos Médicos

## 🔧 Tecnologías utilizadas

- Backend: Node.js + Express
- Motor de plantillas: EJS
- Autenticación: JWT
- Validación de datos: Joi
- Herramientas de testing de API: Postman
- Base de datos: SQLite3 (la del repositorio original)

# 🧪 Pruebas en Postman
Probamos las rutas principales con Postman para validar que el backend funcione correctamente:

- Crear pacientes
- Hacer login y obtener token
- Crear turnos (protegido con JWT)
- Consultar turnos por paciente
- Cancelar turnos

# INSTALACIÓN DEL PROYECTO

1. Lo primero seria clonar el repo

```js
git clone ...................
```

2. Instalar sus dependencias

```js
nmp install
```

3. Iniciar el proyecto

```js
npm run dev
```

# ENDPOINTS

## Endpoint para obtener el token y conseguir el auth

`GET /api/v1/login`

