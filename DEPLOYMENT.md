# 🚀 Guía de Despliegue - Calculadora de Precios

Esta guía te ayudará a subir tu proyecto a GitHub y desplegarlo en Vercel paso a paso.

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener:
- [ ] Una cuenta en [GitHub](https://github.com)
- [ ] Una cuenta en [Vercel](https://vercel.com)
- [ ] Git instalado en tu computadora
- [ ] El proyecto descargado en tu computadora

## 📂 Paso 1: Preparar el Proyecto

1. **Descarga el proyecto** desde el sandbox a tu computadora local
2. **Abre una terminal** en la carpeta del proyecto
3. **Verifica que tienes todos los archivos**:
   ```
   calculadora-precios/
   ├── src/
   ├── public/
   ├── package.json
   ├── README.md
   ├── .gitignore
   └── LICENSE
   ```

## 🐙 Paso 2: Subir a GitHub

### 2.1 Crear Repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el botón **"New"** (verde) o **"+"** → **"New repository"**
3. Configura tu repositorio:
   - **Repository name**: `calculadora-precios` (o el nombre que prefieras)
   - **Description**: `Calculadora web profesional para calcular precios de venta con márgenes`
   - **Visibility**: Public (recomendado) o Private
   - **NO marques** "Add a README file" (ya tienes uno)
   - **NO marques** "Add .gitignore" (ya tienes uno)
   - **NO marques** "Choose a license" (ya tienes uno)
4. Haz clic en **"Create repository"**

### 2.2 Subir el Código

En tu terminal, dentro de la carpeta del proyecto:

```bash
# 1. Inicializar Git (si no está inicializado)
git init

# 2. Agregar todos los archivos
git add .

# 3. Hacer el primer commit
git commit -m "Initial commit: Calculadora de precios profesional"

# 4. Agregar el repositorio remoto (reemplaza TU-USUARIO con tu nombre de usuario)
git remote add origin https://github.com/TU-USUARIO/calculadora-precios.git

# 5. Cambiar a la rama main (si es necesario)
git branch -M main

# 6. Subir el código
git push -u origin main
```

## ☁️ Paso 3: Desplegar en Vercel

### 3.1 Conectar GitHub con Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"Sign Up"** o **"Login"**
3. Selecciona **"Continue with GitHub"**
4. Autoriza a Vercel para acceder a tu cuenta de GitHub

### 3.2 Crear Nuevo Proyecto

1. En el dashboard de Vercel, haz clic en **"New Project"**
2. Busca tu repositorio `calculadora-precios`
3. Haz clic en **"Import"** junto a tu repositorio

### 3.3 Configurar el Despliegue

Vercel detectará automáticamente que es un proyecto React/Vite. Verifica que la configuración sea:

- **Framework Preset**: Vite
- **Build Command**: `pnpm run build` (o `npm run build`)
- **Output Directory**: `dist`
- **Install Command**: `pnpm install` (o `npm install`)

### 3.4 Desplegar

1. Haz clic en **"Deploy"**
2. Espera a que termine el proceso (2-3 minutos)
3. ¡Listo! Tu aplicación estará disponible en una URL como:
   ```
   https://calculadora-precios-tu-usuario.vercel.app
   ```

## 🔄 Actualizaciones Futuras

Para actualizar tu aplicación:

1. **Haz cambios** en tu código local
2. **Sube los cambios** a GitHub:
   ```bash
   git add .
   git commit -m "Descripción de los cambios"
   git push
   ```
3. **Vercel desplegará automáticamente** los cambios

## 🛠️ Configuraciones Adicionales

### Dominio Personalizado

1. En Vercel, ve a tu proyecto
2. Haz clic en **"Settings"** → **"Domains"**
3. Agrega tu dominio personalizado

### Variables de Entorno

Si necesitas variables de entorno:

1. En Vercel, ve a **"Settings"** → **"Environment Variables"**
2. Agrega las variables necesarias

### Analytics

Para habilitar analytics:

1. En Vercel, ve a **"Analytics"**
2. Haz clic en **"Enable"**

## 🆘 Solución de Problemas

### Error: "Build failed"
- Verifica que el comando de build sea correcto
- Revisa los logs de error en Vercel
- Asegúrate de que todas las dependencias estén en `package.json`

### Error: "Page not found"
- Verifica que el directorio de salida sea `dist`
- Asegúrate de que `index.html` esté en la carpeta `dist`

### Error de Git
- Verifica que tengas permisos en el repositorio
- Asegúrate de estar en la rama correcta
- Verifica que la URL del repositorio sea correcta

## 📞 Soporte

Si tienes problemas:

1. **GitHub**: Revisa la [documentación de GitHub](https://docs.github.com)
2. **Vercel**: Consulta la [documentación de Vercel](https://vercel.com/docs)
3. **Proyecto**: Crea un issue en tu repositorio

---

¡Felicidades! 🎉 Tu calculadora de precios ya está en línea y lista para usar.

