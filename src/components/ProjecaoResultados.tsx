'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface ProjecaoResultadosProps {
  onContinue: () => void
}

interface MetricData {
  label: string
  currentValue: number
  futureValue: number
}

// Valores: Lado Esquerdo (Atual) → Lado Direito (Futuro)
const metrics: MetricData[] = [
  { label: 'Decis��es centralizadas em você', currentValue: 76, futureValue: 91 },
  { label: 'Perda financeira por falhas', currentValue: 62, futureValue: 82 },
  { label: 'Sensação de exaustão', currentValue: 72, futureValue: 87 },
  { label: 'Fluxos organizados', currentValue: 47, futureValue: 89 }
]

export default function ProjecaoResultados({ onContinue }: ProjecaoResultadosProps) {
  const [animatedValues, setAnimatedValues] = useState<{ current: number[]; future: number[] }>({
    current: [0, 0, 0, 0],
    future: [0, 0, 0, 0]
  })

  // Animação das barras
  useEffect(() => {
    const timer = setTimeout(() => {
      metrics.forEach((metric, index) => {
        const currentInterval = setInterval(() => {
          setAnimatedValues(prev => {
            const newCurrent = [...prev.current]
            if (newCurrent[index] < metric.currentValue) {
              newCurrent[index] = Math.min(newCurrent[index] + 2, metric.currentValue)
            }
            return { ...prev, current: newCurrent }
          })
        }, 30)

        const futureInterval = setInterval(() => {
          setAnimatedValues(prev => {
            const newFuture = [...prev.future]
            if (newFuture[index] < metric.futureValue) {
              newFuture[index] = Math.min(newFuture[index] + 2, metric.futureValue)
            }
            return { ...prev, future: newFuture }
          })
        }, 30)

        setTimeout(() => {
          clearInterval(currentInterval)
          clearInterval(futureInterval)
        }, 1500)
      })
    }, 400)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center p-3 sm:p-4 md:p-6 relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-100/75 to-purple-200/55">
      {/* Fundo premium com efeitos sutis */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{
        backgroundImage: `
          radial-gradient(ellipse at 30% 40%, rgba(168, 85, 247, 0.23) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 60%, rgba(192, 132, 252, 0.18) 0%, transparent 50%)
        `,
      }}></div>

      <div className="w-full max-w-3xl relative z-10">
        <Card className="border border-gray-200/80 shadow-xl backdrop-blur-sm bg-white/95 rounded-2xl md:rounded-3xl overflow-hidden">
          <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10 space-y-4 sm:space-y-6 md:space-y-8">

            {/* Título e Subtítulo */}
            <div className="text-center space-y-2 sm:space-y-3">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight leading-tight">
                Projeção de Resultados para sua Clínica
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 font-light">
                Quando a estrutura assume o controle, os resultados deixam de depender exclusivamente de você.
              </p>
            </div>

            {/* Card principal com comparação */}
            <div className="bg-gradient-to-br from-gray-50 to-purple-50/30 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-200/60 shadow-sm space-y-4 sm:space-y-5 md:space-y-6">

              {/* Cabeçalho das colunas */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 text-center mb-2 sm:mb-3 md:mb-4">
                <div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-700 uppercase tracking-wide">
                    Como Está Hoje
                  </h3>
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-green-700 uppercase tracking-wide">
                    Como Pode Ser
                  </h3>
                </div>
              </div>

              {/* Métricas com barras animadas */}
              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                {metrics.map((metric, index) => (
                  <div key={index} className="space-y-2 sm:space-y-2.5 md:space-y-3">
                    {/* Labels */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base">
                      <div className="text-gray-700 font-medium">
                        {metric.label}
                      </div>
                      <div className="text-green-700 font-medium">
                        {index === 0 && 'Estrutura distribuída'}
                        {index === 1 && 'Mais lucro e previsibilidade'}
                        {index === 2 && 'Ambiente leve e estratégico'}
                        {index === 3 && 'Alta performance operacional'}
                      </div>
                    </div>

                    {/* Barras */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                      {/* Barra Atual (cinza/vermelho) */}
                      <div className="space-y-1">
                        <div className="relative h-6 sm:h-7 md:h-8 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full transition-all duration-500 ease-out flex items-center justify-end pr-2 sm:pr-3"
                            style={{ width: `${animatedValues.current[index]}%` }}
                          >
                            <span className="text-[10px] sm:text-xs font-bold text-white">
                              {animatedValues.current[index]}%
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Barra Futura (verde) */}
                      <div className="space-y-1">
                        <div className="relative h-6 sm:h-7 md:h-8 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-500 ease-out flex items-center justify-end pr-2 sm:pr-3"
                            style={{ width: `${animatedValues.future[index]}%` }}
                          >
                            <span className="text-[10px] sm:text-xs font-bold text-white">
                              {animatedValues.future[index]}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Card de conclusão */}
            <div className="bg-purple-50/60 rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 border border-purple-200/60">
              <p className="text-sm sm:text-base md:text-lg text-gray-800 text-center leading-relaxed">
                Clínicas estruturadas conseguem aumentar o lucro e reduzir drasticamente o caos operacional.
              </p>
            </div>

            {/* Botão */}
            <div>
              <Button
                size="lg"
                onClick={onContinue}
                className="w-full h-12 sm:h-14 text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-br from-purple-700 to-purple-600 hover:from-purple-800 hover:to-purple-700 text-white rounded-xl shadow-[0_6px_20px_rgba(126,34,206,0.35)] hover:shadow-[0_8px_28px_rgba(126,34,206,0.45)] transition-all duration-300"
              >
                Avançar para Plano Estruturado
              </Button>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  )
}
