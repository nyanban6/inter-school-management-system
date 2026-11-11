import { staff } from '@/lib/demo-data';

export default function StaffPage() {
  return (
    <div style={{ padding: 28 }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: '#64748b', fontWeight: 700 }}>Human resource</div>
        <h1 style={{ margin: '6px 0 0', fontSize: 34 }}>Staff</h1>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 20 }}>
        {staff.map((member) => (
          <div key={member.id} className="card" style={{ padding: 22 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 12, color: '#64748b', textTransform: 'uppercase' }}>{member.id}</div>
                <div style={{ fontWeight: 800, fontSize: 22, marginTop: 6 }}>{member.name}</div>
              </div>
              <span style={{ padding: '6px 10px', borderRadius: 999, background: '#dbeafe', color: '#1d4ed8', fontWeight: 700 }}>{member.status}</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 18, marginTop: 22 }}>
              <div>
                <div style={{ color: '#64748b', fontSize: 12 }}>Role</div>
                <div style={{ fontWeight: 800, marginTop: 4 }}>{member.role}</div>
              </div>
              <div>
                <div style={{ color: '#64748b', fontSize: 12 }}>Department</div>
                <div style={{ fontWeight: 800, marginTop: 4 }}>{member.department}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
