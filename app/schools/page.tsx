import Link from 'next/link';
import { Schools } from 'lucide-react';
import { schools } from '@/lib/demo-data';

export default function SchoolsPage() {
  return (
    <div style={{ padding: 28 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <div style={{ color: '#64748b', fontWeight: 700 }}>Network overview</div>
          <h1 style={{ margin: '6px 0 0', fontSize: 34 }}>Schools</h1>
        </div>
        <Link href="/dashboard" style={{ background: '#111827', color: 'white', padding: '12px 18px', borderRadius: 12, fontWeight: 700 }}>Back to dashboard</Link>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 20 }}>
        {schools.map((school) => (
          <div key={school.code} className="card" style={{ padding: 22 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: '#dbeafe', display: 'grid', placeItems: 'center', color: '#1d4ed8' }}>
                  <Schools size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 22 }}>{school.name}</div>
                  <div style={{ color: '#64748b' }}>{school.code}</div>
                </div>
              </div>
              <span style={{ padding: '6px 10px', borderRadius: 999, background: school.status === 'Active' ? '#dcfce7' : '#fef3c7', color: school.status === 'Active' ? '#166534' : '#92400e', fontWeight: 700 }}>{school.status}</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 18, marginTop: 22 }}>
              <div>
                <div style={{ color: '#64748b', fontSize: 12 }}>Location</div>
                <div style={{ fontWeight: 800, marginTop: 4 }}>{school.location}</div>
              </div>
              <div>
                <div style={{ color: '#64748b', fontSize: 12 }}>Students</div>
                <div style={{ fontWeight: 800, marginTop: 4 }}>{school.students}</div>
              </div>
              <div>
                <div style={{ color: '#64748b', fontSize: 12 }}>Staff</div>
                <div style={{ fontWeight: 800, marginTop: 4 }}>{school.staff}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
