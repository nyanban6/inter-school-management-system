import { attendanceLog } from '@/lib/demo-data';

export default function AttendancePage() {
  return (
    <div style={{ padding: 28 }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: '#64748b', fontWeight: 700 }}>Monitoring</div>
        <h1 style={{ margin: '6px 0 0', fontSize: 34 }}>Attendance</h1>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 20 }}>
        {attendanceLog.map((day) => (
          <div key={day.date} className="card" style={{ padding: 20 }}>
            <div style={{ color: '#64748b', fontWeight: 700, marginBottom: 12 }}>{day.date}</div>
            <div style={{ display: 'grid', gap: 8 }}>
              <div>Present: <strong>{day.present}</strong></div>
              <div>Absent: <strong>{day.absent}</strong></div>
              <div>Late: <strong>{day.late}</strong></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
