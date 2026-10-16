/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Layers, Award, Sparkles, Check, X } from 'lucide-react';

export const BigOComparisonTable: React.FC = () => {
  const algorithms = [
    {
      name: 'Insertion Sort (Yerleştirme)',
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)',
      space: 'O(1)',
      stable: true,
      highlight: true,
      desc: 'Küçük veri kümelerinde ve neredeyse sıralı dizilerde son derece verimlidir. Proje 1 Soru 1.'
    },
    {
      name: 'Selection Sort (Seçmeli)',
      best: 'O(n²)',
      average: 'O(n²)',
      worst: 'O(n²)',
      space: 'O(1)',
      stable: false,
      highlight: true,
      desc: 'Her adımda kalan en küçüğü arar. Dizi sıralı olsa bile daima O(n²) kıyaslama yapar. Proje 1 Soru 2.'
    },
    {
      name: 'Bubble Sort (Kabarcık)',
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)',
      space: 'O(1)',
      stable: true,
      highlight: false,
      desc: 'Komşu elemanları kıyaslayıp takas eder. Basit ancak büyük dizilerde yavaştır.'
    },
    {
      name: 'Merge Sort (Birleştirmeli)',
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n log n)',
      space: 'O(n)',
      stable: true,
      highlight: false,
      desc: 'Böl ve yönet (Divide & Conquer) yaklaşımı ile her durumda garantili O(n log n) sunar.'
    },
    {
      name: 'Quick Sort (Hızlı Sıralama)',
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n²)',
      space: 'O(log n)',
      stable: false,
      highlight: false,
      desc: 'Pivot seçimi ile pratik uygulamalarda en hızlı çalışan genel amaçlı algoritmalardandır.'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Sıralama Algoritmaları & Karmaşıklık Matrisi
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Insertion Sort ve Selection Sort algoritmalarının literatürdeki diğer yöntemlerle karşılaştırması
            </p>
          </div>
        </div>

        {/* Table container */}
        <div className="overflow-x-auto mt-6">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-50/75">
                <th className="py-3 px-4">Algoritma</th>
                <th className="py-3 px-3">Best Case</th>
                <th className="py-3 px-3">Average Case</th>
                <th className="py-3 px-3">Worst Case</th>
                <th className="py-3 px-3">Bellek (Space)</th>
                <th className="py-3 px-3">Kararlı (Stable)?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {algorithms.map((item, idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-slate-50/80 transition-colors ${
                    item.highlight ? 'bg-indigo-50/30' : ''
                  }`}
                >
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">
                        {item.name}
                      </span>
                      {item.highlight && (
                        <span className="text-[10px] bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded font-semibold font-mono">
                          Ödev Kapsamı
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      {item.desc}
                    </span>
                  </td>
                  <td className="py-3.5 px-3 font-mono font-semibold text-emerald-600">
                    {item.best}
                  </td>
                  <td className="py-3.5 px-3 font-mono font-semibold text-amber-600">
                    {item.average}
                  </td>
                  <td className="py-3.5 px-3 font-mono font-semibold text-rose-600">
                    {item.worst}
                  </td>
                  <td className="py-3.5 px-3 font-mono text-slate-600">
                    {item.space}
                  </td>
                  <td className="py-3.5 px-3">
                    {item.stable ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700 text-xs font-semibold">
                        <Check className="w-4 h-4 text-emerald-600" />
                        Evet
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-slate-500 text-xs font-semibold">
                        <X className="w-4 h-4 text-slate-400" />
                        Hayır
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Educational Note */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
          <strong className="block text-slate-900 font-bold">
            💡 Enes Öztürk'ün Notu (Önemli Algoritma Ayrımı):
          </strong>
          <p>
            <strong>Insertion Sort</strong>, dizi zaten sıralı olduğunda (Best Case) her eleman için yalnızca tek bir kontrol yaparak döngüden çıkar ve böylece <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200 text-indigo-700 font-bold">O(n)</code> sürede tamamlanır.
          </p>
          <p>
            Buna karşılık <strong>Selection Sort</strong>, dizi sıralı olsa bile her adımda kalan tüm elemanları tarayıp minimumu teyit etmek zorunda olduğu için Best Case durumunda dahi <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200 text-indigo-700 font-bold">O(n²)</code> karmaşıklıkla çalışır.
          </p>
        </div>
      </div>
    </div>
  );
};
