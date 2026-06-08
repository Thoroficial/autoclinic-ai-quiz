'use client'

import { useEffect, useState } from 'react'
import { Shield, Zap, Users, CheckCircle2 } from 'lucide-react'

interface DownsellProps {
  onAceitar: () => void
  onRecusar: () => void
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

export default function Downsell({ onAceitar, onRecusar }: DownsellProps) {
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
    <div className="min-h-screen bg-white flex items-center justify-center py-10 px-4 relative">

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
      <div className="w-full max-w-md space-y-5">

        {/* ── ALERTA DE RECUPERAÇÃO ── */}
        <div className="text-center bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
          <p className="text-sm font-bold text-amber-800 leading-snug">
            Espere! Temos uma condição especial para você.
          </p>
          <p className="text-xs text-amber-600 mt-0.5">
            Isso só vai aparecer uma vez.
          </p>
        </div>

        {/* ── BLOCO 1 — TÍTULO ── */}
        <div className="text-center pt-2">
          <p className="text-[11px] font-bold uppercase tracking-widest text-purple-500 mb-2">
            Oferta especial
          </p>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
            Ative sua clínica hoje
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-500 leading-relaxed">
            Oferta especial para você ativar sua clínica hoje.
          </p>
        </div>

        {/* ── BLOCO 2 — OFERTA ESPECIAL ── */}
        <div className="relative border-2 border-purple-600 rounded-2xl p-6 shadow-lg text-center">

          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="bg-purple-600 text-white text-[11px] font-black uppercase tracking-wider px-4 py-1.5 rounded-full whitespace-nowrap">
              Oferta especial
            </span>
          </div>

          <div className="pt-2">
            {/* Ancoragem: preço riscado */}
            <p className="text-sm text-gray-400 mb-1">
              <span className="line-through">De R$ 1.164/ano</span>
            </p>

            {/* Por */}
            <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide font-semibold">por</p>

            {/* Preço principal */}
            <div className="flex items-baseline justify-center gap-1.5 mb-2">
              <span className="text-6xl font-black text-gray-900">R$ 67</span>
              <span className="text-lg text-gray-500 font-medium">/ mês</span>
            </div>

            <p className="text-xs text-gray-400">
              Plano anual promocional
            </p>
          </div>
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

        {/* ── BLOCO 3 — BOTÃO PRINCIPAL ── */}
        <button
          onClick={onAceitar}
          className="w-full py-5 px-6 bg-purple-600 hover:bg-purple-700 active:scale-[0.98] text-white font-black text-base sm:text-lg rounded-2xl shadow-[0_8px_24px_rgba(126,34,206,0.4)] hover:shadow-[0_12px_32px_rgba(126,34,206,0.5)] transition-all duration-200"
        >
          Ativar com oferta especial
        </button>

        {/* ── MICRO-ELEMENTOS DE CONFIANÇA ── */}
        <div className="flex items-center justify-center gap-4 text-gray-400">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs">Pagamento seguro</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs">Acesso imediato</span>
          </div>
        </div>

        {/* ── OPÇÃO PARA SAIR ── */}
        <div className="flex justify-center pb-4">
          <button
            onClick={onRecusar}
            className="text-xs text-gray-400 hover:text-gray-600 underline underline-offset-2 transition-colors duration-150"
          >
            Não, continuar sem ativar
          </button>
        </div>

      </div>
    </div>
  )
}
