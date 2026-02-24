"use client";

import Link from 'next/link';
import { Scale, FlaskRound, ClipboardCheck  } from 'lucide-react';

export default function LabMainPage() {
    const labMenus = [
        {
            id: 'combo',
            title: '성분 궁합 분석',
            desc: '사용 중인 성분 간의\n화학적 상호작용을 체크합니다.',
            icon: <FlaskRound size={30} strokeWidth={2} color='#004D40' />,
            link: '/lab/combo',
            tag: '필수 체크'
        },
        {
            id: 'compare',
            title: '화장품 비교 분석',
            desc: '제품명을 입력하면\n핵심 성분 리포트를 생성합니다.',
            icon: <Scale size={30} strokeWidth={2} color='#004D40' />, // 아이콘 업데이트
            link: '/lab/compare',
            tag: 'NEW'
        },
        {
            id: 'mbti',
            title: '성분 MBTI',
            desc: '내 피드백 데이터를 기반으로\n인생 성분을 찾아드립니다.',
            icon: <ClipboardCheck size={30} strokeWidth={2} color='#004D40' />,
            link: '/lab/mbti',
            tag: 'BETA'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-5 lg:px-6 pt-16 lg:pt-24 pb-20">
            <div className="mb-12 lg:mb-20">
                <h2 className="text-[32px] lg:text-[48px] font-bold text-[#1C1C1E] leading-tight mb-4">
                    ING 실험실에서<br/>피부의 답을 찾으세요
                </h2>
                <p className="text-[16px] lg:text-[18px] text-[#8E8E93] font-medium">데이터 분석가가 설계한 정밀한 스킨케어 알고리즘</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {labMenus.map((menu) => (
                    <Link key={menu.id} href={menu.link} className="group">
                        <div className="h-full bg-white border border-gray-100 rounded-[40px] p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-3 transition-all duration-500 flex flex-col items-start cursor-pointer relative overflow-hidden">
                            <div className="absolute top-6 right-8 text-[11px] font-bold text-[#004D40] bg-[#F2F2F7] px-3 py-1 rounded-full">
                                {menu.tag}
                            </div>
                            <div className="w-16 h-16 bg-[#F2F2F7] rounded-[24px] flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500">
                                {menu.icon}
                            </div>
                            <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1C1C1E] mb-4">{menu.title}</h3>
                            <p className="text-[14px] lg:text-[15px] text-[#8E8E93] leading-relaxed mb-10 whitespace-pre-line">
                                {menu.desc}
                            </p>
                            <div className="mt-auto flex items-center gap-2 text-[#004D40] font-bold text-[15px]">
                                분석하기 <span className="group-hover:translate-x-2 transition-transform">→</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}