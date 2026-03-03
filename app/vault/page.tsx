"use client";

import { mockUser, sampleProducts } from '../data/mockdata';
import Link from 'next/link';
import { Package, ChevronRight, Star, Settings2, UserCircle, ShieldCheck, PieChart } from 'lucide-react';

export default function VaultPage() {
    const myProducts = mockUser.ownedProducts.map(owned => ({
        ...sampleProducts.find(p => p.id === owned.id),
        ...owned
    }));

    return (
        <div className="max-w-4xl mx-auto px-5 pt-12 pb-24">
            {/* 1. 프로필 섹션 (수정 버튼 포함) */}
            <div className="bg-white border border-gray-100 rounded-[40px] p-8 lg:p-10 mb-8 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-[#F2F2F7] rounded-[32px] flex items-center justify-center text-[#004D40]">
                        <UserCircle size={48} strokeWidth={1} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h2 className="text-[22px] font-bold text-[#1C1C1E]">{mockUser.name}님</h2>
                            <span className="px-2 py-0.5 bg-[#004D40]/10 text-[#004D40] text-[11px] font-bold rounded-full">LV.1 분석가</span>
                        </div>
                        <p className="text-[14px] text-[#8E8E93]">{mockUser.skinType} · {mockUser.age}세</p>
                    </div>
                </div>
                <Link href="/vault/edit">
                    <button className="px-5 py-2.5 bg-[#F2F2F7] hover:bg-[#E8E8E8] text-[#1C1C1E] text-[13px] font-bold rounded-2xl transition-all">
                        프로필 수정
                    </button>
                </Link>
            </div>

            {/* 2. 데이터 요약 카드 (애플 스타일 위젯) */}
            <div className="grid grid-cols-2 gap-4 mb-10">
                <Link href="/lab/report" className="bg-[#004D40] rounded-[32px] p-6 text-white group overflow-hidden relative">
                    <PieChart className="absolute -right-2 -bottom-2 opacity-10 group-hover:scale-110 transition-transform" size={80} />
                    <h4 className="text-[13px] font-bold text-white/60 mb-1">성분 분석 스코어</h4>
                    <div className="text-[24px] font-black">{mockUser.mbti.split(' ')[0]}</div>
                </Link>
                <div className="bg-white border border-gray-100 rounded-[32px] p-6">
                    <h4 className="text-[13px] font-bold text-[#8E8E93] mb-1">보관 중인 데이터</h4>
                    <div className="text-[24px] font-black text-[#1C1C1E]">{myProducts.length}개 제품</div>
                </div>
            </div>

            {/* 3. 내 화장품 보관함 (메인 섹션) */}
            <div className="mb-10">
                <div className="flex justify-between items-center px-2 mb-4">
                    <h3 className="text-[18px] font-bold text-[#1C1C1E]">나의 데이터 보관함</h3>
                    <Link href="/signup/input" className="text-[13px] font-bold text-[#004D40]">+ 추가</Link>
                </div>
                <div className="space-y-3">
                    {myProducts.map((product: any) => (
                        <Link key={product.id} href={`/vault/${product.id}`}>
                            <div className="bg-white border border-gray-50 rounded-[28px] p-5 flex items-center justify-between hover:bg-[#F9F9FB] transition-all group">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#F2F2F7] rounded-xl flex items-center justify-center text-[#004D40] group-hover:bg-[#004D40] group-hover:text-white transition-all">
                                        <Package size={20} />
                                    </div>
                                    <div>
                                        <div className="text-[15px] font-bold text-[#1C1C1E]">{product.name}</div>
                                        <div className="text-[12px] text-[#2ECC71] font-bold">매칭 {product.match}%</div>
                                    </div>
                                </div>
                                <ChevronRight size={18} className="text-[#D1D1D6]" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* 4. 기타 설정 메뉴 (토스 스타일) */}
            <div className="bg-white border border-gray-100 rounded-[32px] overflow-hidden">
                <button className="w-full px-8 py-5 flex items-center justify-between hover:bg-[#F9F9FB] transition-colors border-b border-gray-50">
                    <span className="text-[15px] font-medium text-[#48484A]">알림 설정</span>
                    <ChevronRight size={16} className="text-[#D1D1D6]" />
                </button>
                <button className="w-full px-8 py-5 flex items-center justify-between hover:bg-[#F9F9FB] transition-colors">
                    <span className="text-[15px] font-medium text-[#E74C3C]">로그아웃</span>
                </button>
            </div>
        </div>
    );
}