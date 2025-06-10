import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Switch } from '@/components/ui/switch'
import { 
  DollarSign, 
  TrendingUp, 
  Copy, 
  Info, 
  Calculator as CalculatorIcon,
  ArrowRightLeft
} from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export function Calculator() {
  // Estados para el modo normal
  const [costoNeto, setCostoNeto] = useState('')
  const [margenSeleccionado, setMargenSeleccionado] = useState(0.30) // 30% por defecto
  const [ivaPercent, setIvaPercent] = useState(19)
  const [ivaEnabled, setIvaEnabled] = useState(true)
  
  // Estados para el modo inverso
  const [precioFinal, setPrecioFinal] = useState('')
  
  // Estado para el modo activo
  const [modoActivo, setModoActivo] = useState('normal')
  
  // Estados para los resultados
  const [resultados, setResultados] = useState({
    precioVentaNeto: 0,
    iva: 0,
    precioFinalPublico: 0,
    gananciaNeta: 0,
    porcentajeGananciaReal: 0
  })

  // Márgenes predefinidos
  const margenes = [
    { valor: 0.20, etiqueta: '20%' },
    { valor: 0.25, etiqueta: '25%' },
    { valor: 0.30, etiqueta: '30%' },
    { valor: 0.35, etiqueta: '35%' },
    { valor: 0.40, etiqueta: '40%' }
  ]

  // Función para calcular en modo normal
  const calcularModoNormal = () => {
    const costo = parseFloat(costoNeto) || 0
    if (costo <= 0) {
      setResultados({
        precioVentaNeto: 0,
        iva: 0,
        precioFinalPublico: 0,
        gananciaNeta: 0,
        porcentajeGananciaReal: 0
      })
      return
    }

    const precioVentaNeto = costo / (1 - margenSeleccionado)
    const iva = ivaEnabled ? precioVentaNeto * (ivaPercent / 100) : 0
    const precioFinalPublico = precioVentaNeto + iva
    const gananciaNeta = precioVentaNeto - costo
    const porcentajeGananciaReal = (gananciaNeta / precioFinalPublico) * 100

    setResultados({
      precioVentaNeto: Math.round(precioVentaNeto),
      iva: Math.round(iva),
      precioFinalPublico: Math.round(precioFinalPublico),
      gananciaNeta: Math.round(gananciaNeta),
      porcentajeGananciaReal: Math.round(porcentajeGananciaReal * 100) / 100
    })
  }

  // Función para calcular en modo inverso
  const calcularModoInverso = () => {
    const precioFinalInput = parseFloat(precioFinal) || 0
    if (precioFinalInput <= 0) {
      setResultados({
        precioVentaNeto: 0,
        iva: 0,
        precioFinalPublico: 0,
        gananciaNeta: 0,
        porcentajeGananciaReal: 0
      })
      return
    }

    const precioVentaNeto = ivaEnabled ? precioFinalInput / (1 + (ivaPercent / 100)) : precioFinalInput
    const costoNetoPosible = precioVentaNeto * (1 - margenSeleccionado)
    const iva = ivaEnabled ? precioVentaNeto * (ivaPercent / 100) : 0
    const gananciaNeta = precioVentaNeto - costoNetoPosible
    const porcentajeGananciaReal = (gananciaNeta / precioFinalInput) * 100

    setResultados({
      precioVentaNeto: Math.round(precioVentaNeto),
      iva: Math.round(iva),
      precioFinalPublico: Math.round(precioFinalInput),
      gananciaNeta: Math.round(gananciaNeta),
      porcentajeGananciaReal: Math.round(porcentajeGananciaReal * 100) / 100,
      costoNetoPosible: Math.round(costoNetoPosible)
    })
  }

  // Efecto para recalcular cuando cambian los valores
  useEffect(() => {
    if (modoActivo === 'normal') {
      calcularModoNormal()
    } else {
      calcularModoInverso()
    }
  }, [costoNeto, margenSeleccionado, ivaPercent, ivaEnabled, precioFinal, modoActivo])

  // Función para copiar resultados
  const copiarResultados = () => {
    const ivaText = ivaEnabled ? `IVA (${ivaPercent}%): $${resultados.iva.toLocaleString()} CLP\n` : ''
    
    const texto = modoActivo === 'normal' 
      ? `Calculadora de Precios - Resultados:
${ivaEnabled ? 'Costo Neto' : 'Costo del Producto'}: $${parseInt(costoNeto).toLocaleString()} CLP
Margen: ${(margenSeleccionado * 100)}%
Precio de Venta Neto: $${resultados.precioVentaNeto.toLocaleString()} CLP
${ivaText}Precio Final al Público: $${resultados.precioFinalPublico.toLocaleString()} CLP
Ganancia Neta: $${resultados.gananciaNeta.toLocaleString()} CLP
% Ganancia Real: ${resultados.porcentajeGananciaReal}%`
      : `Calculadora de Precios - Modo Inverso:
Precio Final Deseado: $${parseInt(precioFinal).toLocaleString()} CLP
Margen: ${(margenSeleccionado * 100)}%
Precio de Venta Neto: $${resultados.precioVentaNeto.toLocaleString()} CLP
Costo Neto Posible: $${resultados.costoNetoPosible?.toLocaleString()} CLP
${ivaText}Ganancia Neta: $${resultados.gananciaNeta.toLocaleString()} CLP
% Ganancia Real: ${resultados.porcentajeGananciaReal}%`

    navigator.clipboard.writeText(texto).then(() => {
      alert('Resultados copiados al portapapeles')
    })
  }

  // Función para validar entrada numérica
  const validarNumero = (valor) => {
    return valor.replace(/[^0-9]/g, '')
  }

  return (
    <TooltipProvider>
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Selector de Modo */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowRightLeft className="h-5 w-5" />
              Modo de Cálculo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={modoActivo} onValueChange={setModoActivo}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="normal">Normal (Costo → Precio)</TabsTrigger>
                <TabsTrigger value="inverso">Inverso (Precio → Costo)</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>

        {/* Formulario de Entrada */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalculatorIcon className="h-5 w-5" />
              Datos de Entrada
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {modoActivo === 'normal' ? (
              <div className="space-y-2">
                <Label htmlFor="costo-neto" className="flex items-center gap-2">
                  {ivaEnabled ? 'Costo Neto (sin IVA)' : 'Costo del Producto'}
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{ivaEnabled ? 'El precio que te cuesta el producto sin incluir el IVA' : 'El precio que te cuesta el producto'}</p>
                    </TooltipContent>
                  </Tooltip>
                </Label>
                <div className="relative">
                  <Input
                    id="costo-neto"
                    type="text"
                    value={costoNeto}
                    onChange={(e) => setCostoNeto(validarNumero(e.target.value))}
                    placeholder="Ej: 10000"
                    className="pr-12"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                    CLP
                  </span>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="precio-final" className="flex items-center gap-2">
                  Precio Final Deseado {ivaEnabled ? '(con IVA)' : ''}
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>El precio final que quieres cobrar al cliente</p>
                    </TooltipContent>
                  </Tooltip>
                </Label>
                <div className="relative">
                  <Input
                    id="precio-final"
                    type="text"
                    value={precioFinal}
                    onChange={(e) => setPrecioFinal(validarNumero(e.target.value))}
                    placeholder="Ej: 15000"
                    className="pr-12"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                    CLP
                  </span>
                </div>
              </div>
            )}

            {/* Selector de Margen */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                Margen de Ganancia
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Porcentaje de ganancia que quieres obtener sobre el costo</p>
                  </TooltipContent>
                </Tooltip>
              </Label>
              <div className="flex flex-wrap gap-2">
                {margenes.map((margen) => (
                  <Button
                    key={margen.valor}
                    variant={margenSeleccionado === margen.valor ? "default" : "outline"}
                    size="sm"
                    onClick={() => setMargenSeleccionado(margen.valor)}
                  >
                    {margen.etiqueta}
                  </Button>
                ))}
              </div>
            </div>

            {/* Toggle y Selector de IVA */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2">
                  Incluir IVA
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Activa o desactiva el cálculo del IVA en los precios</p>
                    </TooltipContent>
                  </Tooltip>
                </Label>
                <Switch
                  checked={ivaEnabled}
                  onCheckedChange={setIvaEnabled}
                />
              </div>
              
              {ivaEnabled && (
                <div className="space-y-2">
                  <Label htmlFor="iva" className="flex items-center gap-2">
                    IVA (%)
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Porcentaje de IVA aplicable (19% para Chile)</p>
                      </TooltipContent>
                    </Tooltip>
                  </Label>
                  <Input
                    id="iva"
                    type="number"
                    value={ivaPercent}
                    onChange={(e) => setIvaPercent(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-24"
                    min="0"
                    max="100"
                  />
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Resultados */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Resultados
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Precio de Venta Neto:</span>
                </div>
                <div className="text-2xl font-bold text-green-600">
                  ${resultados.precioVentaNeto.toLocaleString()} CLP
                </div>
              </div>

              {ivaEnabled && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">IVA ({ivaPercent}%):</span>
                  </div>
                  <div className="text-xl font-semibold text-blue-600">
                    ${resultados.iva.toLocaleString()} CLP
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Precio Final al Público:</span>
                </div>
                <div className="text-2xl font-bold text-purple-600">
                  ${resultados.precioFinalPublico.toLocaleString()} CLP
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Ganancia Neta:</span>
                </div>
                <div className="text-xl font-semibold text-orange-600">
                  ${resultados.gananciaNeta.toLocaleString()} CLP
                </div>
              </div>

              {modoActivo === 'inverso' && resultados.costoNetoPosible && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{ivaEnabled ? 'Costo Neto Posible:' : 'Costo Posible:'}</span>
                  </div>
                  <div className="text-xl font-semibold text-gray-600">
                    ${resultados.costoNetoPosible.toLocaleString()} CLP
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">% Ganancia Real:</span>
                </div>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  {resultados.porcentajeGananciaReal}%
                </Badge>
              </div>
            </div>

            <Button onClick={copiarResultados} className="w-full mt-4" variant="outline">
              <Copy className="h-4 w-4 mr-2" />
              Copiar Resultados
            </Button>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  )
}
