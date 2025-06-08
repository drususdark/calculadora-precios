import { Calculator } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-6 px-4 shadow-lg">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Calculator className="h-8 w-8" />
          <h1 className="text-2xl md:text-3xl font-bold">
            Calculadora de Precios de Venta
          </h1>
        </div>
        <p className="text-blue-100 text-sm md:text-base">
          Herramienta para calcular el precio de venta de productos basado en el costo neto.
        </p>
      </div>
    </header>
  )
}
