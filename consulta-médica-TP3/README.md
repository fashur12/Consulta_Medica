# 🏥 Proyecto: Clínica Salud+ - Gestión de Turnos Médicos

## 🔧 Tecnologías utilizadas

- Backend: Node.js + Express
- Motor de plantillas: EJS
- Autenticación: JWT
- Validación de datos: Joi
- Herramientas de testing de API: Postman
- Base de datos: SQLite3 

# 🧪 Pruebas en Postman
Probamos las rutas principales con Postman para validar que el backend funcione correctamente:

- Crear pacientes
- Hacer login y obtener token
- Crear turnos (protegido con JWT)
- Consultar turnos por paciente
- Cancelar turnos

# ORGANIZACION DE LAS VISTAS

![Imagen de WhatsApp 2025-06-08 a las 19 56 54_3422273b](https://github.com/user-attachments/assets/41e87e84-26e0-4e37-a5fc-d13c549135e4)
![Imagen de WhatsApp 2025-06-08 a las 19 57 03_790b3b66](https://github.com/user-attachments/assets/453259f3-c603-45c4-ad0e-a89a3de5d1c8)
![Imagen de WhatsApp 2025-06-08 a las 19 57 09_8fef34b1](https://github.com/user-attachments/assets/8cf5f4cc-e489-4347-9592-d233f26be266)

# ENDPOINTS

## Endpoint para obtener el token y conseguir el auth

`GET /api/v1/login`
<imagen> explicacion


## Endopint para **pacientes**
`GET /api/v1/pacientes`
<imagen> explicacion

`DELETE /api/v1/paceintes/:id`
<imagen> explicacion

`PUT /api/v1/pacientes/:id`
<imagen> explicacion

`POST /api/v1/pacientes`
<imagen> explicacion

## Endpoint para **turnos**
`GET /api/v1/turnos`
<imagen> explicacion

# INSTALACIÓN DEL PROYECTO

1. Lo primero seria clonar el repo

```js
git clone https://github.com/santozzi/practico3progra3
```

2.Instalar

```ruby
node https://nodejs.org/es
```

3. Instalar sus dependencias

```ruby
npm install
npm install Morgan
npm install joi
npm i jasonwebtoken
npm install sqlite3
npm install dotenv
```

4. Iniciar el proyecto

```ruby
npm run dev
```

