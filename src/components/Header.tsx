/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, Check, Copy, FileText, Layers, PlayCircle, Printer, Sparkles, Terminal } from 'lucide-react';

interface HeaderProps {
  activeTab: 'report' | 'visualizer' | 'sandbox' | 'cheatSheet';
  setActiveTab: (tab: 'report' | 'visualizer' | 'sandbox' | 'cheatSheet') => void;
  onCopyMarkdown: () => void;
  copied: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onCopyMarkdown,
  copied
}) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Logo & Student Identity */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-700 flex items-center justify-center text-white shadow-md shadow-indigo-100 font-bold text-lg">
              EÖ
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-slate-900 tracking-tight">
                  Veri Yapıları ve Algoritmalar — Proje 1
                </h1>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Tam Teslimat
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium flex items-center gap-1.5 mt-0.5">
                <span>Hazırlayan:</span>
                <strong className="text-indigo-700 font-semibold">Enes Öztürk</strong>
                <span className="text-slate-300">•</span>
                <span>Patika.dev / Kodluyoruz</span>
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={onCopyMarkdown}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                copied
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
              }`}
              title="Ödev teslim metnini Markdown formatında kopyalar"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>{copied ? 'Kopyalandı!' : 'Markdown Kopyala'}</span>
            </button>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors"
              title="A4 formatında yazdır veya PDF olarak kaydet"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Yazdır / PDF</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 sm:gap-2 mt-4 pt-3 border-t border-slate-100 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('report')}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'report'
                ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Ödev Raporu (Tam Çözüm)</span>
          </button>

          <button
            onClick={() => setActiveTab('visualizer')}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'visualizer'
                ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <PlayCircle className="w-4 h-4" />
            <span>İnteraktif Simülatör</span>
          </button>

          <button
            onClick={() => setActiveTab('sandbox')}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'sandbox'
                ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Özel Dizi Testi</span>
          </button>

          <button
            onClick={() => setActiveTab('cheatSheet')}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'cheatSheet'
                ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Big-O & Sıralama Matrisi</span>
          </button>
        </div>
      </div>
    </header>
  );
};
