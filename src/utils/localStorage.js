export const getInstalledApps = () => {
  return JSON.parse(localStorage.getItem("apps")) || [];
};

export const saveApp = (app) => {
  const apps = getInstalledApps();
  const exists = apps.find(a => a.id === app.id);

  if (!exists) {
    apps.push(app);
    localStorage.setItem("apps", JSON.stringify(apps));
  }
};

const [installed, setInstalled] = useState(false);

useEffect(() => {
  const apps = getInstalledApps();
  setInstalled(apps.some(a => a.id == id));
}, []);

<button
  disabled={installed}
  onClick={() => {
    saveApp(app);
    setInstalled(true);
    toast.success("Installed!");
  }}
>
  {installed ? "Installed" : "Install"}
</button>

import { BarChart, Bar, XAxis, YAxis } from "recharts";

<BarChart width={400} height={300} data={app.ratings}>
  <XAxis dataKey="name" />
  <YAxis />
  <Bar dataKey="count" />
</BarChart>