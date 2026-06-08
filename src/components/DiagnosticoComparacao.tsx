'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface DiagnosticoComparacaoProps {
  onContinue: () => void
}

export default function DiagnosticoComparacao({ onContinue }: DiagnosticoComparacaoProps) {
  const [scoreValue, setScoreValue] = useState(0)
  const [centralizacaoValue, setCentralizacaoValue] = useState(0)
  const [estruturaIdealValue, setEstruturaIdealValue] = useState(0)

  // Animação do score principal (0 -> 37)
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setScoreValue((prev) => {
          if (prev >= 37) {
            clearInterval(interval)
            return 37
          }
          return prev + 1
        })
      }, 30)
      return () => clearInterval(interval)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  // Animação do indicador de centralização (0 -> 83%)
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCentralizacaoValue((prev) => {
          if (prev >= 83) {
            clearInterval(interval)
            return 83
          }
          return prev + 1
        })
      }, 20)
      return () => clearInterval(interval)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Animação do indicador estrutura ideal (0 -> 50%)
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setEstruturaIdealValue((prev) => {
          if (prev >= 50) {
            clearInterval(interval)
            return 50
          }
          return prev + 1
        })
      }, 20)
      return () => clearInterval(interval)
    }, 700)
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

      <div className="w-full max-w-2xl relative z-10">
        <Card className="border border-gray-200/80 shadow-xl backdrop-blur-sm bg-white/95 rounded-2xl md:rounded-3xl overflow-hidden">
          <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10 space-y-4 sm:space-y-6 md:space-y-8">

            {/* Título e Subtítulo */}
            <div className="text-center space-y-2 sm:space-y-3">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight leading-tight">
                Diagnóstico Estrutural Inicial
              </h1>
              <p className="text-sm sm:text-base text-gray-500 font-light">
                Baseado nas suas respostas iniciais
              </p>
            </div>

            {/* Card principal com análise */}
            <div className="bg-gradient-to-br from-gray-50 to-purple-50/30 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-200/60 shadow-sm space-y-5 sm:space-y-6 md:space-y-8">

              {/* Score do sistema */}
              <div className="text-center space-y-3">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
                  Índice de Estrutura Operacional
                </h2>

                {/* Score grande */}
                <div className="flex items-center justify-center gap-3">
                  <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-purple-900">
                    {scoreValue}
                  </span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-400">
                    / 100
                  </span>
                </div>

                {/* Barra de progresso do score */}
                <div className="max-w-md mx-auto">
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${scoreValue}%` }}
                    ></div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    Baixo nível de estrutura operacional
                  </p>
                </div>
              </div>

              {/* Divisor */}
              <div className="border-t border-gray-200/60"></div>

              {/* Indicadores animados */}
              <div className="space-y-5">
                {/* Indicador 1: Centralização */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-700">
                      Nível de Centralização Operacional
                    </h3>
                    <span className="text-xl sm:text-2xl font-bold text-purple-900">
                      {centralizacaoValue}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${centralizacaoValue}%` }}
                    ></div>
                  </div>
                </div>

                {/* Indicador 2: Estrutura Ideal */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-700">
                      Estrutura Operacional Ideal
                    </h3>
                    <span className="text-xl sm:text-2xl font-bold text-green-600">
                      {estruturaIdealValue}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${estruturaIdealValue}%` }}
                    ></div>
                  </div>
                </div>
              </div>

            </div>

            {/* Card de conclusão - Nova frase analítica */}
            <div className="bg-purple-50/60 rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 border border-purple-200/60">
              <p className="text-sm sm:text-base md:text-lg text-gray-800 text-center leading-relaxed font-medium">
                "Quando a estrutura assume o controle, o crescimento deixa de depender exclusivamente de você."
              </p>
            </div>

            {/* Botão */}
            <div>
              <Button
                size="lg"
                onClick={onContinue}
                className="w-full h-12 sm:h-14 text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-br from-purple-700 to-purple-600 hover:from-purple-800 hover:to-purple-700 text-white rounded-xl shadow-[0_6px_20px_rgba(126,34,206,0.35)] hover:shadow-[0_8px_28px_rgba(126,34,206,0.45)] transition-all duration-300"
              >
                Como Resolver Este Padrão?
              </Button>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  )
}
