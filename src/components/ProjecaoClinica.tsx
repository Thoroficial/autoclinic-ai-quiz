'use client'

import {
  TrendingUp,
  MessageCircle,
  Clock,
  BarChart3,
  Coins,
  Users,
  CheckCircle2,
  Quote,
  ChevronRight,
  Sparkles,
} from 'lucide-react'

interface ProjecaoClinicaProps {
  onContinue: () => void
}

export default function ProjecaoClinica({ onContinue }: ProjecaoClinicaProps) {
  return (
    <div
      className="h-screen w-full flex flex-col overflow-hidden relative"
      style={{
        background: 'linear-gradient(135deg, #f3f0ff 0%, #ede9fe 30%, #ddd6fe 60%, #c4b5fd 100%)',
      }}
    >
      {/* Subtle background orbs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 15% 20%, rgba(139, 92, 246, 0.12) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 75%, rgba(167, 139, 250, 0.10) 0%, transparent 55%)
          `,
        }}
      />

      {/* Scrollable inner content constrained to viewport */}
      <div className="relative z-10 flex flex-col h-full w-full max-w-md mx-auto px-4 py-3 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>

        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-3 flex-shrink-0">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center shadow-sm"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}
            >
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-bold text-purple-900">AutoClinic.ai</span>
          </div>

          {/* Progress indicator */}
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm"
            style={{
              background: 'rgba(255,255,255,0.75)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(139,92,246,0.2)',
            }}
          >
            <span className="text-xs font-medium text-purple-700">Análise da clínica</span>
            <span className="text-xs font-bold text-purple-900">60%</span>
            <div className="w-16 h-1.5 bg-purple-100 rounded-full overflow-hidden">
              <div className="h-full w-[60%] rounded-full" style={{ background: 'linear-gradient(90deg, #7c3aed, #a78bfa)' }} />
            </div>
          </div>
        </div>

        {/* HEADLINE */}
        <div className="text-center mb-3 flex-shrink-0">
          <h1 className="text-xl font-extrabold text-gray-900 leading-tight">
            Projeção inicial{' '}
            <span style={{ color: '#7c3aed' }}>para sua clínica</span>
          </h1>
          <p className="text-xs text-gray-500 mt-1 leading-snug px-2">
            Com base nas suas respostas, clínicas parecidas com a sua normalmente conseguem alcançar:
          </p>
        </div>

        {/* IMPROVEMENT PROJECTION CARD */}
        <div
          className="rounded-2xl p-3 mb-2.5 flex-shrink-0"
          style={{
            background: 'rgba(255,255,255,0.72)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.85)',
            boxShadow: '0 4px 24px rgba(109,40,217,0.10)',
          }}
        >
          <div className="grid grid-cols-2 gap-2">
            {/* Item 1 */}
            <div
              className="flex items-center gap-2.5 rounded-xl p-2.5"
              style={{ background: 'rgba(245,243,255,0.8)' }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #dcfce7, #bbf7d0)' }}>
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 leading-tight">Aumento de faturamento</p>
                <p className="text-sm font-extrabold text-green-600 leading-tight">20% a 35%</p>
              </div>
            </div>

            {/* Item 2 */}
            <div
              className="flex items-center gap-2.5 rounded-xl p-2.5"
              style={{ background: 'rgba(245,243,255,0.8)' }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #ede9fe, #ddd6fe)' }}>
                <MessageCircle className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 leading-tight">Pacientes no WhatsApp</p>
                <p className="text-sm font-extrabold text-purple-700 leading-tight">Respondidos 24h</p>
              </div>
            </div>

            {/* Item 3 */}
            <div
              className="flex items-center gap-2.5 rounded-xl p-2.5"
              style={{ background: 'rgba(245,243,255,0.8)' }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #fef3c7, #fde68a)' }}>
                <Clock className="w-4 h-4 text-amber-600" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 leading-tight">Mais tempo focado</p>
                <p className="text-sm font-extrabold text-amber-700 leading-tight">nos procedimentos</p>
              </div>
            </div>

            {/* Item 4 */}
            <div
              className="flex items-center gap-2.5 rounded-xl p-2.5"
              style={{ background: 'rgba(245,243,255,0.8)' }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #e0f2fe, #bae6fd)' }}>
                <BarChart3 className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 leading-tight">Clínica mais</p>
                <p className="text-sm font-extrabold text-blue-700 leading-tight">organizada e previsível</p>
              </div>
            </div>
          </div>
        </div>

        {/* FINANCIAL IMPACT CARD */}
        <div
          className="rounded-2xl p-3 mb-2.5 flex-shrink-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.82) 0%, rgba(245,243,255,0.82) 100%)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(139,92,246,0.2)',
            boxShadow: '0 4px 20px rgba(109,40,217,0.13)',
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-purple-500 mb-0.5">
                Possível impacto mensal
              </p>
              <p
                className="text-2xl font-black leading-tight"
                style={{ color: '#5b21b6' }}
              >
                R$4.000{' '}
                <span className="text-lg font-bold text-purple-400">a</span>{' '}
                R$12.000
              </p>
              <p className="text-[10px] text-gray-500 mt-0.5 leading-snug">
                a mais no seu faturamento mensal após automatizar e organizar a gestão
              </p>
            </div>
            <div className="flex items-center gap-2 pl-3">
              <div className="flex flex-col items-center gap-1">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #fef3c7, #fde68a)' }}
                >
                  <Coins className="w-5 h-5 text-amber-500" />
                </div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #dcfce7, #bbf7d0)' }}
                >
                  <BarChart3 className="w-5 h-5 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SOCIAL PROOF CARD */}
        <div
          className="rounded-2xl p-3 mb-2.5 flex-shrink-0"
          style={{
            background: 'rgba(255,255,255,0.72)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.85)',
            boxShadow: '0 4px 20px rgba(109,40,217,0.08)',
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #ede9fe, #ddd6fe)' }}
            >
              <Users className="w-4 h-4 text-purple-600" />
            </div>
            <p className="text-sm font-bold text-gray-900 leading-tight">
              <span className="text-purple-700">347 clínicas</span> de estética como a sua já usam AutoClinic.ai
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {['Organizadas', 'Mais lucrativas', 'Mais tempo livre'].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1 text-[10px] font-semibold text-purple-700 rounded-full px-2.5 py-1"
                style={{
                  background: 'rgba(237,233,254,0.9)',
                  border: '1px solid rgba(139,92,246,0.25)',
                }}
              >
                <CheckCircle2 className="w-3 h-3 text-purple-500" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* TESTIMONIAL CARD */}
        <div
          className="rounded-2xl p-4 mb-3 flex-shrink-0"
          style={{
            background: 'rgba(255,255,255,0.72)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.85)',
            boxShadow: '0 4px 20px rgba(109,40,217,0.08)',
          }}
        >
          <Quote className="w-5 h-5 text-purple-400 mb-2" />
          <div className="space-y-1">
            <p className="text-xs text-gray-700 leading-relaxed">
              "Antes eu chegava em casa e ainda ficava respondendo paciente no WhatsApp.
            </p>
            <p className="text-xs text-gray-700 leading-relaxed">
              Hoje o <strong className="text-purple-700">AutoClinic.ai</strong> responde meus pacientes, organiza minha agenda e acompanha tudo.
            </p>
            <p className="text-xs text-gray-700 leading-relaxed">
              Minha clínica ficou muito mais <strong>organizada</strong> e meu faturamento começou a crescer."
            </p>
          </div>
          <p className="text-xs font-bold text-gray-600 mt-3">
            — Juliana, biomédica estética <span className="text-[10px] font-normal text-gray-400">usuária AutoClinic.ai</span>
          </p>
        </div>

        {/* CTA BUTTON */}
        <button
          onClick={onContinue}
          className="w-full flex items-center justify-center gap-2 text-sm font-bold text-white rounded-2xl py-4 flex-shrink-0 transition-all duration-200 active:scale-[0.98]"
          style={{
            background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
            boxShadow: '0 6px 24px rgba(109,40,217,0.40)',
          }}
        >
          Continuar análise
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Bottom spacer */}
        <div className="h-2 flex-shrink-0" />
      </div>
    </div>
  )
}
