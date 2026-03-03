"use client";

import { mockUser, sampleProducts } from '../data/mockdata';
import Link from 'next/link';
import { 
  Settings, 
  ChevronRight, 
  FlaskConical, 
  ShieldCheck, 
  Zap, 
  Database, 
  User,
  Plus,
  ArrowUpRight
} from 'lucide-react';

export default function VaultPage() {
    const myProducts = mockUser.ownedProducts.map(owned => ({
        ...sampleProducts.find(p => p.id === owned.id),
        ...owned
    }));

    return (
        <div className="bg-[#F8F9FA] min-h-screen">
            <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-10 lg:pt-16 pb-24">
                
                {/* [SECTION 1] 유저 프로필 및 요약 - 다크 그린을 과감하게 사용 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
                    <div className="lg:col-span-8 bg-[#004D40] rounded-[40px] p-8 lg:p-12 text-white shadow-xl relative overflow-hidden group">
                        <Database className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:scale-110 transition-transform duration-700" size={200} />
                        
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                            <div className="flex items-center gap-6">
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-[32px] flex items-center justify-center">
                                    <User size={40} className="text-white" strokeWidth={1} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <h2 className="text-[28px] font-bold tracking-tight">{mockUser.name}</h2>
                                        <span className="px-3 py-1 bg-[#2ECC71] text-white text-[11px] font-bold rounded-full">PRO 분석가</span>
                                    </div>
                                    <p className="text-white/70 font-medium">{mockUser.skinType} · {mockUser.age}세 · {mockUser.major} 전공</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-8 border-l border-white/10 pl-8">
                                <div>
                                    <div className="text-white/50 text-[12px] font-bold uppercase mb-1">나의 성분 DNA</div>
                                    <div className="text-[24px] font-black">{mockUser.mbti.split(' ')[0]}</div>
                                </div>
                                <div>
                                    <div className="text-white/50 text-[12px] font-bold uppercase mb-1">분석 자산</div>
                                    <div className="text-[24px] font-black">{myProducts.length}개</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* [SECTION 2] 퀵 설정 및 알림 (웹 사이드) */}
                    <div className="lg:col-span-4 bg-white border border-gray-100 rounded-[40px] p-8 flex flex-col justify-between shadow-sm">
                        <div className="flex justify-between items-start">
                            <h3 className="text-[18px] font-bold text-[#1C1C1E]">데이터 관리</h3>
                            <button className="p-3 bg-[#F2F2F7] rounded-full text-[#8E8E93] hover:text-[#004D40] transition-colors">
                                <Settings size={20} />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <Link href="/vault/edit" className="block w-full py-4 bg-[#F2F2F7] hover:bg-[#E8E8E8] rounded-2xl text-center text-[14px] font-bold transition-all">
                                프로필 및 피부타입 수정
                            </Link>
                        </div>
                    </div>
                </div>

                {/* [SECTION 3] 메인 데이터 뱅크 영역 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                    {/* 왼쪽: 성분 데이터 인텔리전스 (기성님이 원하신 성분 데이터 보관함) */}
                    <div className="lg:col-span-7">
                        <h3 className="text-[22px] font-bold text-[#1C1C1E] mb-6 px-1 flex items-center gap-2">
                            <FlaskConical className="text-[#004D40]" size={24} /> 성분 인텔리전스 뱅크
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
                                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-[#2ECC71] mb-4">
                                    <ShieldCheck size={24} />
                                </div>
                                <h4 className="text-[15px] font-bold text-[#1C1C1E] mb-1">내 피부 찰떡 성분</h4>
                                <p className="text-[13px] text-[#8E8E93]">판테놀, 병풀추출물 외 3개</p>
                            </div>
                            <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
                                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-[#F39C12] mb-4">
                                    <Zap size={24} />
                                </div>
                                <h4 className="text-[15px] font-bold text-[#1C1C1E] mb-1">주의가 필요한 성분</h4>
                                <p className="text-[13px] text-[#8E8E93]">고농도 레티놀, 에탄올</p>
                            </div>
                        </div>

                        {/* 화장품 리스트 - 더 데이터 중심적인 깔끔한 리스트 */}
                        <div className="bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-sm">
                            <div className="px-8 py-6 border-b border-gray-50 flex justify-between items-center">
                                <span className="text-[16px] font-bold text-[#1C1C1E]">분석된 화장품 리스트</span>
                                <Link href="/signup/input" className="p-2 bg-[#004D40] text-white rounded-full">
                                    <Plus size={16} />
                                </Link>
                            </div>
                            <div className="divide-y divide-gray-50">
                                {myProducts.map((product: any) => (
                                    <Link key={product.id} href={`/vault/${product.id}`} className="flex items-center justify-between px-8 py-6 hover:bg-[#F9F9FB] transition-all group">
                                        <div className="flex items-center gap-5">
                                            <div className="text-[20px]">{product.match > 90 ? '✅' : '🔍'}</div>
                                            <div>
                                                <div className="text-[11px] font-bold text-[#8E8E93] uppercase mb-0.5">{product.brand}</div>
                                                <div className="text-[16px] font-bold text-[#1C1C1E] group-hover:text-[#004D40] transition-colors">{product.name}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <div className="text-right hidden md:block">
                                                <div className="text-[14px] font-black text-[#004D40]">{product.match}%</div>
                                                <div className="text-[11px] font-bold text-[#2ECC71]">MATCHING</div>
                                            </div>
                                            <ArrowUpRight size={20} className="text-[#D1D1D6] group-hover:text-[#004D40]" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 오른쪽: 추천 및 인사이트 (웹에서 꽉 채워주는 역할) */}
                    <div className="lg:col-span-5 space-y-6">
                        <h3 className="text-[22px] font-bold text-[#1C1C1E] mb-6 px-1">맞춤형 데이터 인사이트</h3>
                        <div className="bg-[#F2F2F7] rounded-[32px] p-8">
                            <h4 className="text-[18px] font-bold text-[#1C1C1E] mb-4">지복합성 피부를 위한 팁</h4>
                            <p className="text-[15px] text-[#48484A] leading-relaxed mb-6">
                                기성님처럼 통계학을 전공하신 분들은 데이터의 정밀함을 아시죠. 현재 루틴에서 **판테놀** 성분이 부족하면 유수분 밸런스가 쉽게 무너집니다.
                            </p>
                            <Link href="/lab/report">
                                <button className="w-full py-4 bg-white text-[#004D40] rounded-2xl font-bold text-[14px] shadow-sm hover:shadow-md transition-all">
                                    전체 분석 리포트 확인
                                </button>
                            </Link>
                        </div>
                        
                        {/* 하단 푸터성 메뉴 */}
                        <div className="px-4 space-y-4">
                            <button className="w-full flex justify-between items-center py-2 text-[14px] text-[#8E8E93] hover:text-[#1C1C1E]">
                                <span>데이터 보안 및 개인정보 처리방침</span>
                                <ChevronRight size={16} />
                            </button>
                            <button className="w-full flex justify-between items-center py-2 text-[14px] text-[#E74C3C] font-bold">
                                <span>로그아웃</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}