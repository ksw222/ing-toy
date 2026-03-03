"use client";

import { useState } from 'react';
import { mockUser } from '../../data/mockdata';
import Link from 'next/link';
import { Camera } from 'lucide-react';

export default function ProfileEditPage() {
    const [name, setName] = useState(mockUser.name);

    return (
        <div className="max-w-md mx-auto px-6 pt-12 pb-20">
            <Link href="/vault" className="text-[14px] text-[#8E8E93] mb-8 block hover:text-[#1C1C1E]">← 마이페이지</Link>
            
            <h2 className="text-[28px] font-bold text-[#1C1C1E] mb-10">프로필 수정</h2>

            {/* 프로필 이미지 변경 */}
            <div className="flex flex-col items-center mb-12">
                <div className="relative group">
                    <div className="w-24 h-24 bg-[#004D40] rounded-[36px] flex items-center justify-center text-white text-3xl font-black shadow-lg">
                        {name[0]}
                    </div>
                    <button className="absolute -right-1 -bottom-1 p-2 bg-white border border-gray-200 rounded-full shadow-md text-[#004D40]">
                        <Camera size={18} strokeWidth={2} />
                    </button>
                </div>
            </div>

            <div className="space-y-6">
                <div>
                    <label className="block text-[12px] font-bold text-[#8E8E93] mb-2 px-1">이름</label>
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-5 py-4 bg-[#F2F2F7] rounded-2xl outline-none focus:ring-2 focus:ring-[#004D40]/10"
                    />
                </div>
                <div>
                    <label className="block text-[12px] font-bold text-[#8E8E93] mb-2 px-1">피부 타입</label>
                    <select className="w-full px-5 py-4 bg-[#F2F2F7] rounded-2xl outline-none appearance-none cursor-pointer">
                        <option>지복합성</option>
                        <option>건성</option>
                        <option>지성</option>
                        <option>민감성</option>
                    </select>
                </div>
            </div>

            <button className="w-full py-5 bg-[#004D40] text-white rounded-[24px] font-bold mt-12 shadow-lg active:scale-95 transition-all">
                수정 완료
            </button>
        </div>
    );
}