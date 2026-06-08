'use client'

import { useEffect, useState } from 'react'
import {
  MessageCircle,
  Camera,
  LayoutDashboard,
  CalendarCheck,
  DollarSign,
  Bell,
  Building2,
  Droplets,
  HeadphonesIcon,
  Users,
  ChevronDown,
  X,
  CheckCircle2,
} from 'lucide-react'

interface TelaOfertaPrincipalProps {
  onAtivar: () => void
  onVerPlanos: () => void
  onFechar?: () => void
}

const beneficios = [
  { icon: MessageCircle, label: 'Chat IA 24h', destaque: false },
  { icon: Camera, label: 'Simulador antes/depois', destaque: false },
  { icon: LayoutDashboard, label: 'Gestão completa', destaque: false },
  { icon: CalendarCheck, label: 'Agenda automatizada', destaque: false },
  { icon: DollarSign, label: 'Controle financeiro', destaque: false },
  { icon: Bell, label: 'Alertas pacientes', destaque: false },
  { icon: Building2, label: 'App personalizado para sua clínica', destaque: true },
  { icon: Droplets, label: 'Marca d\'água nas fotos da clínica', destaque: true },
  { icon: HeadphonesIcon, label: 'Suporte exclusivo', destaque: true },
]

const SOCIAL_PROOFS = [
  { nome: 'Alessandra Santos', profissao: 'biomédica', estado: 'Santa Catarina' },
  { nome: 'Camila Oliveira', profissao: 'esteticista', estado: 'São Paulo' },
  { nome: 'Juliana Martins', profissao: 'biomédica', estado: 'Paraná' },
  { nome: 'Fernanda Rocha', profissao: 'esteticista', estado: 'Minas Gerais' },
  { nome: 'Patrícia Alves', profissao: 'biomédica', estado: 'Rio de Janeiro' },
  { nome: 'Mariana Costa', profissao: 'esteticista', estado: 'Bahia' },
  { nome: 'Renata Lima', profissao: 'biomédica', estado: 'Goiás' },
]

export default function TelaOfertaPrincipal({ onAtivar, onVerPlanos, onFechar }: TelaOfertaPrincipalProps) {
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
    <div className="h-screen bg-white flex items-center justify-center px-4 overflow-hidden relative">

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

      <div className="w-full max-w-md flex flex-col gap-3">

        {/* ── HEADLINE ── */}
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight tracking-tight">
            Sua clínica inteligente em minutos
          </h1>
        </div>

        {/* ── CARD DE PREÇO ── */}
        <div className="relative border-2 border-purple-600 rounded-2xl px-5 py-4 shadow-lg text-center">

          {/* Badge mais escolhido */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="bg-purple-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap flex items-center gap-1">
              <Users className="w-2.5 h-2.5" />
              Mais escolhido
            </span>
          </div>

          <div className="pt-1">
            {/* Preço principal — hierarquia #1 */}
            <div className="flex items-baseline justify-center gap-1 mb-0.5">
              <span className="text-6xl font-black text-gray-900">R$ 97</span>
              <span className="text-base text-gray-500 font-medium">/ mês</span>
            </div>

            {/* Cobrança anual */}
            <p className="text-xs text-gray-500">
              ou <span className="font-semibold text-gray-700">R$ 1.164</span> cobrados anualmente
            </p>

            {/* Badge economia — hierarquia #2 */}
            <div className="mt-2 inline-flex items-center gap-1 bg-green-50 border border-green-200 rounded-lg px-3 py-1">
              <span className="text-[11px] font-bold text-green-700">
                Economize R$ 1.200 por ano (mais de 6 meses grátis)
              </span>
            </div>
          </div>
        </div>

        {/* ── PROVA SOCIAL ── */}
        <div className="flex items-center justify-center gap-2 -mt-1">
          <div className="flex -space-x-1.5">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center"
              >
                <span className="text-[8px] font-bold text-purple-600">
                  {['A', 'B', 'C', 'D'][i]}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 font-medium">
            <span className="font-black text-gray-900">347</span> clínicas já utilizam o autoclinic.ai
          </p>
        </div>

        {/* ── CONTADOR DE PRÉ-LANÇAMENTO ── */}
        <div className="flex flex-col items-center gap-1 -mt-1">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
            Preço de pré-lançamento · primeiras 400 clínicas
          </p>
          <div className="flex items-center gap-1.5 bg-purple-50 border border-purple-100 rounded-full px-3 py-1">
            <Users className="w-3 h-3 text-purple-500 shrink-0" />
            <span className="text-[11px] font-bold text-purple-700">347 já ativaram</span>
            <span className="text-[11px] text-purple-400 font-medium">de 400</span>
          </div>
          <div className="w-full max-w-[200px] h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-purple-500 rounded-full" style={{ width: '86.75%' }} />
          </div>
          <p className="text-[10px] text-gray-400 font-medium">Restam apenas 53 vagas neste preço</p>
        </div>

        {/* ── VER OUTROS PLANOS ── */}
        <div className="flex justify-center -mt-1">
          <button
            onClick={onVerPlanos}
            className="flex items-center gap-1 text-xs text-gray-400 hover:text-purple-600 transition-colors duration-150 underline underline-offset-2"
          >
            Ver outros planos
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        {/* ── BENEFÍCIOS — 3x3 — hierarquia #3 ── */}
        <div className="grid grid-cols-3 gap-1.5">
          {beneficios.map(({ icon: Icon, label, destaque }, i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-1 rounded-xl px-2 py-2 ${destaque ? 'bg-purple-50 border border-purple-200' : 'bg-gray-50'}`}
            >
              <div className={`rounded-lg flex items-center justify-center shrink-0 ${destaque ? 'w-9 h-9 bg-purple-600' : 'w-7 h-7 bg-purple-100'}`}>
                <Icon className={`${destaque ? 'w-4.5 h-4.5 text-white' : 'w-3.5 h-3.5 text-purple-600'}`} />
              </div>
              <span className={`text-center leading-tight ${destaque ? 'text-[10px] font-bold text-purple-700' : 'text-[10px] font-medium text-gray-700'}`}>{label}</span>
            </div>
          ))}
        </div>

        {/* ── BOTÃO PRINCIPAL — hierarquia #4 ── */}
        <button
          onClick={onAtivar}
          className="w-full py-4 px-6 bg-purple-600 hover:bg-purple-700 active:scale-[0.98] text-white font-black text-sm sm:text-base rounded-2xl shadow-[0_6px_20px_rgba(126,34,206,0.4)] hover:shadow-[0_10px_28px_rgba(126,34,206,0.5)] transition-all duration-200 uppercase tracking-wide"
        >
          Ativar minha clínica inteligente
        </button>

      </div>
    </div>
  )
}
