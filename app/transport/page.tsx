import { transport } from '@/lib/demo-data';

export default function TransportPage() {
  return (
    <div style={{ padding: 28 }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: '#64748b', fontWeight: 700 }}>Operations</div>
        <h1 style={{ margin: '6px 0 0', fontSize: 34 }}>Transport</h1>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 20 }}>
        {transport.map((route) => (
          <div key={route.route} className="card" style={{ padding: 22 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontWeight: 800, fontSize: 22 }}>{route.route}</div>
              <span style={{ padding: '6px 10px', borderRadius: 999, background: route.status === 'On schedule' ? '#dcfce7' : '#fef3c7', color: route.status === 'On schedule' ? '#166534' : '#92400e', fontWeight: 700 }}>{route.status}</span>
            </div>

            <div style={{ display: 'grid', gap: 12, marginTop: 18 }}>
              <div>Driver: <strong>{route.driver}</strong></div>
              <div>Capacity: <strong>{route.capacity}</strong></div>
              <div>Occupied: <strong>{route.occupied}</strong></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
