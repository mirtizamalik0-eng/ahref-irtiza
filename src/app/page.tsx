import React from "react";
import Link from "next/link";
import { ArrowRight, Zap, Globe, Search, ShieldCheck } from "lucide-react";

export default function MarketingHomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
      <header className="max-w-7xl mx-auto w-full px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white">
            AI
          </div>
          <span className="text-lg font-extrabold tracking-tight">Ahref-Irtiza</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/free-tools/backlink-checker" className="text-xs font-semibold text-slate-300 hover:text-white">
            Free Tools
          </Link>
          <Link href="/app" className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-bold transition-colors">
            Launch App
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto text-center px-4 py-20 space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
          <Zap className="w-3.5 h-3.5" />
          Enterprise SEO Intelligence & Web Graph Engine
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Supercharge Your Search Rankings with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Ahref-Irtiza</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
          Explore backlinks, analyze keyword difficulty, run deep site audits, and track search visibility with our proprietary metric algorithms.
        </p>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link href="/app" className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm inline-flex items-center gap-2 shadow-lg transition-colors">
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/free-tools/backlink-checker" className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold text-sm transition-colors">
            Try Free Backlink Checker
          </Link>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto w-full px-6 py-8 border-t border-slate-900 text-center text-xs text-slate-500">
        © 2026 Ahref-Irtiza Platform. All rights reserved.
      </footer>
    </div>
  );
}