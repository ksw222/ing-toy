"use client";

import { useParams } from 'next/navigation';
import { mockUser, sampleProducts, detailedProducts } from '../../data/mockdata';
import Link from 'next/link';
import { 
  ChevronLeft, 
  Star, 
  ShieldCheck, 
  Info, 
  MessageSquare,
  ArrowRight,
  FlaskConical,
  Trash2,
  FileText
} from 'lucide-react';

export default function VaultDetailPage() {
    const params = useParams();
    const productId = Number(params.id);

    // 1. 데이터 조회 및 정제
    const baseProduct = sampleProducts.find(p => p.id === productId);
    const detailProduct = detailedProducts.find(p => p.id === productId);
    const userLog = mockUser.ownedProducts.find(p => p.id === productId);

    const product = baseProduct || detailProduct;

    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F9FA]">
                <p className="text-sm text-gray-400 mb-6">데이터를 찾을 수 없습니다.</p>
                <Link href="/vault">
                    <button className="px-5 py-2.5 bg-[#004D40] text-white rounded-xl text-sm font-bold">보관함으로</button>
                </Link>
            </div>
        );
    }

    const displayMatch = baseProduct?.match ?? detailProduct?.matchScore ?? 0;
    const displayIngredients = baseProduct?.mainIngredients ?? detailProduct?.ingredients.slice(0, 3).map(i => i.name) ?? [];

    return (
        <div className="bg-[#F9FAFB] min-h-screen pb-20 font-sans">
            {/* 상단바: 더 얇고 세련되게 (H: 56px) */}
            <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-5 lg:px-10 h-14 flex items-center justify-between">
                    <Link href="/vault" className="flex items-center gap-1 text-gray-400 hover:text-black transition-colors">
                        <ChevronLeft size={18} /> <span className="text-[13px] font-bold">보관함</span>
                    </Link>
                    <div className="text-[12px] font-bold text-gray-800 uppercase tracking-tighter opacity-40">Ingredient Intelligence Asset</div>
                    <button className="p-2 text-gray-300 hover:text-red-500 transition-colors">
                        <Trash2 size={18} strokeWidth={1.5} />
                    </button>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-5 lg:px-10 pt-8 lg:pt-12">
                {/* [Header] 자산 요약 카드: 영수증/명세서 스타일의 상단 섹션 */}
                <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm mb-6 overflow-hidden">
                    <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-50">
                        <div className="flex-1 p-8 lg:p-10">
                            <span className="text-[11px] font-bold text-[#004D40] mb-2 block tracking-widest uppercase">{product.brand}</span>
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                                {product.name}
                            </h2>
                            <div className="flex flex-wrap gap-1.5">
                                {displayIngredients.map((ing, i) => (
                                    <span key={i} className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-lg text-[11px] font-bold text-gray-500">
                                        # {ing}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {/* 스코어 섹션: 콤팩트한 데이터 배지 */}
                        <div className="lg:w-60 p-8 lg:p-10 bg-gray-50/50 flex flex-col justify-center items-center text-center">
                            <div className="text-[10px] font-bold text-gray-400 uppercase mb-1 tracking-widest">Match Score</div>
                            <div className="text-4xl font-black text-[#004D40] leading-none mb-2">{displayMatch}%</div>
                            <div className="px-2.5 py-1 bg-[#2ECC71]/10 text-[#2ECC71] text-[10px] font-bold rounded-md">분석 신뢰도 높음</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* [Left] 성분 자산 명세서 (테이블 스타일 리스트) */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between bg-white">
                                <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                                    <FileText size={16} className="text-[#004D40]" strokeWidth={2} /> 성분 구성 명세
                                </h3>
                                <span className="text-[11px] text-gray-400 font-medium">총 {detailProduct?.ingredients.length ?? 0}개 분석됨</span>
                            </div>
                            <div className="divide-y divide-gray-50">
                                {detailProduct?.ingredients.map((ing, i) => (
                                    <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50/50 transition-colors group">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold ${
                                                ing.grade === 'green' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                                            }`}>
                                                {ing.grade === 'green' ? '안전' : '주의'}
                                            </div>
                                            <div>
                                                <div className="text-[14px] font-bold text-gray-800 leading-tight mb-0.5">{ing.name}</div>
                                                <div className="text-[11px] text-gray-400">{ing.effect}</div>
                                            </div>
                                        </div>
                                        <Info size={14} className="text-gray-200 group-hover:text-gray-400 transition-colors cursor-help" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* [Right] 로그 및 추천 카드 */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* 분석가 로그 섹션 */}
                        <div className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm">
                            <h3 className="text-sm font-bold text-gray-800 mb-5 flex items-center gap-2">
                                <MessageSquare size={16} className="text-[#004D40]" /> 분석 로그
                            </h3>
                            <div className="bg-gray-50 rounded-2xl p-5 mb-5 border border-gray-100/50">
                                <div className="flex items-center gap-0.5 text-[#FFB800] mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={12} fill={i < (userLog?.rating ?? 0) ? "#FFB800" : "none"} strokeWidth={1.5} className={i < (userLog?.rating ?? 0) ? "text-[#FFB800]" : "text-gray-200"} />
                                    ))}
                                </div>
                                <p className="text-[13px] text-gray-600 leading-relaxed font-medium italic">
                                    "{userLog?.feedback ?? "아직 기록된 피드백 데이터가 없습니다."}"
                                </p>
                            </div>
                            <button className="w-full py-3.5 bg-white border border-gray-200 text-gray-500 rounded-xl font-bold text-[12px] hover:bg-gray-50 transition-all">
                                로그 수정하기
                            </button>
                        </div>

                        {/* AI 대체 자산 추천 섹션 */}
                        <div className="bg-[#1C1C1E] rounded-[32px] p-6 text-white overflow-hidden relative group">
                            <div className="relative z-10">
                                <h3 className="text-sm font-bold mb-5 flex items-center gap-2">
                                    <ShieldCheck size={16} className="text-[#2ECC71]" /> 대체 자산 추천
                                </h3>
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                                    <div className="text-[10px] font-black text-[#2ECC71] mb-2 uppercase tracking-widest">Similarity 98.4%</div>
                                    <div className="text-[15px] font-bold mb-1">{detailProduct?.alternative.name ?? "추천 데이터 분석 중"}</div>
                                    <p className="text-[12px] text-white/40 mb-5 leading-relaxed">성분 구성 유사도가 매우 높으며,<br/>현재 자산 대비 가성비가 25% 우수합니다.</p>
                                    <button className="w-full py-3 bg-white text-black rounded-xl font-bold text-[12px] flex items-center justify-center gap-2 group-hover:bg-[#2ECC71] group-hover:text-white transition-all">
                                        데이터 비교하기 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}