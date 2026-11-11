import { notices } from '@/lib/demo-data';

export default function NoticesPage() {
  return (
    <div style={{ padding: 28 }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: '#64748b', fontWeight: 700 }}>Communication</div>
        <h1 style={{ margin: '6px 0 0', fontSize: 34 }}>Notices</h1>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 20 }}>
        {notices.map((notice) => (
          <div key={notice.title} className="card" style={{ padding: 22 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontWeight: 800, fontSize: 22 }}>{notice.title}</div>
              <span style={{ padding: '6px 10px', borderRadius: 999, background: notice.priority === 'High' ? '#fee2e2' : notice.priority === 'Medium' ? '#fef3c7' : '#dbeafe', color: notice.priority === 'High' ? '#991b1b' : notice.priority === 'Medium' ? '#92400e' : '#1d4ed8', fontWeight: 700 }}>{notice.priority}</span>
            </div>
            <div style={{ marginTop: 18, color: '#64748b' }}>{notice.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
