"use client";

import { useState } from 'react';
import Link from 'next/link';
import { User, Mail, Lock } from 'lucide-react';

export default function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className="max-w-md mx-auto px-6 pt-20 pb-10">
            {/* 상단 프로그레스 바 (토스 스타일) */}
            <div className="w-full h-1.5 bg-[#F2F2F7] rounded-full mb-12 overflow-hidden">
                <div className="w-1/4 h-full bg-[#004D40] rounded-full"></div>
            </div>

            <div className="mb-12">
                <h2 className="text-[32px] font-bold text-[#1C1C1E] leading-tight mb-2">처음 뵙겠네요!<br/>누구신가요?</h2>
                <p className="text-[16px] text-[#8E8E93]">정확한 분석을 위해 정보를 알려주세요.</p>
            </div>

            <div className="space-y-4 mb-10">
                <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E8E93]" size={20} strokeWidth={1.5} />
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="이름"
                        className="w-full pl-12 pr-4 py-5 bg-[#F2F2F7] rounded-2xl outline-none focus:ring-2 focus:ring-[#004D40]/10 transition-all text-[15px]"
                    />
                </div>
                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E8E93]" size={20} strokeWidth={1.5} />
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="이메일 주소"
                        className="w-full pl-12 pr-4 py-5 bg-[#F2F2F7] rounded-2xl outline-none focus:ring-2 focus:ring-[#004D40]/10 transition-all text-[15px]"
                    />
                </div>
                <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E8E93]" size={20} strokeWidth={1.5} />
                    <input 
                        type="password"
                        placeholder="비밀번호 설정"
                        className="w-full pl-12 pr-4 py-5 bg-[#F2F2F7] rounded-2xl outline-none focus:ring-2 focus:ring-[#004D40]/10 transition-all text-[15px]"
                    />
                </div>
            </div>

            {/* 버튼을 누르면 다음 단계인 '약관 동의'로 이동합니다. */}
            <Link href="/signup/agreement">
                <button className="w-full py-5 bg-[#004D40] text-white rounded-[24px] font-bold shadow-lg hover:bg-[#003D33] active:scale-[0.98] transition-all">
                    다음으로
                </button>
            </Link>

            <div className="mt-8 text-center">
                <Link href="/login" className="text-[14px] text-[#8E8E93] hover:text-[#1C1C1E]">
                    이미 계정이 있나요? <span className="font-bold border-b border-[#8E8E93]">로그인</span>
                </Link>
            </div>
        </div>
    );
}