'use client'

import { useEffect, useState } from 'react'
import { Check, ArrowRight } from 'lucide-react'

interface ConfirmacaoPagamentoProps {
  onEntrar?: () => void
}

export default function ConfirmacaoPagamento({ onEntrar }: ConfirmacaoPagamentoProps) {
  const [animou, setAnimou] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setAnimou(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-md space-y-7">

        {/* ── BLOCO 1 — ÍCONE DE CONFIRMAÇÃO ── */}
        <div className="flex flex-col items-center gap-4 pt-2">
          <div
            className={`w-24 h-24 rounded-full bg-green-100 flex items-center justify-center transition-all duration-700 ease-out ${
              animou ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-200">
              <Check className="w-9 h-9 text-white" strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* ── BLOCO 2 — MENSAGEM PRINCIPAL ── */}
        <div
          className={`text-center transition-all duration-700 delay-150 ease-out ${
            animou ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            Pagamento confirmado
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
            Sua clínica inteligente já está ativa.
          </p>
        </div>

        {/* ── BLOCO 3 — BOTÃO PRINCIPAL ── */}
        <div
          className={`pb-6 transition-all duration-700 delay-[300ms] ease-out ${
            animou ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="https://www.autoclinic-ai.com"
            className="w-full flex items-center justify-center gap-3 py-5 px-6 bg-purple-600 hover:bg-purple-700 active:scale-[0.98] text-white font-black text-base sm:text-lg rounded-2xl shadow-[0_8px_24px_rgba(126,34,206,0.4)] hover:shadow-[0_12px_32px_rgba(126,34,206,0.5)] transition-all duration-200"
          >
            Entrar na plataforma
            <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
          </a>
        </div>

      </div>
    </div>
  )
}
