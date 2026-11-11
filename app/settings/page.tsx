export default function SettingsPage() {
  return (
    <div style={{ padding: 28 }}>
      <h1>Settings</h1>
      <div className="card" style={{ padding: 24, marginTop: 18 }}>
        <p>Configure institutions, departments, system preferences, roles, and permissions.</p>
        <ul>
          <li>Multi-school configuration</li>
          <li>User roles and permissions</li>
          <li>Notifications preferences</li>
          <li>Academic calendar setup</li>
        </ul>
      </div>
    </div>
  );
}
