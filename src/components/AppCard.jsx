import { useNavigate } from "react-router-dom";

function AppCard({ app }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/apps/${app.id}`)}
      className="shadow rounded p-4 cursor-pointer hover:scale-105 transition"
    >
      <img
        src={app.image}
        alt={app.title}
        className="w-full h-32 object-cover mb-3 rounded"
      />

      <h3 className="font-bold">{app.title}</h3>
      <p className="text-sm text-gray-500">
        ⬇ {app.downloads}
      </p>
      <p className="text-yellow-500">
        ⭐ {app.ratingAvg}
      </p>
    </div>
  );
}

export default AppCard;