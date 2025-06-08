# 📊 Calculadora de Precios de Venta

Una calculadora web profesional, moderna y responsiva para calcular el precio de venta de productos basado en el costo neto. Diseñada especialmente para emprendedores en Chile, con soporte para otros países.

## 🚀 Características

### ✅ Funcionalidades Principales
- **Cálculo de precios**: Ingresa el costo neto y obtén el precio de venta con margen
- **Múltiples márgenes**: Selecciona entre 20%, 25%, 30%, 35% y 40% de ganancia
- **Cálculo automático**: Muestra precio neto, IVA, precio final y ganancia en tiempo real
- **Modo inverso**: Ingresa el precio final deseado y calcula el costo neto necesario
- **Copiar resultados**: Botón para copiar todos los cálculos al portapapeles

### ✅ Características Técnicas
- **Responsivo**: Optimizado para móviles, tablets y desktop
- **Validación**: Solo acepta números, no permite valores negativos
- **Tooltips**: Textos de ayuda explicando cada concepto
- **IVA configurable**: Cambia el porcentaje de IVA (19% por defecto para Chile)
- **Interfaz moderna**: Diseño limpio con Tailwind CSS y shadcn/ui

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework de JavaScript
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS
- **shadcn/ui** - Componentes de UI
- **Lucide React** - Iconos
- **JavaScript** - Lenguaje de programación

## 📦 Instalación

### Prerrequisitos
- Node.js 18+ 
- pnpm (recomendado) o npm

### Pasos de instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/calculadora-precios.git
   cd calculadora-precios
   ```

2. **Instala las dependencias**
   ```bash
   pnpm install
   # o
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   pnpm run dev
   # o
   npm run dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:5173
   ```

## 🚀 Despliegue en Vercel

### Opción 1: Desde GitHub (Recomendado)

1. **Sube tu código a GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Conecta con Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub
   - Haz clic en "New Project"
   - Selecciona tu repositorio
   - Vercel detectará automáticamente que es un proyecto React/Vite
   - Haz clic en "Deploy"

3. **Configuración automática**
   - Build Command: `pnpm run build` (o `npm run build`)
   - Output Directory: `dist`
   - Install Command: `pnpm install` (o `npm install`)

### Opción 2: Desde CLI de Vercel

1. **Instala Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Inicia sesión**
   ```bash
   vercel login
   ```

3. **Despliega**
   ```bash
   vercel --prod
   ```

## 📱 Uso de la Aplicación

### Modo Normal (Costo → Precio)
1. Ingresa el **costo neto** del producto (sin IVA)
2. Selecciona el **margen de ganancia** deseado
3. Ajusta el **porcentaje de IVA** si es necesario
4. Ve los resultados calculados automáticamente:
   - Precio de venta neto
   - IVA aplicado
   - Precio final al público
   - Ganancia neta en pesos
   - Porcentaje de ganancia real

### Modo Inverso (Precio → Costo)
1. Cambia al **modo inverso**
2. Ingresa el **precio final** que quieres cobrar
3. Selecciona el **margen de ganancia** deseado
4. Ve el **costo neto máximo** que puedes pagar por el producto

### Copiar Resultados
- Haz clic en **"Copiar Resultados"** para copiar todos los cálculos al portapapeles
- Perfecto para pegar en WhatsApp, email o documentos

## 🧮 Fórmulas de Cálculo

### Modo Normal
```
Precio de Venta Neto = Costo Neto / (1 - Margen)
IVA = Precio de Venta Neto × (IVA% / 100)
Precio Final = Precio de Venta Neto + IVA
Ganancia Neta = Precio de Venta Neto - Costo Neto
% Ganancia Real = (Ganancia Neta / Precio Final) × 100
```

### Modo Inverso
```
Precio de Venta Neto = Precio Final / (1 + IVA% / 100)
Costo Neto Posible = Precio de Venta Neto × (1 - Margen)
Ganancia Neta = Precio de Venta Neto - Costo Neto Posible
% Ganancia Real = (Ganancia Neta / Precio Final) × 100
```

## 📁 Estructura del Proyecto

```
calculadora-precios/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/          # Componentes de shadcn/ui
│   │   ├── Calculator.jsx
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Personalización

### Cambiar Márgenes Predefinidos
Edita el array `margenes` en `src/components/Calculator.jsx`:

```javascript
const margenes = [
  { valor: 0.15, etiqueta: '15%' },
  { valor: 0.20, etiqueta: '20%' },
  { valor: 0.25, etiqueta: '25%' },
  // Agrega más márgenes aquí
]
```

### Cambiar IVA por Defecto
Modifica el estado inicial en `src/components/Calculator.jsx`:

```javascript
const [ivaPercent, setIvaPercent] = useState(21) // Para España
```

### Personalizar Colores
Edita las variables CSS en `src/App.css` o modifica la configuración de Tailwind.

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ve el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [React](https://reactjs.org/) - Framework de JavaScript
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [shadcn/ui](https://ui.shadcn.com/) - Componentes de UI
- [Lucide](https://lucide.dev/) - Iconos

---

**Hecho con ❤️ para emprendedores**

