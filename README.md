# 🚀 **CRUD Personas API - NestJS**

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS"/>
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"/>
  <img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
  <img src="https://img.shields.io/badge/swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger"/>
</p>

## 📋 **Descripción del Proyecto**

API RESTful completa para gestión de personas, construida con **NestJS**, **TypeORM**, **PostgreSQL** y **Docker**. Este proyecto implementa un sistema CRUD (Crear, Leer, Actualizar, Eliminar) con arquitectura modular, validación de datos, documentación automática y contenerización profesional.

**Características principales:**
- ✅ CRUD completo para entidad Personas
- ✅ Arquitectura modular y escalable
- ✅ Documentación automática con Swagger
- ✅ Contenerización con Docker y Docker Compose
- ✅ Validación de datos con class-validator
- ✅ Variables de entorno para configuración
- ✅ Health checks para monitoreo
- ✅ Configuración multi-ambiente

## 🏗️ **Arquitectura del Proyecto**

```
crud-personas/
├── src/
│   ├── modules/
│   │   └── persons/
│   │       ├── entities/
│   │       │   └── person.entity.ts      # Entidad Persona
│   │       ├── dto/
│   │       │   ├── create-person.dto.ts  # DTO para creación
│   │       │   └── update-person.dto.ts  # DTO para actualización
│   │       ├── persons.controller.ts     # Controlador REST
│   │       ├── persons.service.ts        # Lógica de negocio
│   │       └── persons.module.ts         # Módulo Personas
│   ├── common/
│   │   └── database/
│   │       └── database.module.ts        # Configuración BD
│   ├── app.module.ts                     # Módulo principal
│   └── main.ts                          # Punto de entrada
├── docker/
│   ├── Dockerfile                       # Imagen Docker
│   └── docker-compose.yml               # Orquestación servicios
├── .env.example                         # Variables de entorno ejemplo
├── package.json
└── README.md
```

## 🚀 **Empezar Rápido**

### **Prerrequisitos**
- [Node.js](https://nodejs.org/) (v18 o superior)
- [Docker](https://www.docker.com/) y Docker Compose
- [PostgreSQL](https://www.postgresql.org/) (opcional, viene en Docker)

### **Instalación**

```bash
# 1. Clonar repositorio
git clone https://github.com/tu-usuario/crud-personas.git
cd crud-personas

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus configuraciones
```

### **Ejecutar con Docker (Recomendado)**

```bash
# Levantar todos los servicios (API + PostgreSQL)
docker-compose up -d

# Verificar que todo está funcionando
docker-compose ps

# Ver logs en tiempo real
docker-compose logs -f api
```

### **Ejecutar sin Docker**

```bash
# 1. Asegúrate de tener PostgreSQL corriendo
# 2. Configura las variables de entorno en .env
# 3. Ejecutar en modo desarrollo
npm run start:dev

# 4. La API estará disponible en: http://localhost:3000
```

## 📡 **Endpoints de la API**

### **Documentación Interactiva**
Una vez ejecutada la aplicación, accede a la documentación Swagger:
```
http://localhost:3000/api
```

### **Endpoints Disponibles**

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/persons` | Obtener todas las personas |
| `GET` | `/persons/:id` | Obtener una persona por ID |
| `POST` | `/persons` | Crear nueva persona |
| `PATCH` | `/persons/:id` | Actualizar persona existente |
| `DELETE` | `/persons/:id` | Eliminar persona |
| `GET` | `/health` | Estado del sistema |

### **Ejemplo de Persona**
```json
{
  "id": 1,
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "age": 30,
  "active": true,
  "createdAt": "2024-12-30T12:00:00.000Z",
  "updatedAt": "2024-12-30T12:00:00.000Z"
}
```

## 🐳 **Configuración Docker**

### **Servicios Disponibles**
| Servicio | Puerto | Descripción |
|----------|--------|-------------|
| **API NestJS** | 3000 | API principal |
| **PostgreSQL** | 5432 | Base de datos |
| **PgAdmin** | 8080 | Administración BD (opcional) |

### **Comandos Docker Útiles**
```bash
# Construir imágenes
docker-compose build

# Levantar servicios
docker-compose up -d

# Detener servicios
docker-compose down

# Ver logs
docker-compose logs -f

# Ejecutar comandos dentro del contenedor
docker-compose exec api npm run test

# Limpiar todo (contenedores, volúmenes, redes)
docker-compose down -v
```

## ⚙️ **Configuración de Entorno**

Crea un archivo `.env` basado en `.env.example`:

```env
# Servidor
PORT=3000
NODE_ENV=development

# Base de Datos PostgreSQL
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres123
DB_NAME=crud_personas

# Docker (para docker-compose)
COMPOSE_PROJECT_NAME=crud-personas
```

## 🧪 **Testing**

```bash
# Ejecutar tests unitarios
npm run test

# Ejecutar tests en modo watch
npm run test:watch

# Ejecutar tests e2e
npm run test:e2e

# Ver cobertura de tests
npm run test:cov
```

## 📊 **Health Checks**

La API incluye endpoints de salud para monitoreo:

```bash
# Health check básico
GET http://localhost:3000/health

# Health check detallado
GET http://localhost:3000/health/detailed
```

Respuesta esperada:
```json
{
  "status": "ok",
  "timestamp": "2024-12-30T12:00:00.000Z",
  "services": {
    "database": "connected",
    "memory": "healthy"
  }
}
```

## 🔧 **Scripts NPM Disponibles**

| Script | Descripción |
|--------|-------------|
| `npm run start` | Inicia la aplicación en producción |
| `npm run start:dev` | Inicia con hot-reload para desarrollo |
| `npm run start:debug` | Inicia en modo debug |
| `npm run start:prod` | Compila y ejecuta en producción |
| `npm run build` | Compila TypeScript a JavaScript |
| `npm run test` | Ejecuta tests unitarios |
| `npm run test:watch` | Ejecuta tests en modo watch |
| `npm run test:cov` | Genera reporte de cobertura |
| `npm run test:e2e` | Ejecuta tests end-to-end |
| `npm run lint` | Ejecuta linter |
| `npm run format` | Formatea el código |

## 🗄️ **Base de Datos**

### **Migraciones**
```bash
# Generar migración
npm run migration:generate -- -n NombreMigracion

# Ejecutar migraciones
npm run migration:run

# Revertir migración
npm run migration:revert
```

### **Diagrama de Entidad Persona**
```sql
CREATE TABLE persons (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  age INTEGER CHECK (age >= 0),
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🛡️ **Características de Seguridad**

- ✅ Validación automática de datos de entrada
- ✅ Sanitización de parámetros
- ✅ Configuración CORS para desarrollo/producción
- ✅ Rate limiting configurable
- ✅ Headers de seguridad HTTP
- ✅ Variables de entorno para datos sensibles

## 📈 **Métricas y Monitoreo**

La API incluye:
- Logs estructurados por niveles (debug, info, warn, error)
- Métricas de rendimiento
- Health checks periódicos
- Alertas configurables

## 🔄 **Workflow de Desarrollo**

1. **Clona el repositorio**
2. **Configura variables de entorno** (`cp .env.example .env`)
3. **Instala dependencias** (`npm install`)
4. **Levanta servicios con Docker** (`docker-compose up -d`)
5. **Ejecuta migraciones** (`npm run migration:run`)
6. **Desarrolla con hot-reload** (`npm run start:dev`)
7. **Ejecuta tests** (`npm run test`)
8. **Crea Pull Request**

## 🤝 **Contribuir**

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📚 **Recursos Adicionales**

- [Documentación NestJS](https://docs.nestjs.com/)
- [TypeORM Documentation](https://typeorm.io/)
- [Docker Documentation](https://docs.docker.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## 👥 **Autores**

- **Tu Nombre** - [@tu-usuario](https://github.com/tu-usuario)

## 📄 **Licencia**

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 **Agradecimientos**

- [NestJS Team](https://nestjs.com/) por el framework increíble
- Todos los contribuidores que han ayudado a mejorar este proyecto

---

<p align="center">
  <sub>Construido con ❤️ usando <a href="https://nestjs.com/">NestJS</a></sub>
</p>

## 📞 **Soporte**

Para soporte, abre un issue en el repositorio o únete a nuestro canal de Discord.

---

⭐ **¿Te gusta este proyecto? ¡Dale una estrella en GitHub!**
