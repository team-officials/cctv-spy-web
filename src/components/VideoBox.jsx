import React, { useState } from "react";
import { FaPlay, FaDownload } from "react-icons/fa"; // Importing play and download icons
import { FaSpinner } from "react-icons/fa"; // Importing spinner icon

const VideoBox = () => {
  const [loading, setLoading] = useState(false);
  const [playing, setPlaying] = useState(false);

  const handlePlayClick = () => {
    setLoading(true); // Start loading
    setPlaying(false);

    setTimeout(() => {
      setLoading(false); // Stop loading after 5 seconds
      setPlaying(true);
      alert("You need the PIA software on your device.");
    }, 5000);
  };

  return (
    <div className="flex justify-center mt-3">
      {/* Video Box */}
      <div className="bg-white p-4 shadow-md rounded-lg w-56 sm:w-72 md:w-80 text-center">
        {/* Video Placeholder */}
        <div className="w-full h-44 bg-gray-300 flex items-center justify-center">
          {loading ? (
            <FaSpinner className="animate-spin text-gray-700 text-3xl" />
          ) : (
            <span className="text-gray-500">{playing ? "Video Ready" : "Video Preview"}</span>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2">
          <button
            onClick={handlePlayClick}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <FaSpinner className="animate-spin text-white mr-2" />
            ) : (
              <FaPlay className="mr-2" />
            )}
           
          </button>

          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition flex items-center justify-center"
            onClick={() => alert("Download started!")}
          >
            <FaDownload className="mr-2" />
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoBox;
