import React from "react";
import Link from "next/link";
import { Globe, KeyRound, FileSearch, ShieldCheck, ArrowRight } from "lucide-react";

export default function AppWorkspaceHome() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
        <h1 className="text-2xl font-extrabold text-slate-900">
          Welcome to Ahref-Irtiza Workspace
        </h1>
        <p className="text-sm text-slate-600">
          Select a tool below to begin your SEO research, backlink analysis, or keyword discovery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/free-tools/backlink-checker" className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-600 transition-all space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Globe className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900">Site & Backlink Explorer</h3>
          <p className="text-xs text-slate-500">Inspect domain scores, dofollow referring domains, and backlink graphs.</p>
        </Link>

        <Link href="/free-tools/keyword-generator" className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-600 transition-all space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <KeyRound className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900">Keywords Explorer</h3>
          <p className="text-xs text-slate-500">Discover search volumes, keyword difficulty (KD), and traffic potential.</p>
        </Link>

        <Link href="/admin" className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-600 transition-all space-y-3">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900">Super-Admin Panel</h3>
          <p className="text-xs text-slate-500">Monitor tenant credit consumption and provider cost ledgers.</p>
        </Link>
      </div>
    </div>
  );
}