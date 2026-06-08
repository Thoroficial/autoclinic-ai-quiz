'use client'

import { useEffect, useState } from 'react'
import { Users, X, CheckCircle2 } from 'lucide-react'

interface TelaEscolhaplanosProps {
  onEscolherMensal: () => void
  onEscolherAnual: () => void
  onFechar?: () => void
}

const SOCIAL_PROOFS = [
  { nome: 'Alessandra Santos', profissao: 'biomédica', estado: 'Santa Catarina' },
  { nome: 'Camila Oliveira', profissao: 'esteticista', estado: 'São Paulo' },
  { nome: 'Juliana Martins', profissao: 'biomédica', estado: 'Paraná' },
  { nome: 'Fernanda Rocha', profissao: 'esteticista', estado: 'Minas Gerais' },
  { nome: 'Patrícia Alves', profissao: 'biomédica', estado: 'Rio de Janeiro' },
  { nome: 'Mariana Costa', profissao: 'esteticista', estado: 'Bahia' },
  { nome: 'Renata Lima', profissao: 'biomédica', estado: 'Goiás' },
]

export default function TelaEscolhaPlanos({ onEscolherMensal, onEscolherAnual, onFechar }: TelaEscolhaplanosProps) {
  const [popup, setPopup] = useState<{ nome: string; profissao: string; estado: string } | null>(null)
  const [popupIndex, setPopupIndex] = useState(0)

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setPopup(SOCIAL_PROOFS[0])
      setPopupIndex(0)
      const hide = setTimeout(() => setPopup(null), 4500)
      const interval = setInterval(() => {
        setPopupIndex(prev => {
          const next = (prev + 1) % SOCIAL_PROOFS.length
          setPopup(SOCIAL_PROOFS[next])
          setTimeout(() => setPopup(null), 4500)
          return next
        })
      }, 28000 + Math.random() * 12000)
      return () => { clearTimeout(hide); clearInterval(interval) }
    }, 5000)
    return () => clearTimeout(initialDelay)
  }, [])

  return (
    <div className="min-h-screen bg-white flex items-start justify-center py-8 px-4 relative">

      {/* ── POP-UP DE PROVA SOCIAL ── */}
      <div
        className={`fixed bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xs z-50 transition-all duration-500 ease-in-out ${
          popup ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {popup && (
          <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] px-4 py-3 flex items-start gap-3">
            <div className="shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
              <CheckCircle2 className="w-4 h-4 text-purple-600" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-gray-900 leading-snug">
                {popup.nome}, <span className="font-normal text-gray-600">{popup.profissao}</span>
                <span className="text-gray-400"> – {popup.estado}</span>
              </p>
              <p className="text-xs text-gray-500 mt-0.5">acabou de ativar o autoclinic.ai</p>
            </div>
          </div>
        )}
      </div>

      {/* ── BOTÃO FECHAR (X) — fixo no topo esquerdo ── */}
      {onFechar && (
        <div className="absolute top-4 left-4 z-10">
          <button
            onClick={onFechar}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
            aria-label="Fechar"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      )}

      <div className="w-full max-w-md space-y-5">

        {/* ── TÍTULO ── */}
        <div className="text-center pt-2">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight tracking-tight">
            Escolha seu plano
          </h1>
          <p className="mt-1.5 text-sm text-gray-500">
            Ative a AutoClinic.ai agora.
          </p>
        </div>

        {/* ── CONTADOR DE PRÉ-LANÇAMENTO ── */}
        <div className="flex flex-col items-center gap-1.5 py-1">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
            Preço de pré-lançamento · primeiras 400 clínicas
          </p>
          <div className="flex items-center gap-1.5 bg-purple-50 border border-purple-100 rounded-full px-3 py-1">
            <Users className="w-3.5 h-3.5 text-purple-500 shrink-0" />
            <span className="text-xs font-bold text-purple-700">347 já ativaram</span>
            <span className="text-xs text-purple-400 font-medium">de 400</span>
          </div>
          <div className="w-full max-w-[220px] h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-purple-500 rounded-full" style={{ width: '86.75%' }} />
          </div>
          <p className="text-[10px] text-gray-400 font-medium">Restam apenas 53 vagas neste preço</p>
        </div>

        {/* ── PLANO ANUAL (DESTACADO) ── */}
        <div className="relative border-2 border-purple-600 rounded-2xl p-5 shadow-lg">

          {/* Badge mais escolhido */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="bg-purple-600 text-white text-[11px] font-black uppercase tracking-wider px-4 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1.5">
              <Users className="w-3 h-3" />
              Mais escolhido
            </span>
          </div>

          <div className="pt-3">
            {/* Label */}
            <p className="text-[11px] font-bold uppercase tracking-widest text-purple-500 mb-3">
              Plano Anual
            </p>

            {/* Preço principal */}
            <div className="flex items-baseline gap-1.5 mb-1">
              <span className="text-5xl font-black text-gray-900">R$ 97</span>
              <span className="text-base text-gray-500 font-medium">/ mês</span>
            </div>

            {/* Cobrança anual */}
            <p className="text-xs text-gray-400 mt-1">
              Cobrança anual: <span className="font-semibold text-gray-600">R$ 1.164</span>
            </p>

            {/* Economia */}
            <div className="mt-3 inline-flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-lg px-3 py-1.5">
              <span className="text-xs font-bold text-green-700">
                Economize R$ 1.200 por ano
              </span>
            </div>
          </div>

          {/* Botão */}
          <button
            onClick={onEscolherAnual}
            className="mt-5 w-full py-4 px-5 bg-purple-600 hover:bg-purple-700 active:scale-[0.98] text-white font-black text-sm sm:text-base rounded-xl shadow-[0_6px_20px_rgba(126,34,206,0.35)] hover:shadow-[0_8px_24px_rgba(126,34,206,0.45)] transition-all duration-200"
          >
            Escolher plano anual
          </button>
        </div>

        {/* ── DIVISOR ── */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 font-medium">ou</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* ── PLANO MENSAL ── */}
        <div className="border border-gray-200 rounded-2xl p-5 flex flex-col gap-4">

          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
              Plano Mensal
            </p>

            <div className="flex items-baseline gap-1.5">
              <span className="text-4xl font-black text-gray-900">R$ 197</span>
              <span className="text-base text-gray-500 font-medium">/ mês</span>
            </div>
          </div>

          <button
            onClick={onEscolherMensal}
            className="w-full py-3.5 px-5 border-2 border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 active:scale-[0.98] text-gray-700 font-bold text-sm rounded-xl transition-all duration-200"
          >
            Escolher plano mensal
          </button>

          <p className="text-center text-xs text-gray-400">
            Cancelamento a qualquer momento
          </p>
        </div>

      </div>
    </div>
  )
}
