import { libraryBooks } from '@/lib/demo-data';

export default function LibraryPage() {
  return (
    <div style={{ padding: 28 }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: '#64748b', fontWeight: 700 }}>Learning resources</div>
        <h1 style={{ margin: '6px 0 0', fontSize: 34 }}>Library</h1>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 20 }}>
        {libraryBooks.map((book) => (
          <div key={book.isbn} className="card" style={{ padding: 22 }}>
            <div style={{ fontWeight: 800, fontSize: 22 }}>{book.title}</div>
            <div style={{ color: '#64748b', marginTop: 6 }}>by {book.author}</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 18, marginTop: 18 }}>
              <div>
                <div style={{ color: '#64748b', fontSize: 12 }}>ISBN</div>
                <div style={{ fontWeight: 800, marginTop: 4 }}>{book.isbn}</div>
              </div>
              <div>
                <div style={{ color: '#64748b', fontSize: 12 }}>Category</div>
                <div style={{ fontWeight: 800, marginTop: 4 }}>{book.category}</div>
              </div>
              <div>
                <div style={{ color: '#64748b', fontSize: 12 }}>Available</div>
                <div style={{ fontWeight: 800, marginTop: 4 }}>{book.available}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
