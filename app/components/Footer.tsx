export default function Footer() {
  return (
    <footer className="mt-auto" style={{ borderTop: '1px solid var(--line)', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 space-y-4">
        <div style={{
          border: '1px solid #f59e0b',
          borderLeft: '8px solid #f59e0b',
          borderRadius: '6px',
          backgroundColor: '#fffbeb',
          color: '#92400e',
          padding: '12px 14px',
          fontSize: '13px',
          lineHeight: '1.6',
        }}>
          <strong style={{ display: 'block', marginBottom: '4px', fontWeight: 700 }}>
            ※ 本サイトは技術検証用のデモアプリケーションです
          </strong>
          <p style={{ margin: 0 }}>
            ワンダーランド東京は架空のテーマパークです。FAQデータはAIによって生成された架空の情報です。
          </p>
        </div>
        <p className="text-center text-xs" style={{ color: 'var(--muted)' }}>
          &copy; {new Date().getFullYear()} tikomo software
        </p>
      </div>
    </footer>
  );
}
