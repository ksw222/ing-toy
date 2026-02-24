"use client";

import { historyItems } from '../data/mockdata';
import { User, Bell, ScrollText, LockKeyhole } from 'lucide-react';

export default function VaultPage() {
    return (
        <div className="max-w-6xl mx-auto px-5 lg:px-6 pt-8 lg:pt-12">
            <h2 className="text-[24px] lg:text-[32px] font-bold text-[#1C1C1E] mb-6">마이</h2>

            {/* 프로필 카드 */}
            <div className="bg-[#004D40] rounded-2xl p-6 lg:p-8 mb-8 shadow-lg">
                <div className="flex items-center gap-4 lg:gap-6 mb-6">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-white/10 flex items-center justify-center text-2xl lg:text-3xl backdrop-blur-sm">
                        <User size={30} strokeWidth={3} color='#FFFFFF'/>
                    </div>
                    <div>
                        <div className="text-white text-[18px] lg:text-[24px] font-bold mb-1">내 피부</div>
                        <div className="text-white/80 text-[13px] lg:text-[14px]">지성 · 민감성</div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {['분석 12', '제품 8', '성분 45'].map((stat, i) => (
                        <div key={i} className="text-center py-2 lg:py-4 bg-white/5 rounded-xl backdrop-blur-sm">
                            <div className="text-white text-[24px] lg:text-[32px] font-bold mb-1">{stat.split(' ')[1]}</div>
                            <div className="text-white/70 text-[11px] lg:text-[13px]">{stat.split(' ')[0]}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* 최근 분석 기록 */}
                <div className="col-span-1 lg:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-[16px] lg:text-[18px] font-bold text-[#1C1C1E]">최근 분석</h3>
                        <button className="text-[13px] text-[#004D40] font-medium hover:underline">전체보기</button>
                    </div>
                    <div className="space-y-3">
                        {historyItems.map((item, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 lg:p-5 flex justify-between items-center hover:shadow-md transition-shadow">
                                <div>
                                    <div className="text-[14px] lg:text-[16px] font-bold text-[#1C1C1E] mb-1">{item.ing}</div>
                                    <div className="text-[11px] lg:text-[12px] text-[#8E8E93]">{item.date} {item.time}</div>
                                </div>
                                <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm lg:text-base ${
                                    item.status === 'safe' ? 'bg-[#2ECC71]' : 
                                    item.status === 'danger' ? 'bg-[#E74C3C]' : 'bg-[#F39C12]'
                                }`}>
                                    {item.status === 'safe' ? '✓' : item.status === 'danger' ? '×' : '!'}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 설정 메뉴 */}
                <div>
                    <h3 className="hidden lg:block text-[18px] font-bold text-[#1C1C1E] mb-4">설정</h3>
                    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                        {[
                            { icon: <User size={20} strokeWidth={2.5} />, label: '프로필 수정' },
                            { icon: <Bell size={20} strokeWidth={2.5} />, label: '알림 설정' },
                            { icon: <ScrollText size={20} strokeWidth={2.5} />, label: '이용약관' },
                            { icon: <LockKeyhole size={20} strokeWidth={2.5} />, label: '개인정보처리방침' }
                        ].map((item, i, arr) => (
                            <button
                                key={i}
                                className={`w-full flex items-center justify-between px-5 py-4 hover:bg-[#F2F2F7] active:bg-[#F2F2F7] transition-colors ${
                                    i !== arr.length - 1 ? 'border-b border-gray-200' : ''
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-[18px] lg:text-[20px]">{item.icon}</span>
                                    <span className="text-[14px] font-medium text-[#1C1C1E]">{item.label}</span>
                                </div>
                                <span className="text-[#8E8E93]">›</span>
                            </button>
                        ))}
                    </div>
                    <div className="mt-8 text-center lg:hidden">
                        <p className="text-[11px] text-[#8E8E93]">ING v1.0.0</p>
                    </div>
                </div>
            </div>
        </div>
    );
}