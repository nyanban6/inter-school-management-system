import { fees } from '@/lib/demo-data';

export default function FeesPage() {
  return (
    <div style={{ padding: 28 }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: '#64748b', fontWeight: 700 }}>Finance</div>
        <h1 style={{ margin: '6px 0 0', fontSize: 34 }}>Fees</h1>
      </div>

      <div className="card" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%' }}>
          <thead style={{ background: '#f8fafc' }}>
            <tr>
              <th style={{ textAlign: 'left', padding: 16 }}>Student</th>
              <th style={{ textAlign: 'left', padding: 16 }}>Amount due</th>
              <th style={{ textAlign: 'left', padding: 16 }}>Status</th>
              <th style={{ textAlign: 'left', padding: 16 }}>Due date</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee) => (
              <tr key={fee.student} style={{ borderTop: '1px solid #e2e8f0' }}>
                <td style={{ padding: 16 }}>{fee.student}</td>
                <td style={{ padding: 16 }}>{fee.due}</td>
                <td style={{ padding: 16 }}>
                  <span style={{ padding: '6px 10px', borderRadius: 999, background: fee.status === 'Paid' ? '#dcfce7' : fee.status === 'Partial' ? '#fef3c7' : '#fee2e2', color: fee.status === 'Paid' ? '#166534' : fee.status === 'Partial' ? '#92400e' : '#991b1b', fontWeight: 700 }}>{fee.status}</span>
                </td>
                <td style={{ padding: 16 }}>{fee.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
