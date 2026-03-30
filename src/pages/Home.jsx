import Header from "../components/Header";
import Footer from "../components/Footer";
import apps from "../data/apps.json";
import AppCard from "../components/AppCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      {/* 🔷 Banner */}
      <section className="text-center py-16 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">
          Discover Amazing Apps 🚀
        </h1>
        <p className="mb-6 text-gray-600">
          Find, explore and install your favorite apps easily
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => window.open("https://www.apple.com/app-store/")}
            className="bg-black text-white px-6 py-2 rounded"
          >
            App Store
          </button>

          <button
            onClick={() => window.open("https://play.google.com/")}
            className="bg-green-500 text-white px-6 py-2 rounded"
          >
            Play Store
          </button>
        </div>
      </section>

      {/* 🔷 Stats Section */}
      <section className="grid grid-cols-3 gap-6 px-10 py-10 text-center">
        <div className="shadow p-6 rounded">
          <h2 className="text-2xl font-bold">50K+</h2>
          <p>Apps</p>
        </div>
        <div className="shadow p-6 rounded">
          <h2 className="text-2xl font-bold">1M+</h2>
          <p>Downloads</p>
        </div>
        <div className="shadow p-6 rounded">
          <h2 className="text-2xl font-bold">4.5★</h2>
          <p>Average Rating</p>
        </div>
      </section>

      {/* 🔷 Top Apps */}
      <section className="px-10 py-10">
        <h2 className="text-2xl font-bold mb-6">Top Apps</h2>

        <div className="grid grid-cols-4 gap-6">
          {apps.slice(0, 8).map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/apps")}
            className="bg-blue-500 text-white px-6 py-2 rounded"
          >
            Show All
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;