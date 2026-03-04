"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, ChevronRight } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="max-w-md mx-auto px-6 pt-20 pb-10">
            <div className="mb-12">
                <h2 className="text-[32px] font-bold text-[#1C1C1E] leading-tight mb-2">반가워요!<br/>다시 오셨네요.</h2>
                <p className="text-[16px] text-[#8E8E93]">데이터 기반 성분 분석 플랫폼, ING</p>
            </div>

            <div className="space-y-4 mb-10">
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="비밀번호"
                        className="w-full pl-12 pr-4 py-5 bg-[#F2F2F7] rounded-2xl outline-none focus:ring-2 focus:ring-[#004D40]/10 transition-all text-[15px]"
                    />
                </div>
            </div>

            <button className="w-full py-5 bg-[#004D40] text-white rounded-[24px] font-bold shadow-lg hover:bg-[#003D33] active:scale-[0.98] transition-all mb-6">
                로그인
            </button>

            <div className="flex justify-center gap-6 text-[14px] text-[#8E8E93]">
                <button className="hover:text-[#1C1C1E]">비밀번호 찾기</button>
                <span className="text-gray-200">|</span>
                <Link href="/signup" className="hover:text-[#004D40] font-bold flex items-center">
                    회원가입 <ChevronRight size={16} />
                </Link>
            </div>
        </div>
    );
}