export default function SettingsOptionsCard({ children, name }) {
  return (
    <div>
      <span>{name}</span>
      {children}
    </div>
  );
}
