import React, { useState } from 'react';

const CameraFeed = ({ cameraName, status, videoUrl }) => {
  const [isLoading, setIsLoading] = useState(true); // Track if the video is loading
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Track if video is playing

  // Handle when the video starts playing
  const handleVideoPlay = () => {
    setIsLoading(false); // Hide the loading bar when the video starts playing
    setIsVideoPlaying(true); // Mark video as playing
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-2">{cameraName}</h3>
      <div className={`p-2 rounded-lg ${status === 'Online' ? 'bg-green-100' : 'bg-red-100'} mb-4`}>
        <span className={`text-sm font-semibold ${status === 'Online' ? 'text-green-700' : 'text-red-700'}`}>
          {status}
        </span>
      </div>

      {/* Video container */}
      <div className="relative bg-gray-200 rounded-lg overflow-hidden">
        {/* Loading Bar */}
        {isLoading && (
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="w-1/2 bg-gray-400 h-2 rounded-full">
              <div className="bg-blue-600 h-full animate-pulse w-1/3"></div>
            </div>
          </div>
        )}

        {/* Video player */}
        <video
          className="w-full"
          controls
          onPlay={handleVideoPlay} // Trigger when the video starts playing
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [activeCamera, setActiveCamera] = useState(0);

  const cameras = [
    { id: 1, name: 'Footage Building', status: 'Online', videoUrl: '/path/to/front-door-feed.mp4' },
    { id: 2, name: 'Backyard', status: 'Offline', videoUrl: '/path/to/backyard-feed.mp4' },
    { id: 3, name: 'Garage', status: 'Online', videoUrl: '/path/to/garage-feed.mp4' }
  ];

  return (
    <div className="h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-semibold mb-4">CCTV Dashboard</h2>
        <ul>
          {cameras.map((camera, index) => (
            <li
              key={camera.id}
              className={`cursor-pointer p-3 mb-2 rounded-lg hover:bg-gray-700 ${activeCamera === index ? 'bg-gray-600' : ''}`}
              onClick={() => setActiveCamera(index)}
            >
              {camera.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <h2 className="text-3xl font-bold mb-6 text-green-500"> AI Nayeli, Sharjah </h2>
        <p className="text-red-600 font-bold">1204, AI Nayeli 5 Sharjah</p>
        <div className="grid grid-cols-3 gap-4">
          {/* Display multiple CameraFeeds */}
          {cameras.map((camera, index) => (
            <CameraFeed
              cameraName={cameras[activeCamera].name}
              status={cameras[activeCamera].status}
              videoUrl={cameras[activeCamera].videoUrl}
            />
          ))}

{cameras.map((camera, index) => (
            <CameraFeed
              cameraName={cameras[activeCamera].name}
              status={cameras[activeCamera].status}
              videoUrl={cameras[activeCamera].videoUrl}
            />
          ))}

{cameras.map((camera, index) => (
            <CameraFeed
              cameraName={cameras[activeCamera].name}
              status={cameras[activeCamera].status}
              videoUrl={cameras[activeCamera].videoUrl}
            />
          ))}

{cameras.map((camera, index) => (
            <CameraFeed
              cameraName={cameras[activeCamera].name}
              status={cameras[activeCamera].status}
              videoUrl={cameras[activeCamera].videoUrl}
            />
          ))}

{cameras.map((camera, index) => (
            <CameraFeed
              cameraName={cameras[activeCamera].name}
              status={cameras[activeCamera].status}
              videoUrl={cameras[activeCamera].videoUrl}
            />
          ))}

{cameras.map((camera, index) => (
            <CameraFeed
              cameraName={cameras[activeCamera].name}
              status={cameras[activeCamera].status}
              videoUrl={cameras[activeCamera].videoUrl}
            />
          ))}
                 {cameras.map((camera, index) => (
            <CameraFeed
              cameraName={cameras[activeCamera].name}
              status={cameras[activeCamera].status}
              videoUrl={cameras[activeCamera].videoUrl}
            />
          ))}


{cameras.map((camera, index) => (
            <CameraFeed
              cameraName={cameras[activeCamera].name}
              status={cameras[activeCamera].status}
              videoUrl={cameras[activeCamera].videoUrl}
            />
          ))}
                 {cameras.map((camera, index) => (
            <CameraFeed
              cameraName={cameras[activeCamera].name}
              status={cameras[activeCamera].status}
              videoUrl={cameras[activeCamera].videoUrl}
            />
          ))}

{cameras.map((camera, index) => (
            <CameraFeed
              cameraName={cameras[activeCamera].name}
              status={cameras[activeCamera].status}
              videoUrl={cameras[activeCamera].videoUrl}
            />
          ))}

{cameras.map((camera, index) => (
            <CameraFeed
              cameraName={cameras[activeCamera].name}
              status={cameras[activeCamera].status}
              videoUrl={cameras[activeCamera].videoUrl}
            />
          ))}

{cameras.map((camera, index) => (
            <CameraFeed
              cameraName={cameras[activeCamera].name}
              status={cameras[activeCamera].status}
              videoUrl={cameras[activeCamera].videoUrl}
            />
          ))}

{cameras.map((camera, index) => (
            <CameraFeed
              cameraName={cameras[activeCamera].name}
              status={cameras[activeCamera].status}
              videoUrl={cameras[activeCamera].videoUrl}
            />
          ))}

{cameras.map((camera, index) => (
            <CameraFeed
              cameraName={cameras[activeCamera].name}
              status={cameras[activeCamera].status}
              videoUrl={cameras[activeCamera].videoUrl}
            />
          ))}

{cameras.map((camera, index) => (
            <CameraFeed
              cameraName={cameras[activeCamera].name}
              status={cameras[activeCamera].status}
              videoUrl={cameras[activeCamera].videoUrl}
            />
          ))}

{cameras.map((camera, index) => (
            <CameraFeed
              cameraName={cameras[activeCamera].name}
              status={cameras[activeCamera].status}
              videoUrl={cameras[activeCamera].videoUrl}
            />
          ))}
                 {cameras.map((camera, index) => (
            <CameraFeed
              cameraName={cameras[activeCamera].name}
              status={cameras[activeCamera].status}
              videoUrl={cameras[activeCamera].videoUrl}
            />
          ))}
                 {cameras.map((camera, index) => (
            <CameraFeed
              cameraName={cameras[activeCamera].name}
              status={cameras[activeCamera].status}
              videoUrl={cameras[activeCamera].videoUrl}
            />
          ))}

{cameras.map((camera, index) => (
            <CameraFeed
              cameraName={cameras[activeCamera].name}
              status={cameras[activeCamera].status}
              videoUrl={cameras[activeCamera].videoUrl}
            />
          ))}

{cameras.map((camera, index) => (
            <CameraFeed
              cameraName={cameras[activeCamera].name}
              status={cameras[activeCamera].status}
              videoUrl={cameras[activeCamera].videoUrl}
            />
          ))}
                 {cameras.map((camera, index) => (
            <CameraFeed
              cameraName={cameras[activeCamera].name}
              status={cameras[activeCamera].status}
              videoUrl={cameras[activeCamera].videoUrl}
            />
          ))}
                 {cameras.map((camera, index) => (
            <CameraFeed
              cameraName={cameras[activeCamera].name}
              status={cameras[activeCamera].status}
              videoUrl={cameras[activeCamera].videoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
