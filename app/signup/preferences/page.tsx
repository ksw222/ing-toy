"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function PreferencesPage() {
    const [selected, setSelected] = useState<string[]>([]);
    const options = ["수분/보습", "진정/재생", "미백/광채", "탄력/주름", "모공/피지"];

    const toggleOption = (opt: string) => {
        setSelected(prev => prev.includes(opt) ? prev.filter(i => i !== opt) : [...prev, opt]);
    };

    return (
        <div className="max-w-md mx-auto px-6 pt-20 pb-10">
            <div className="w-full h-1.5 bg-[#F2F2F7] rounded-full mb-12 overflow-hidden">
                <div className="w-3/4 h-full bg-[#004D40] rounded-full transition-all duration-500"></div>
            </div>

            <h2 className="text-[32px] font-bold text-[#1C1C1E] leading-tight mb-4">어떤 피부 고민을<br/>가지고 계신가요?</h2>
            <p className="text-[16px] text-[#8E8E93] mb-10">가장 신경 쓰이는 2~3가지를 선택해주세요.</p>

            <div className="grid grid-cols-2 gap-3 mb-12">
                {options.map(opt => (
                    <button
                        key={opt}
                        onClick={() => toggleOption(opt)}
                        className={`py-6 rounded-3xl text-[15px] font-bold transition-all border ${
                            selected.includes(opt) 
                            ? "bg-[#004D40] border-[#004D40] text-white shadow-md" 
                            : "bg-white border-[#F2F2F7] text-[#1C1C1E] hover:bg-[#F2F2F7]"
                        }`}
                    >
                        {opt}
                    </button>
                ))}
            </div>

            <Link href="/signup/input">
                <button 
                    disabled={selected.length === 0}
                    className={`w-full py-5 rounded-[24px] font-bold shadow-lg transition-all ${
                        selected.length > 0 ? "bg-[#004D40] text-white" : "bg-[#F2F2F7] text-[#8E8E93] cursor-not-allowed"
                    }`}
                >
                    거의 다 됐어요
                </button>
            </Link>
        </div>
    );
}