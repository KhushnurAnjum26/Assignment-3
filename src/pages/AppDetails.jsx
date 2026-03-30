import { useParams } from "react-router-dom";
import apps from "../data/apps.json";

function AppDetails() {
  const { id } = useParams();

  const app = apps.find(a => a.id == id);

  if (!app) {
    return <p>App Not Found</p>;
  }

  return (
    <div>
      <h1>{app.title}</h1>
      <img src={app.image} alt="" />
      <p>{app.description}</p>
    </div>
  );
}

export default AppDetails;