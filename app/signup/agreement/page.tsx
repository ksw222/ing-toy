"use client";

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export default function AgreementPage() {
    const [agreed, setAgreed] = useState([false, false, false]);

    const toggleAll = () => {
        const allChecked = agreed.every(v => v);
        setAgreed(allChecked ? [false, false, false] : [true, true, true]);
    };

    const toggleOne = (idx: number) => {
        const newAgreed = [...agreed];
        newAgreed[idx] = !newAgreed[idx];
        setAgreed(newAgreed);
    };

    return (
        <div className="max-w-md mx-auto px-6 pt-20 pb-10">
            <div className="w-full h-1.5 bg-[#F2F2F7] rounded-full mb-12 overflow-hidden">
                <div className="w-2/4 h-full bg-[#004D40] rounded-full transition-all duration-500"></div>
            </div>

            <h2 className="text-[32px] font-bold text-[#1C1C1E] leading-tight mb-10">서비스 이용을 위해<br/>동의가 필요해요.</h2>

            <div className="space-y-4 mb-12">
                <div onClick={toggleAll} className="flex items-center gap-3 p-5 bg-[#F2F2F7] rounded-2xl cursor-pointer">
                    <CheckCircle2 size={24} className={agreed.every(v => v) ? "text-[#004D40]" : "text-[#D1D1D6]"} strokeWidth={1.5} />
                    <span className="text-[16px] font-bold text-[#1C1C1E]">약관에 모두 동의합니다</span>
                </div>
                
                {["이용약관 동의 (필수)", "개인정보 수집 및 이용 (필수)", "분석 데이터 활용 동의 (필수)"].map((text, i) => (
                    <div key={i} onClick={() => toggleOne(i)} className="flex items-center justify-between px-5 py-2 cursor-pointer">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 size={20} className={agreed[i] ? "text-[#004D40]" : "text-[#D1D1D6]"} strokeWidth={1.5} />
                            <span className="text-[14px] text-[#48484A]">{text}</span>
                        </div>
                        <ChevronRight size={16} className="text-[#D1D1D6]" />
                    </div>
                ))}
            </div>

            <Link href="/signup/preferences">
                <button 
                    disabled={!agreed.every(v => v)}
                    className={`w-full py-5 rounded-[24px] font-bold shadow-lg transition-all ${
                        agreed.every(v => v) ? "bg-[#004D40] text-white" : "bg-[#F2F2F7] text-[#8E8E93] cursor-not-allowed"
                    }`}
                >
                    확인
                </button>
            </Link>
        </div>
    );
}