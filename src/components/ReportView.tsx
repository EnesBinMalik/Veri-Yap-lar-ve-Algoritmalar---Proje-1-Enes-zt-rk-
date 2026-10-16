/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  INSERTION_SORT_STEPS,
  SELECTION_SORT_STEPS
} from '../data/projectData';
import {
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Calculator,
  Compass,
  Sparkles,
  Target,
  BadgeCheck,
  ChevronRight,
  GitCommit
} from 'lucide-react';

export const ReportView: React.FC = () => {
  return (
    <div className="space-y-10 pb-16">
      {/* Formal Student & Assignment Cover Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-indigo-50 via-slate-50 to-transparent -z-10 rounded-full blur-2xl" />
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Patika.dev / Kodluyoruz Ödev Raporu</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Veri Yapıları ve Algoritmalar — Proje 1
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Insertion Sort & Selection Sort Aşamaları, Big-O Analizi ve Time Complexity Durumları
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 sm:text-right shrink-0">
            <span className="text-xs uppercase font-bold text-slate-400 block tracking-wider">
              Hazırlayan
            </span>
            <span className="text-base font-extrabold text-slate-900 block">
              Enes Öztürk
            </span>
            <span className="text-xs text-indigo-600 font-medium block mt-0.5">
              Yazılım Geliştirici & Öğrenci
            </span>
          </div>
        </div>

        {/* Quick Assignment Overview Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 text-xs text-slate-600">
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs shrink-0">
              01
            </div>
            <div>
              <strong className="block text-slate-800 font-semibold">Insertion Sort</strong>
              <span>[22, 27, 16, 2, 18, 6] adım adım</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center font-bold text-xs shrink-0">
              02
            </div>
            <div>
              <strong className="block text-slate-800 font-semibold">Big-O & 18 Analizi</strong>
              <span>Karmaşıklık ispatı & Case seçimi</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">
              03
            </div>
            <div>
              <strong className="block text-slate-800 font-semibold">Selection Sort</strong>
              <span>[7, 3, 5, 8, 2, 9, 4, 15, 6] ilk 4 adım</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BÖLÜM 1: INSERTION SORT ADIMLARI
          ========================================================================= */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs print-break-inside-avoid">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
            1
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Bölüm 1: Insertion Sort (Yerleştirme Sıralaması) Aşamaları
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Hedef Dizi: <code className="bg-slate-100 px-1.5 py-0.5 rounded text-indigo-700 font-mono font-semibold">[22, 27, 16, 2, 18, 6]</code>
            </p>
          </div>
        </div>

        {/* Algorithm description in natural tone */}
        <div className="bg-slate-50 border-l-4 border-indigo-600 p-4 rounded-r-xl mb-6 text-sm text-slate-700 leading-relaxed">
          <p className="font-medium text-slate-900 mb-1">Algoritmanın Çalışma İlkesi:</p>
          Yerleştirme sıralamasında (Insertion Sort), dizinin ilk elemanı <code className="font-mono text-indigo-600 font-semibold">22</code> tek başına sıralı bir alt küme olarak kabul edilir. Ardından 2. elemandan itibaren her bir sayı seçilir (key) ve solunda yer alan sıralı gruptaki elemanlarla kıyaslanarak doğru yerine yerleştirilir. Kendinden büyük olan sayılar birer adım sağa ötelenir.
        </div>

        {/* Step-by-Step Breakdown */}
        <div className="space-y-4">
          {INSERTION_SORT_STEPS.map((step) => {
            const isCompleted = step.stepNumber === 5;
            return (
              <div
                key={step.stepNumber}
                className={`p-4 sm:p-5 rounded-xl border transition-all ${
                  isCompleted
                    ? 'bg-emerald-50/60 border-emerald-200'
                    : 'bg-white border-slate-200 hover:border-indigo-200'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                      isCompleted ? 'bg-emerald-600 text-white' : 'bg-indigo-100 text-indigo-800'
                    }`}>
                      {step.stepNumber}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">
                      {step.title}
                    </h4>
                  </div>
                  {isCompleted && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full w-fit">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Sıralama Tamamlandı
                    </span>
                  )}
                </div>

                {/* Array Visual Representation */}
                <div className="flex flex-wrap items-center gap-2 my-3">
                  {step.array.map((num, idx) => {
                    const isSortedBoundary = idx <= step.sortedUntilIndex;
                    const isTarget = step.targetIndex === idx;

                    return (
                      <div
                        key={idx}
                        className={`relative flex flex-col items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl font-mono text-base sm:text-lg font-bold border transition-all shadow-2xs ${
                          isTarget
                            ? 'bg-indigo-600 text-white border-indigo-700 ring-2 ring-indigo-300'
                            : isSortedBoundary
                            ? 'bg-indigo-50/90 text-indigo-900 border-indigo-200'
                            : 'bg-slate-100 text-slate-500 border-slate-200'
                        }`}
                      >
                        <span>{num}</span>
                        <span className="text-[9px] font-normal opacity-70 absolute bottom-1 font-mono">
                          [{idx}]
                        </span>
                      </div>
                    );
                  })}
                  <div className="ml-2 hidden sm:flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                    <span>Sonuç: [{step.array.join(', ')}]</span>
                  </div>
                </div>

                {/* Detailed explanation */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                  {step.explanation}
                </p>
              </div>
            );
          })}
        </div>

        {/* Summary result badge */}
        <div className="mt-6 p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs text-indigo-300 font-mono block">Nihai Sıralanmış Dizi:</span>
            <span className="font-mono text-lg font-bold text-emerald-400">
              [2, 6, 16, 18, 22, 27]
            </span>
          </div>
          <div className="text-xs text-slate-400 font-medium">
            Toplam Eleman (n): 6 • Gerçekleşen Adım Sayısı: 5
          </div>
        </div>
      </section>

      {/* =========================================================================
          BÖLÜM 2: BIG-O GÖSTERİMİ & İSPATI
          ========================================================================= */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs print-break-inside-avoid">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
          <div className="w-9 h-9 rounded-xl bg-violet-600 text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
            2
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Bölüm 2: Big-O Gösterimi ve Matematiksel Analiz
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              İşlem sayısı serisi ve asimptotik zaman karmaşıklığı
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Mathematical Proof Box */}
          <div className="lg:col-span-2 space-y-4">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3">
                <Calculator className="w-4 h-4 text-violet-600" />
                <span>Adım Adım İşlem Sayısı Formülasyonu</span>
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Dizimizde <code className="font-mono text-violet-700 font-semibold">n</code> adet eleman olduğunda:
              </p>

              <div className="font-mono text-xs sm:text-sm bg-white p-4 rounded-lg border border-slate-200 space-y-1.5 text-slate-800">
                <div className="flex justify-between border-b border-slate-100 pb-1">
                  <span>1. Adımda:</span>
                  <span className="text-slate-600">en fazla 1 işlem</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1">
                  <span>2. Adımda:</span>
                  <span className="text-slate-600">en fazla 2 işlem</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1">
                  <span>3. Adımda:</span>
                  <span className="text-slate-600">en fazla 3 işlem</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1">
                  <span>...</span>
                  <span className="text-slate-400">...</span>
                </div>
                <div className="flex justify-between font-bold text-indigo-700 pt-1">
                  <span>(n - 1). Adımda:</span>
                  <span>en fazla (n - 1) işlem</span>
                </div>
              </div>

              <div className="mt-4 p-4 rounded-lg bg-violet-50/80 border border-violet-200 text-slate-800 text-sm space-y-2">
                <p className="font-medium text-violet-950">
                  Toplam İşlem Sayısı (Gauss Toplamı):
                </p>
                <div className="font-mono text-center py-2 bg-white rounded border border-violet-200 font-bold text-violet-900 text-sm sm:text-base">
                  Toplam = 1 + 2 + 3 + ... + (n - 1) = [ n × (n - 1) ] / 2
                </div>
                <div className="font-mono text-center text-xs text-slate-600">
                  = (n² - n) / 2 = ½n² - ½n
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Asimptotik notasyonda (Big-O) veri kümesi büyürken en büyük dereceli terim baskın olacağından, sabit katsayılar (½) ve düşük dereceli terimler (-½n) elenir.
                </p>
              </div>
            </div>
          </div>

          {/* Big-O Result Callout */}
          <div className="flex flex-col justify-between p-6 rounded-xl bg-gradient-to-br from-violet-900 to-indigo-950 text-white shadow-md">
            <div>
              <span className="text-xs uppercase tracking-widest text-violet-300 font-bold block mb-1">
                Proje 1 Cevabı
              </span>
              <h4 className="text-lg font-bold text-white mb-2">
                Big-O Gösterimi
              </h4>
              <div className="my-6 text-center">
                <div className="inline-block px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <span className="font-mono text-4xl sm:text-5xl font-black text-amber-300 tracking-tight">
                    O(n²)
                  </span>
                </div>
                <span className="block text-xs text-violet-200 mt-3 font-medium">
                  Karesel Zaman Karmaşıklığı (Quadratic Time)
                </span>
              </div>
            </div>

            <div className="border-t border-violet-800/80 pt-4 text-xs text-violet-300 space-y-1">
              <div className="flex justify-between">
                <span>Best Case:</span>
                <span className="font-mono text-emerald-300 font-bold">O(n)</span>
              </div>
              <div className="flex justify-between">
                <span>Average Case:</span>
                <span className="font-mono text-amber-300 font-bold">O(n²)</span>
              </div>
              <div className="flex justify-between">
                <span>Worst Case:</span>
                <span className="font-mono text-rose-300 font-bold">O(n²)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BÖLÜM 3: TIME COMPLEXITY & 18 SAYISININ DURUMU
          ========================================================================= */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs print-break-inside-avoid">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
          <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
            3
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Bölüm 3: Time Complexity & 18 Sayısının Durumu
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Sıralama sonrasında aranan elemanın case kapsamının tespiti
            </p>
          </div>
        </div>

        {/* Three Case Definitions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <strong className="text-sm font-bold text-slate-800">Best Case</strong>
              <span className="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                O(1) / O(n)
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Aradığımız sayının dizinin <strong>en başında</strong> (ilk indeksinde, index 0) yer alması durumudur.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-indigo-50/80 border-2 border-indigo-500 shadow-xs relative">
            <span className="absolute -top-2.5 right-3 bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Doğru Kapsam
            </span>
            <div className="flex items-center justify-between mb-2">
              <strong className="text-sm font-bold text-indigo-950">Average Case</strong>
              <span className="text-[10px] font-mono font-bold bg-indigo-200 text-indigo-900 px-2 py-0.5 rounded">
                O(n²)
              </span>
            </div>
            <p className="text-xs text-indigo-900 leading-relaxed font-medium">
              Aradığımız sayının dizinin <strong>ortasında</strong> (veya ortalama bir konumda) yer alması durumudur.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <strong className="text-sm font-bold text-slate-800">Worst Case</strong>
              <span className="text-[10px] font-mono font-bold bg-rose-100 text-rose-800 px-2 py-0.5 rounded">
                O(n²)
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Aradığımız sayının dizinin <strong>en sonunda</strong> yer alması ya da dizide hiç bulunmaması durumudur.
            </p>
          </div>
        </div>

        {/* Visual Array Analysis of 18 */}
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
          <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Target className="w-4 h-4 text-amber-500" />
            <span>Sıralanmış Dizide 18 Sayısının Pozisyon Analizi</span>
          </h4>

          <div className="flex flex-wrap items-center justify-center gap-3 py-4">
            {[
              { val: 2, idx: 0, tag: "Best Case (Baş)" },
              { val: 6, idx: 1, tag: "" },
              { val: 16, idx: 2, tag: "" },
              { val: 18, idx: 3, tag: "ARANAN ELEMAN", target: true },
              { val: 22, idx: 4, tag: "" },
              { val: 27, idx: 5, tag: "Worst Case (Son)" }
            ].map((item) => (
              <div key={item.idx} className="flex flex-col items-center">
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex flex-col items-center justify-center font-mono font-bold border transition-all ${
                    item.target
                      ? 'bg-amber-400 text-amber-950 border-amber-500 ring-4 ring-amber-200 shadow-md scale-105'
                      : 'bg-white text-slate-700 border-slate-300'
                  }`}
                >
                  <span className="text-lg sm:text-xl">{item.val}</span>
                  <span className="text-[10px] opacity-70">i: {item.idx}</span>
                </div>
                {item.tag && (
                  <span
                    className={`mt-1.5 text-[10px] font-bold px-1.5 py-0.5 rounded text-center whitespace-nowrap ${
                      item.target
                        ? 'bg-amber-500 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {item.tag}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Conclusion Box in Natural Student Writing */}
          <div className="mt-5 p-4 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-indigo-700 font-bold">
              <BadgeCheck className="w-5 h-5 text-indigo-600" />
              <span>Gerekçeli Çözüm ve Sonuç:</span>
            </div>
            <p className="leading-relaxed">
              Dizimiz küçükten büyüğe sıralandıktan sonra <code className="bg-slate-100 text-indigo-700 font-mono font-bold px-1.5 py-0.5 rounded">[2, 6, 16, 18, 22, 27]</code> şeklini almıştır. Dizi toplam 6 elemanlıdır (indeksler 0 ile 5 arası).
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 pl-1 text-xs sm:text-sm">
              <li>
                <strong>Best Case</strong> olması için sayının ilk eleman (indeks 0, yani 2) olması gerekirdi. 18 ilk sırada değildir.
              </li>
              <li>
                <strong>Worst Case</strong> olması için sayının son eleman (indeks 5, yani 27) olması gerekirdi. 18 son sırada da değildir.
              </li>
              <li>
                18 sayısı dizinin 3. indeksinde (dizinin orta grubunda) yer almaktadır.
              </li>
            </ul>
            <div className="pt-2">
              <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg text-indigo-950 font-bold flex items-center justify-between">
                <span>Cevap:</span>
                <span className="text-base text-indigo-700">AVERAGE CASE kapsamına girer.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BÖLÜM 4: SELECTION SORT İLK 4 ADIMI
          ========================================================================= */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs print-break-inside-avoid">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
          <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
            4
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Bölüm 4: Selection Sort (Seçmeli Sıralama) İlk 4 Adımı
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Hedef Dizi: <code className="bg-slate-100 px-1.5 py-0.5 rounded text-emerald-700 font-mono font-semibold">[7, 3, 5, 8, 2, 9, 4, 15, 6]</code>
            </p>
          </div>
        </div>

        {/* Algorithm Principle */}
        <div className="bg-slate-50 border-l-4 border-emerald-600 p-4 rounded-r-xl mb-6 text-sm text-slate-700 leading-relaxed">
          <p className="font-medium text-slate-900 mb-1">Seçmeli Sıralama (Selection Sort) Prensibi:</p>
          Dizinin henüz sıralanmamış bölümü taranır ve o kısımdaki <strong>en küçük (minimum)</strong> eleman tespit edilir. Ardından bu en küçük sayı, o adımın başlangıç indeksindeki eleman ile <strong>takas (swap)</strong> edilir. Böylece sıralı bölge her adımda bir eleman genişler.
        </div>

        {/* Initial Array State */}
        <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2 font-mono">
            Başlangıç Durumu (0. Adım):
          </span>
          <div className="flex flex-wrap gap-2">
            {[7, 3, 5, 8, 2, 9, 4, 15, 6].map((num, i) => (
              <div
                key={i}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white border border-slate-300 flex flex-col items-center justify-center font-mono font-bold text-slate-700 text-sm sm:text-base shadow-2xs"
              >
                <span>{num}</span>
                <span className="text-[8px] text-slate-400">[{i}]</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Steps */}
        <div className="space-y-4">
          {SELECTION_SORT_STEPS.filter((s) => s.stepNumber >= 1).map((step) => {
            return (
              <div
                key={step.stepNumber}
                className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 transition-all shadow-2xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      {step.stepNumber}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">
                      {step.title}
                    </h4>
                  </div>
                  <span className="text-xs font-mono font-bold bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-200 w-fit">
                    Adım {step.stepNumber} Tamamlandı
                  </span>
                </div>

                {/* Array rendering */}
                <div className="flex flex-wrap items-center gap-2 my-3">
                  {step.array.map((num, idx) => {
                    const isSorted = idx <= step.sortedUntilIndex;
                    const isHighlighted = step.highlightIndices.includes(idx);

                    return (
                      <div
                        key={idx}
                        className={`relative flex flex-col items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-mono text-sm sm:text-base font-bold border transition-all ${
                          isHighlighted
                            ? 'bg-amber-100 text-amber-950 border-amber-400 ring-2 ring-amber-300'
                            : isSorted
                            ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                            : 'bg-slate-100 text-slate-500 border-slate-200'
                        }`}
                      >
                        <span>{num}</span>
                        <span className="text-[8px] font-normal opacity-70 absolute bottom-0.5">
                          [{idx}]
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Step explanation */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                  {step.explanation}
                </p>
              </div>
            );
          })}
        </div>

        {/* 4th Step Result Highlight Box */}
        <div className="mt-6 p-5 rounded-xl bg-emerald-900 text-white shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-emerald-300 uppercase font-mono tracking-wider block">
              4. Adım Sonunda Oluşan Dizi Durumu:
            </span>
            <span className="font-mono text-lg sm:text-xl font-extrabold text-emerald-300 block mt-1">
              [2, 3, 4, 5, 7, 9, 8, 15, 6]
            </span>
            <span className="text-xs text-emerald-100/80 block mt-1">
              İlk 4 eleman <code className="bg-emerald-800/80 px-1 rounded text-white">[2, 3, 4, 5]</code> kesin olarak sıralanmış bölgedir.
            </span>
          </div>

          <div className="bg-emerald-800/60 border border-emerald-700/60 p-3 rounded-lg text-xs text-emerald-100 shrink-0">
            <span className="font-bold block text-white">Selection Sort Big-O:</span>
            <span>Worst / Average / Best: O(n²)</span>
          </div>
        </div>
      </section>

      {/* Signature & Author Footer Badge */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center text-slate-600 text-xs sm:text-sm space-y-2 shadow-xs">
        <p className="font-semibold text-slate-800">
          Bu proje çalışması <strong className="text-indigo-600">Enes Öztürk</strong> tarafından özgün olarak hazırlanmıştır.
        </p>
        <p className="text-slate-400 text-xs">
          Kodluyoruz & Patika.dev Veri Yapıları ve Algoritmalar Eğitimi • Proje 1 Teslim Dosyası
        </p>
      </div>
    </div>
  );
};
