/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Veri Yapıları ve Algoritmalar - Proje 1
 * Hazırlayan: Enes Öztürk
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { ReportView } from './components/ReportView';
import { InteractiveVisualizer } from './components/InteractiveVisualizer';
import { CustomSandbox } from './components/CustomSandbox';
import { BigOComparisonTable } from './components/BigOComparisonTable';
import { RAW_MARKDOWN_REPORT } from './data/projectData';
import { Check, Copy } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'report' | 'visualizer' | 'sandbox' | 'cheatSheet'>('report');
  const [copied, setCopied] = useState(false);

  const handleCopyMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(RAW_MARKDOWN_REPORT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for clipboard if needed
      const textArea = document.createElement('textarea');
      textArea.value = RAW_MARKDOWN_REPORT;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Interactive Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onCopyMarkdown={handleCopyMarkdown}
        copied={copied}
      />

      {/* Copy Notification Toast */}
      {copied && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs sm:text-sm font-semibold px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 border border-slate-700 animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Ödev metni Markdown formatında panoya kopyalandı!</span>
        </div>
      )}

      {/* Print-Only Header (visible only when printing / saving to PDF) */}
      <div className="hidden print-only p-6 border-b border-slate-300 mb-6">
        <h1 className="text-2xl font-bold text-black">
          Veri Yapıları ve Algoritmalar — Proje 1
        </h1>
        <p className="text-sm text-slate-700 mt-1">
          <strong>Öğrenci / Hazırlayan:</strong> Enes Öztürk • Kodluyoruz / Patika.dev
        </p>
      </div>

      {/* Main Content Area */}
      <main className="grow max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {activeTab === 'report' && <ReportView />}
        {activeTab === 'visualizer' && <InteractiveVisualizer />}
        {activeTab === 'sandbox' && <CustomSandbox />}
        {activeTab === 'cheatSheet' && <BigOComparisonTable />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500 no-print">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Veri Yapıları ve Algoritmalar — Proje 1 Çözüm Raporu</span>
          </div>
          <div className="text-slate-600">
            Hazırlayan: <strong className="text-slate-900">Enes Öztürk</strong>
          </div>
        </div>
      </footer>
    </div>
  );
}
