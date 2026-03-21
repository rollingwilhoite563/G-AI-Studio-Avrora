
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Activity, Cpu, BarChart2, Mail, BookOpen, Users, ShieldCheck } from 'lucide-react';

// --- TRAINING PROCESS DIAGRAM (Repurposed from SurfaceCodeDiagram) ---
export const SurfaceCodeDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    { id: 0, label: "Заявка", icon: <Mail size={16} />, desc: "Оформление заявки на обучение" },
    { id: 1, label: "Договор", icon: <BookOpen size={16} />, desc: "Подписание договора и оплата" },
    { id: 2, label: "Обучение", icon: <Users size={16} />, desc: "Очный или дистанционный курс" },
    { id: 3, label: "Экзамен", icon: <Activity size={16} />, desc: "Проверка полученных знаний" },
    { id: 4, label: "Документы", icon: <ShieldCheck size={16} />, desc: "Выдача легальных документов" },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm border border-stone-200 my-8">
      <h3 className="font-serif text-xl mb-4 text-stone-800">Процесс обучения</h3>
      <p className="text-sm text-stone-500 mb-8 text-center max-w-md">
        Мы автоматизировали все этапы, чтобы вы могли сосредоточиться на главном — безопасности ваших сотрудников.
      </p>
      
      <div className="relative w-full max-w-md h-32 flex items-center justify-between px-4">
         {/* Connecting Line */}
         <div className="absolute left-10 right-10 h-0.5 bg-stone-100 top-1/2 -translate-y-1/2 z-0">
            <motion.div 
              className="h-full bg-nobel-gold" 
              initial={{ width: "0%" }}
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
         </div>

         {steps.map((step) => (
             <div key={step.id} className="relative z-10 flex flex-col items-center">
                <button
                    onClick={() => setActiveStep(step.id)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${activeStep >= step.id ? 'bg-nobel-gold border-nobel-gold text-white shadow-lg scale-110' : 'bg-white border-stone-200 text-stone-300 hover:border-stone-400'}`}
                >
                    {step.icon}
                </button>
                <span className={`absolute -bottom-8 text-[10px] uppercase font-bold tracking-widest whitespace-nowrap transition-colors ${activeStep === step.id ? 'text-stone-900' : 'text-stone-400'}`}>
                    {step.label}
                </span>
             </div>
         ))}
      </div>

      <div className="mt-16 p-4 bg-stone-50 rounded-lg border border-stone-100 w-full text-center animate-fade-in" key={activeStep}>
          <p className="text-sm text-stone-600 font-serif italic">
            {steps[activeStep].desc}
          </p>
      </div>
    </div>
  );
};

// --- EXPERTISE DIAGRAM (Repurposed from TransformerDecoderDiagram) ---
export const TransformerDecoderDiagram: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setStep(s => (s + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const stages = [
    { label: "Запрос", icon: <Mail size={24} /> },
    { label: "Анализ экспертом", icon: <Users size={24} /> },
    { label: "Решение", icon: <ShieldCheck size={24} /> },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-[#F5F4F0] rounded-xl border border-stone-200 my-8">
      <h3 className="font-serif text-xl mb-4 text-stone-900">Экспертная поддержка</h3>
      <p className="text-sm text-stone-600 mb-6 text-center max-w-md">
        Наши эксперты сопровождают вас на каждом этапе, гарантируя правильность оформления всех документов.
      </p>

      <div className="relative w-full max-w-lg h-56 bg-white rounded-lg shadow-inner overflow-hidden mb-6 border border-stone-200 flex items-center justify-center gap-8 p-4">
        
        {/* Stage 1 */}
        <div className="flex flex-col items-center gap-2">
            <div className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center transition-colors duration-500 ${step === 0 ? 'border-nobel-gold bg-nobel-gold/10 text-nobel-gold' : 'border-stone-200 bg-stone-50 text-stone-300'}`}>
                <Mail size={24} />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500">Запрос</span>
        </div>

        <motion.div animate={{ opacity: step >= 1 ? 1 : 0.3, x: step >= 1 ? 0 : -5 }}>→</motion.div>

        {/* Stage 2 */}
        <div className="flex flex-col items-center gap-2">
             <div className={`w-24 h-24 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-colors duration-500 relative overflow-hidden ${step === 1 || step === 2 ? 'border-stone-800 bg-stone-900 text-white' : 'border-stone-200 bg-stone-50'}`}>
                <Users size={24} className={step === 1 || step === 2 ? 'text-nobel-gold animate-pulse' : 'text-stone-300'} />
                {step === 1 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-[1px] bg-nobel-gold absolute top-1/3 animate-ping"></div>
                        <div className="w-full h-[1px] bg-nobel-gold absolute top-2/3 animate-ping delay-75"></div>
                    </div>
                )}
             </div>
             <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500">Эксперт</span>
        </div>

        <motion.div animate={{ opacity: step >= 3 ? 1 : 0.3, x: step >= 3 ? 0 : -5 }}>→</motion.div>

        {/* Stage 3 */}
        <div className="flex flex-col items-center gap-2">
            <div className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center transition-colors duration-500 ${step === 3 ? 'border-green-500 bg-green-50 text-green-600' : 'border-stone-200 bg-stone-50 text-stone-300'}`}>
                <ShieldCheck size={24} />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500">Результат</span>
        </div>

      </div>

      <div className="flex gap-2">
          {[0, 1, 2, 3].map(s => (
              <div key={s} className={`h-1 rounded-full transition-all duration-300 ${step === s ? 'w-8 bg-nobel-gold' : 'w-2 bg-stone-300'}`}></div>
          ))}
      </div>
    </div>
  );
};

// --- COMPLIANCE CHART (Repurposed from PerformanceMetricDiagram) ---
export const PerformanceMetricDiagram: React.FC = () => {
    const [category, setCategory] = useState<'OT' | 'PP' | 'SIZ'>('OT');
    
    const data = {
        'OT': { current: 98, market: 65, label: "Охрана труда" },
        'PP': { current: 95, market: 40, label: "Первая помощь" },
        'SIZ': { current: 99, market: 55, label: "СИЗ" } 
    };

    const currentData = data[category];
    
    return (
        <div className="flex flex-col md:flex-row gap-8 items-center p-8 bg-stone-900 text-stone-100 rounded-xl my-8 border border-stone-800 shadow-lg">
            <div className="flex-1 min-w-[240px]">
                <h3 className="font-serif text-xl mb-2 text-nobel-gold">Соответствие стандартам</h3>
                <p className="text-stone-400 text-sm mb-4 leading-relaxed">
                    Наши программы обучения на 100% соответствуют актуальным требованиям законодательства РФ и регулярно обновляются.
                </p>
                <div className="flex gap-2 mt-6">
                    {(['OT', 'PP', 'SIZ'] as const).map((c) => (
                        <button 
                            key={c}
                            onClick={() => setCategory(c)} 
                            className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 border ${category === c ? 'bg-nobel-gold text-stone-900 border-nobel-gold' : 'bg-transparent text-stone-400 border-stone-700 hover:border-stone-500 hover:text-stone-200'}`}
                        >
                            {data[c].label}
                        </button>
                    ))}
                </div>
                <div className="mt-6 font-mono text-xs text-stone-500 flex items-center gap-2">
                    <ShieldCheck size={14} className="text-nobel-gold" /> 
                    <span>УРОВЕНЬ СООТВЕТСТВИЯ ФИС ФРДО</span>
                </div>
            </div>
            
            <div className="relative w-64 h-72 bg-stone-800/50 rounded-xl border border-stone-700/50 p-6 flex justify-around items-end">
                <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none opacity-10">
                   <div className="w-full h-[1px] bg-stone-400"></div>
                   <div className="w-full h-[1px] bg-stone-400"></div>
                   <div className="w-full h-[1px] bg-stone-400"></div>
                   <div className="w-full h-[1px] bg-stone-400"></div>
                </div>

                <div className="w-20 flex flex-col justify-end items-center h-full z-10">
                    <div className="flex-1 w-full flex items-end justify-center relative mb-3">
                        <div className="absolute -top-5 w-full text-center text-sm font-mono text-stone-400 font-bold bg-stone-900/90 py-1 px-2 rounded backdrop-blur-sm border border-stone-700/50 shadow-sm">{currentData.market}%</div>
                        <motion.div 
                            className="w-full bg-stone-600 rounded-t-md border-t border-x border-stone-500/30"
                            initial={{ height: 0 }}
                            animate={{ height: `${currentData.market}%` }}
                            transition={{ type: "spring", stiffness: 80, damping: 15 }}
                        />
                    </div>
                    <div className="h-6 flex items-center text-xs font-bold text-stone-500 uppercase tracking-wider">Рынок</div>
                </div>

                <div className="w-20 flex flex-col justify-end items-center h-full z-10">
                     <div className="flex-1 w-full flex items-end justify-center relative mb-3">
                        <div className="absolute -top-5 w-full text-center text-sm font-mono text-nobel-gold font-bold bg-stone-900/90 py-1 px-2 rounded backdrop-blur-sm border border-nobel-gold/30 shadow-sm">{currentData.current}%</div>
                        <motion.div 
                            className="w-full bg-nobel-gold rounded-t-md shadow-[0_0_20px_rgba(197,160,89,0.25)] relative overflow-hidden"
                            initial={{ height: 0 }}
                            animate={{ height: `${currentData.current}%` }}
                            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.1 }}
                        >
                           <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20"></div>
                        </motion.div>
                    </div>
                     <div className="h-6 flex items-center text-xs font-bold text-nobel-gold uppercase tracking-wider">Аврора</div>
                </div>
            </div>
        </div>
    )
}
