'use client'

import { MessageCircle, RefreshCw, CalendarCheck, Heart, Star, X, CheckCircle2, Lock, Gift } from 'lucide-react'

interface TelaBonusExclusivosProps {
  onGarantir: () => void
  onFechar?: () => void
}

const bonuses = [
  {
    numero: 1,
    icon: RefreshCw,
    title: 'Recuperação automática de pacientes',
    desc: 'Pacientes que param de responder recebem follow-up automático e você não perde vendas.',
  },
  {
    numero: 2,
    icon: MessageCircle,
    title: 'Recuperação de PIX não finalizado',
    desc: 'Lembretes automáticos para pacientes que não concluíram o pagamento do agendamento.',
  },
  {
    numero: 3,
    icon: CalendarCheck,
    title: 'Confirmação automática de agendamentos',
    desc: 'Reduza faltas e aumente o comparecimento com confirmações enviadas automaticamente.',
  },
  {
    numero: 4,
    icon: Heart,
    title: 'Pós-procedimento inteligente',
    desc: 'Acompanhamento automático após o procedimento para aumentar satisfação e fidelização.',
  },
  {
    numero: 5,
    icon: Star,
    title: 'Clientes Premium\u2122 (cross-sell)',
    desc: 'Ofereça novos procedimentos automaticamente para pacientes que já são suas clientes.',
  },
]

export default function TelaBonusExclusivos({ onGarantir, onFechar }: TelaBonusExclusivosProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-100/75 to-purple-200/55">
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          radial-gradient(ellipse at 20% 30%, rgba(168, 85, 247, 0.18) 0%, transparent 55%),
          radial-gradient(ellipse at 80% 70%, rgba(192, 132, 252, 0.14) 0%, transparent 55%)
        `,
      }}></div>

      {onFechar && (
        <div className="absolute top-4 left-4 z-10">
          <button
            onClick={onFechar}
            className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm hover:bg-gray-100 flex items-center justify-center transition-colors duration-200 shadow-sm"
            aria-label="Fechar"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      )}

      <div className="w-full max-w-lg relative z-10 flex flex-col gap-4">

        <div className="border-2 border-purple-200/80 shadow-2xl backdrop-blur-sm bg-white/95 rounded-2xl overflow-hidden px-6 py-7 md:px-8 md:py-8 flex flex-col gap-5">

          {/* Badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold px-4 py-1.5 rounded-full">
              <Gift className="w-3.5 h-3.5" />
              BÔNUS EXCLUSIVOS
            </span>
          </div>

          {/* Headline */}
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              5 automações exclusivas para você{' '}
              <span className="text-purple-700">vender mais</span> e{' '}
              <span className="text-purple-700">fidelizar pacientes</span>.
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-sm md:text-base text-gray-500 text-center leading-relaxed -mt-2">
            Disponível apenas para as primeiras{' '}
            <span className="font-bold text-purple-700">400 clínicas</span>{' '}
            que ativarem o AutoClinic.ai.
          </p>

          {/* Social proof */}
          <div className="flex justify-center -mt-1">
            <span className="inline-flex items-center gap-1.5 bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold px-4 py-1.5 rounded-full">
              <span className="w-4 h-4 rounded-full bg-purple-200 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-purple-700" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <polyline points="17 11 19 13 23 9" />
                </svg>
              </span>
              Mais de 347 clínicas já ativaram e estão lucrando mais.
            </span>
          </div>

          {/* 5 Feature Cards */}
          <div className="flex flex-col gap-3">
            {bonuses.map((item) => (
              <div
                key={item.numero}
                className="flex items-center gap-3 bg-purple-50/60 border border-purple-200/60 rounded-xl px-4 py-3.5 backdrop-blur-sm"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center relative">
                  <item.icon className="w-5 h-5 text-purple-600" />
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                    {item.numero}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-800 leading-snug">{item.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Bar */}
          <div className="bg-gradient-to-r from-purple-700 to-purple-500 rounded-xl px-4 py-3 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-purple-200" />
              <span className="text-xs font-semibold text-purple-100">Valor futuro <span className="line-through">R$ 97/mês</span></span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-yellow-300" />
              <span className="text-xs font-bold text-white">Gratuito para as primeiras 400 clínicas</span>
            </div>
          </div>

          {/* Texto informativo sutil */}
          <p className="text-xs text-gray-400 text-center leading-relaxed -mb-1">
            Essas automações serão vendidas separadamente no futuro. Como você está entrando no pré-lançamento, elas serão liberadas gratuitamente e continuarão na sua conta sem custo adicional.
          </p>

          {/* CTA */}
          <button
            onClick={onGarantir}
            className="w-full py-4 text-base font-bold text-white rounded-xl bg-gradient-to-br from-purple-700 to-purple-600 hover:from-purple-800 hover:to-purple-700 shadow-[0_6px_20px_rgba(126,34,206,0.35)] hover:shadow-[0_8px_28px_rgba(126,34,206,0.45)] transition-all duration-200 active:scale-[0.98]"
          >
            Quero garantir todos esses bônus
          </button>

          {/* Trust badge */}
          <div className="flex justify-center -mt-2">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              <span className="text-[11px] text-gray-400">Ambiente 100% seguro. Seus dados estão protegidos.</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
