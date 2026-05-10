'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname === '/chat';
    }
    return pathname.startsWith(href);
  };

  return (
    <header style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }} className="border-b border-gray-200 shadow-sm">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="text-[28px] font-bold text-gray-900 hover:text-gray-700 transition-colors">
              FAQ AI Chat
            </Link>
            <span className="ml-3 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
              技術検証用
            </span>
          </div>
          <nav className="flex items-center space-x-2">
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
                isActive('/')
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'text-gray-700 border-gray-300 hover:border-blue-500 hover:text-blue-600'
              }`}
            >
              チャット
            </Link>
            <Link 
              href="/llm-compare" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
                isActive('/llm-compare')
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'text-gray-700 border-gray-300 hover:border-blue-500 hover:text-blue-600'
              }`}
            >
              モデル比較
            </Link>
            <Link 
              href="/help" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
                isActive('/help')
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'text-gray-700 border-gray-300 hover:border-blue-500 hover:text-blue-600'
              }`}
            >
              ヘルプ
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
