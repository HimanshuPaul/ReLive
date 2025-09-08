import { musicData } from "../../assets/resourceData";

export default function Music() {
  return (
    <section className="section bg-gradient-to-r from-green-800 to-green-600 py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-white font-bold mb-4">
          🎵 Healing Sounds
        </h2>
        <p className="text-xl text-white opacity-90 mb-12 max-w-3xl mx-auto">
          Curated playlists and calming music to soothe your mind and elevate
          your mood.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* YouTube Section */}
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <div className="card-header flex items-center mb-4">
              <div className="card-icon bg-red-600 text-white w-12 h-12 flex items-center justify-center rounded-full mr-4">
                YT
              </div>
              <div className="card-title text-xl font-bold text-teal-800">
                YouTube Playlists
              </div>
            </div>
            {musicData.youtube.map((music, i) => (
              <a
                key={i}
                href={music.url}
                target="_blank"
                rel="noopener noreferrer"
                className="music-link block bg-teal-100 border-2 border-teal-400 rounded-lg p-4 mb-4 text-teal-800 hover:bg-teal-600 hover:text-white transition"
              >
                <h4 className="font-semibold">{music.title}</h4>
                <p>{music.description}</p>
              </a>
            ))}
          </div>

          {/* Spotify Section */}
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <div className="card-header flex items-center mb-4">
              <div className="card-icon bg-green-600 text-white w-12 h-12 flex items-center justify-center rounded-full mr-4">
                ♪
              </div>
              <div className="card-title text-xl font-bold text-teal-800">
                Spotify Playlists
              </div>
            </div>
            {musicData.spotify.map((music, i) => (
              <a
                key={i}
                href={music.url}
                target="_blank"
                rel="noopener noreferrer"
                className="music-link block bg-teal-100 border-2 border-teal-400 rounded-lg p-4 mb-4 text-teal-800 hover:bg-teal-600 hover:text-white transition"
              >
                <h4 className="font-semibold">{music.title}</h4>
                <p>{music.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
