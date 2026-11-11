import { students } from '@/lib/demo-data';

export default function StudentsPage() {
  return (
    <div style={{ padding: 28 }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: '#64748b', fontWeight: 700 }}>Pupil records</div>
        <h1 style={{ margin: '6px 0 0', fontSize: 34 }}>Students</h1>
      </div>

      <div className="card" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%' }}>
          <thead style={{ background: '#f8fafc' }}>
            <tr>
              <th style={{ textAlign: 'left', padding: 16 }}>Student ID</th>
              <th style={{ textAlign: 'left', padding: 16 }}>Name</th>
              <th style={{ textAlign: 'left', padding: 16 }}>Class</th>
              <th style={{ textAlign: 'left', padding: 16 }}>Parent</th>
              <th style={{ textAlign: 'left', padding: 16 }}>Attendance</th>
              <th style={{ textAlign: 'left', padding: 16 }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} style={{ borderTop: '1px solid #e2e8f0' }}>
                <td style={{ padding: 16 }}>{student.id}</td>
                <td style={{ padding: 16 }}>{student.name}</td>
                <td style={{ padding: 16 }}>{student.className}</td>
                <td style={{ padding: 16 }}>{student.parent}</td>
                <td style={{ padding: 16 }}>{student.attendance}</td>
                <td style={{ padding: 16 }}>
                  <span style={{ padding: '6px 10px', borderRadius: 999, background: student.status === 'Excellent' ? '#dcfce7' : student.status === 'Good' ? '#dbeafe' : '#fef3c7', color: student.status === 'Excellent' ? '#166534' : student.status === 'Good' ? '#1d4ed8' : '#92400e', fontWeight: 700 }}>{student.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
