import { exams } from '@/lib/demo-data';

export default function ExamsPage() {
  return (
    <div style={{ padding: 28 }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: '#64748b', fontWeight: 700 }}>Academics</div>
        <h1 style={{ margin: '6px 0 0', fontSize: 34 }}>Exams</h1>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 20 }}>
        {exams.map((exam) => (
          <div key={exam.subject} className="card" style={{ padding: 22 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ color: '#64748b', textTransform: 'uppercase', fontSize: 12 }}>{exam.exam}</div>
                <div style={{ fontWeight: 800, fontSize: 24, marginTop: 6 }}>{exam.subject}</div>
              </div>
              <span style={{ background: '#dcfce7', color: '#166534', padding: '6px 10px', borderRadius: 999, fontWeight: 700 }}>{exam.grade}</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 18, marginTop: 20 }}>
              <div>
                <div style={{ color: '#64748b', fontSize: 12 }}>Class Average</div>
                <div style={{ fontWeight: 800, marginTop: 4 }}>{exam.average}</div>
              </div>
              <div>
                <div style={{ color: '#64748b', fontSize: 12 }}>Top Score</div>
                <div style={{ fontWeight: 800, marginTop: 4 }}>{exam.top}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
