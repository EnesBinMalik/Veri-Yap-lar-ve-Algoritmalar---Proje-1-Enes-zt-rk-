/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Play, Sparkles, RefreshCw, ArrowRight, CheckCircle2 } from 'lucide-react';

interface DynamicStep {
  stepIndex: number;
  array: number[];
  action: string;
  sortedUntil: number;
  highlight: number[];
}

export const CustomSandbox: React.FC = () => {
  const [inputStr, setInputStr] = useState<string>('22, 27, 16, 2, 18, 6');
  const [algo, setAlgo] = useState<'insertion' | 'selection'>('insertion');
  const [activeStep, setActiveStep] = useState<number>(0);

  // Parse input
  const parsedArray = useMemo(() => {
    return inputStr
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s !== '' && !isNaN(Number(s)))
      .map((s) => Number(s));
  }, [inputStr]);

  // Compute steps dynamically
  const generatedSteps: DynamicStep[] = useMemo(() => {
    if (parsedArray.length === 0) return [];

    const steps: DynamicStep[] = [];
    const arr = [...parsedArray];
    const n = arr.length;

    if (algo === 'insertion') {
      steps.push({
        stepIndex: 0,
        array: [...arr],
        action: `Başlangıç dizisi: [${arr.join(', ')}]. İlk eleman (${arr[0]}) sıralı kabul edilir.`,
        sortedUntil: 0,
        highlight: [0]
      });

      for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = key;
        steps.push({
          stepIndex: i,
          array: [...arr],
          action: `${i}. Adım: ${key} elemanı incelendi ve sıralı kısımdaki doğru konumuna yerleştirildi.`,
          sortedUntil: i,
          highlight: [j + 1]
        });
      }
    } else {
      // Selection sort
      steps.push({
        stepIndex: 0,
        array: [...arr],
        action: `Başlangıç: [${arr.join(', ')}]. Henüz hiçbir eleman sıralanmadı.`,
        sortedUntil: -1,
        highlight: []
      });

      for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
          if (arr[j] < arr[minIdx]) {
            minIdx = j;
          }
        }
        const temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;

        steps.push({
          stepIndex: i + 1,
          array: [...arr],
          action: `${i + 1}. Adım: Kalan kısımdaki en küçük eleman (${arr[i]}) bulundu ve ${i}. indisteki (${temp}) ile takas edildi.`,
          sortedUntil: i,
          highlight: [i, minIdx]
        });
      }
    }

    return steps;
  }, [parsedArray, algo]);

  const currentStep = generatedSteps[activeStep] || generatedSteps[0];

  const setPreset = (preset: string) => {
    setInputStr(preset);
    setActiveStep(0);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Özel Dizi Test Alanı (Sandbox)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              İstediğiniz sayı dizisini girin; algoritmanın her adımda nasıl çalıştığını anında görün
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
            <button
              onClick={() => { setAlgo('insertion'); setActiveStep(0); }}
              className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                algo === 'insertion'
                  ? 'bg-white text-indigo-700 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Insertion Sort
            </button>
            <button
              onClick={() => { setAlgo('selection'); setActiveStep(0); }}
              className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                algo === 'selection'
                  ? 'bg-white text-emerald-700 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Selection Sort
            </button>
          </div>
        </div>

        {/* Input & Presets */}
        <div className="py-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Virgülle Ayrılmış Sayı Dizisi:
            </label>
            <input
              type="text"
              value={inputStr}
              onChange={(e) => {
                setInputStr(e.target.value);
                setActiveStep(0);
              }}
              placeholder="Örn: 22, 27, 16, 2, 18, 6"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 font-mono text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            />
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 font-medium">Hızlı Örnekler:</span>
            <button
              onClick={() => setPreset('22, 27, 16, 2, 18, 6')}
              className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 font-mono font-semibold"
            >
              [22, 27, 16, 2, 18, 6] (Ödev Dizisi 1)
            </button>
            <button
              onClick={() => setPreset('7, 3, 5, 8, 2, 9, 4, 15, 6')}
              className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 font-mono font-semibold"
            >
              [7, 3, 5, 8, 2, 9, 4, 15, 6] (Ödev Dizisi 2)
            </button>
            <button
              onClick={() => setPreset('50, 40, 30, 20, 10')}
              className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 font-mono font-semibold"
            >
              Ters Dizi (Worst Case)
            </button>
            <button
              onClick={() => setPreset('1, 2, 3, 4, 5, 6')}
              className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 font-mono font-semibold"
            >
              Sıralı Dizi (Best Case)
            </button>
          </div>
        </div>

        {/* Live Step Viewer */}
        {currentStep && (
          <div className="mt-4 p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-indigo-700">
                Adım {currentStep.stepIndex} / {generatedSteps.length - 1}
              </span>
              <span className="text-xs text-slate-500">
                Toplam {parsedArray.length} Eleman
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 py-4">
              {currentStep.array.map((num, idx) => {
                const isSorted = idx <= currentStep.sortedUntil;
                const isHighlighted = currentStep.highlight.includes(idx);

                return (
                  <div
                    key={idx}
                    className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center font-mono font-bold border transition-all ${
                      isHighlighted
                        ? 'bg-amber-300 text-amber-950 border-amber-400 ring-2 ring-amber-200'
                        : isSorted
                        ? 'bg-emerald-100 text-emerald-950 border-emerald-300'
                        : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    <span className="text-base">{num}</span>
                    <span className="text-[9px] opacity-60">[{idx}]</span>
                  </div>
                );
              })}
            </div>

            <p className="text-xs sm:text-sm text-slate-700 bg-white p-3 rounded-lg border border-slate-200">
              {currentStep.action}
            </p>

            {/* Stepper buttons */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 disabled:opacity-40"
              >
                ← Önceki Adım
              </button>

              <div className="flex items-center gap-1.5 overflow-x-auto max-w-xs scrollbar-none">
                {generatedSteps.map((s) => (
                  <button
                    key={s.stepIndex}
                    onClick={() => setActiveStep(s.stepIndex)}
                    className={`w-6 h-6 rounded text-xs font-mono font-bold transition-all ${
                      activeStep === s.stepIndex
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                    }`}
                  >
                    {s.stepIndex}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setActiveStep((prev) => Math.min(generatedSteps.length - 1, prev + 1))}
                disabled={activeStep === generatedSteps.length - 1}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 disabled:opacity-40"
              >
                Sonraki Adım →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
