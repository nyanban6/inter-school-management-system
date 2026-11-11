import { events } from '@/lib/demo-data';

export default function EventsPage() {
  return (
    <div style={{ padding: 28 }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: '#64748b', fontWeight: 700 }}>School life</div>
        <h1 style={{ margin: '6px 0 0', fontSize: 34 }}>Events</h1>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 20 }}>
        {events.map((event) => (
          <div key={event.title} className="card" style={{ padding: 22 }}>
            <div style={{ fontWeight: 800, fontSize: 22 }}>{event.title}</div>
            <div style={{ marginTop: 12, display: 'grid', gap: 8 }}>
              <div>Date: <strong>{event.date}</strong></div>
              <div>Venue: <strong>{event.venue}</strong></div>
              <div>Status: <strong>{event.status}</strong></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
