/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  INSERTION_SORT_STEPS,
  SELECTION_SORT_STEPS,
  StepDetail
} from '../data/projectData';
import {
  Play,
  Pause,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Info,
  CheckCircle2,
  Sliders,
  Layers
} from 'lucide-react';

export const InteractiveVisualizer: React.FC = () => {
  const [algorithm, setAlgorithm] = useState<'insertion' | 'selection'>('insertion');
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1800); // ms per step

  const activeSteps: StepDetail[] =
    algorithm === 'insertion' ? INSERTION_SORT_STEPS : SELECTION_SORT_STEPS;
  const currentStep = activeSteps[currentStepIndex] || activeSteps[0];
  const maxStep = activeSteps.length - 1;

  // Handle auto-play
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setTimeout(() => {
        if (currentStepIndex < maxStep) {
          setCurrentStepIndex((prev) => prev + 1);
        } else {
          setIsPlaying(false);
        }
      }, speed);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStepIndex, maxStep, speed]);

  const handleNext = () => {
    if (currentStepIndex < maxStep) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStepIndex(0);
  };

  const handleSwitchAlgorithm = (algo: 'insertion' | 'selection') => {
    setIsPlaying(false);
    setAlgorithm(algo);
    setCurrentStepIndex(0);
  };

  return (
    <div className="space-y-6">
      {/* Algorithm Selector Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Algoritma Seçimi
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Adım adım görselleştirmek istediğiniz sıralama yöntemini seçin
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
          <button
            onClick={() => handleSwitchAlgorithm('insertion')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
              algorithm === 'insertion'
                ? 'bg-white text-indigo-700 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Insertion Sort [22, 27, 16, 2, 18, 6]
          </button>
          <button
            onClick={() => handleSwitchAlgorithm('selection')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
              algorithm === 'selection'
                ? 'bg-white text-emerald-700 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Selection Sort [7, 3, 5, 8, 2, 9, 4, 15, 6]
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        {/* Step Header & Navigation Counter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
              {algorithm === 'insertion' ? 'Yerleştirme Sıralaması' : 'Seçmeli Sıralama'}
            </span>
            <h4 className="text-xl font-extrabold text-slate-900">
              {currentStep.title}
            </h4>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
              Adım {currentStepIndex} / {maxStep}
            </span>
            {currentStepIndex === maxStep && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Tamamlandı
              </span>
            )}
          </div>
        </div>

        {/* Array Visualization Field */}
        <div className="py-10 flex flex-col items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-full">
            {currentStep.array.map((value, idx) => {
              const isSorted = idx <= currentStep.sortedUntilIndex;
              const isHighlighted = currentStep.highlightIndices.includes(idx);
              const isTarget = currentStep.targetIndex === idx;

              // Compute proportional height for bar styling
              const maxVal = Math.max(...currentStep.array);
              const heightPercent = Math.max(30, Math.round((value / maxVal) * 100));

              return (
                <div key={idx} className="flex flex-col items-center group">
                  {/* Pointer tag */}
                  <div className="h-6 flex items-center justify-center">
                    {isTarget ? (
                      <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200 animate-pulse">
                        Hedef
                      </span>
                    ) : isHighlighted ? (
                      <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                        Seçilen
                      </span>
                    ) : null}
                  </div>

                  {/* Number Block */}
                  <div
                    style={{ minHeight: `${Math.max(64, heightPercent * 0.9)}px` }}
                    className={`w-12 sm:w-16 rounded-xl border flex flex-col items-center justify-between p-2 font-mono transition-all duration-300 shadow-2xs ${
                      isTarget
                        ? 'bg-indigo-600 text-white border-indigo-700 ring-4 ring-indigo-200 scale-105'
                        : isHighlighted
                        ? 'bg-amber-100 text-amber-950 border-amber-400 ring-2 ring-amber-300 scale-105'
                        : isSorted
                        ? 'bg-emerald-50 text-emerald-950 border-emerald-300'
                        : 'bg-slate-50 text-slate-600 border-slate-200'
                    }`}
                  >
                    <span className="text-lg sm:text-2xl font-black mt-1">
                      {value}
                    </span>
                    <span className="text-[9px] opacity-70">
                      i: {idx}
                    </span>
                  </div>

                  {/* Status label under element */}
                  <span className="text-[9px] font-medium text-slate-400 mt-1">
                    {isSorted ? 'Sıralı' : 'Sırasız'}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Color Legend */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 pt-4 border-t border-slate-100 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-emerald-100 border border-emerald-400" />
              <span>Sıralanmış Bölge</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-indigo-600 border border-indigo-700" />
              <span>Hedef / Yerleşen Eleman</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-amber-200 border border-amber-400" />
              <span>Kıyaslanan / Takas Elemanı</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-slate-100 border border-slate-300" />
              <span>Henüz İncelenmeyen</span>
            </div>
          </div>
        </div>

        {/* Narrative & Pedagogical Explanation */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
          <Info className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
          <div>
            <strong className="block text-slate-900 font-semibold mb-1">
              Bu Adımda Ne Oldu?
            </strong>
            <p>{currentStep.explanation}</p>
          </div>
        </div>

        {/* Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-6 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
              title="Başa Dön"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={handlePrev}
              disabled={currentStepIndex === 0}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed text-xs sm:text-sm font-semibold transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Önceki Adım</span>
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white transition-all shadow-xs ${
                isPlaying
                  ? 'bg-amber-600 hover:bg-amber-700'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Durdur</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>Otomatik Oynat</span>
                </>
              )}
            </button>

            <button
              onClick={handleNext}
              disabled={currentStepIndex === maxStep}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed text-xs sm:text-sm font-semibold transition-colors"
            >
              <span>Sonraki Adım</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Speed Selector */}
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span className="text-slate-400 font-medium">Hız:</span>
            {[
              { label: '0.5x', ms: 2500 },
              { label: '1x', ms: 1800 },
              { label: '2x', ms: 900 }
            ].map((sp) => (
              <button
                key={sp.label}
                onClick={() => setSpeed(sp.ms)}
                className={`px-2.5 py-1 rounded-lg font-mono font-semibold text-xs transition-colors ${
                  speed === sp.ms
                    ? 'bg-slate-800 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {sp.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
