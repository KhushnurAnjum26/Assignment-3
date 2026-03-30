const [apps, setApps] = useState(getInstalledApps());
const handleRemove = (id) => {
  const updated = apps.filter(a => a.id !== id);
  setApps(updated);
  localStorage.setItem("apps", JSON.stringify(updated));
};
<div className="spinner"></div>

export default MyInstallation;