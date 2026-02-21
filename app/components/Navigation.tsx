"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
    const pathname = usePathname();

    const navItems = [
        { id: '/', label: '홈', icon: '🏠' },
        { id: '/market', label: '마켓', icon: '🛍️' },
        { id: '/lab', label: '실험실', icon: '🧪' },
        { id: '/vault', label: '마이페이지', icon: '👤' }
    ];

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="hidden lg:block sticky top-0 bg-white border-b border-gray-100 z-40 shadow-sm backdrop-blur-md bg-white/80">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-12">
                            <Link href="/" className="text-[20px] font-bold text-[#004D40] hover:opacity-80 transition-opacity">
                                ING
                            </Link>
                            <div className="flex items-center gap-1">
                                {navItems.map(item => (
                                    <Link
                                        key={item.id}
                                        href={item.id}
                                        className={`nav-item px-4 py-2 text-[15px] font-medium rounded-lg transition-colors relative ${
                                            pathname === item.id 
                                            ? 'text-[#004D40] active' 
                                            : 'text-[#8E8E93] hover:text-[#1C1C1E] hover:bg-[#F2F2F7]'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <button className="px-4 py-2 bg-[#004D40] hover:bg-[#003D33] text-white text-[14px] font-medium rounded-lg transition-colors shadow-sm hover:shadow-md">
                            로그인
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <div className="max-w-lg mx-auto flex justify-around px-2 py-2">
                    {navItems.map(item => (
                        <Link
                            key={item.id}
                            href={item.id}
                            className="flex flex-col items-center gap-1 px-6 py-2 active:scale-95 transition-transform"
                        >
                            <span className="text-2xl">{item.icon}</span>
                            <span className={`text-xs font-medium ${pathname === item.id ? 'text-[#004D40]' : 'text-[#8E8E93]'}`}>
                                {item.label}
                            </span>
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    );
}