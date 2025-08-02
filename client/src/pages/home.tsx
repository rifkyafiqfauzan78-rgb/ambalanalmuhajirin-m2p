import { useState } from "react";

export default function Home() {
  const [profileData] = useState({
    name: "Ambalan Al-Muhajirin",
    bio: "Madrasah Aliyah Negeri 2 Parepare\n📅 Periode 2024-2025",
    profileImage: "/attached_assets/Desain tanpa judul_1754129357638.png"
  });

  const handleRegistrationLink = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeEsNbwM2ZElmxTiPbbQLqLKH9it87Nj2K5doDs6M9gPhTLwQ/viewform', '_blank');
  };

  const handleParentPermissionLink = () => {
    window.open('https://drive.google.com/drive/folders/1CxJ4SWMQJuifv_-vTak-IZY-ms00fNPT?usp=share_link', '_blank');
  };

  return (
    <div className="font-sans min-h-screen gradient-bg relative overflow-x-hidden">
      {/* Decorative Image Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Image 1 - Top Left */}
        <div className="rectangle-1 absolute -top-20 -left-10 w-64 h-40 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="/attached_assets/IMG_2452_1754129257913.png"
            alt="Group Photo 1"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        
        {/* Image 2 - Middle Right */}
        <div className="rectangle-2 absolute top-1/3 -right-16 w-72 h-48 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="/attached_assets/be3a14e4-2a89-4b0b-a70a-d3c1c3bf0d1e_1754129257912.jpeg"
            alt="Group Photo 2"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        
        {/* Image 3 - Bottom Left */}
        <div className="rectangle-3 absolute bottom-20 -left-20 w-80 h-44 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="/attached_assets/cccb7414-ff55-4992-a65f-98fe25138cec_1754129257913.jpeg"
            alt="Group Photo 3"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md mx-auto">
          
          {/* Profile Card */}
          <div className="profile-card floating-animation rounded-3xl p-8 mb-8 shadow-2xl border border-white/20">
            {/* Profile Picture */}
            <div className="flex justify-center mb-6">
              <img 
                src={profileData.profileImage}
                alt="Profile Picture" 
                className="w-28 h-28 rounded-full object-cover shadow-lg"
              />
            </div>
            
            {/* Profile Information */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {profileData.name}
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {profileData.bio}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            {/* Link Pendaftaran Button */}
            <button 
              onClick={handleRegistrationLink}
              className="gradient-button w-full py-4 px-6 rounded-2xl text-white font-semibold text-lg shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl border border-white/20 transform hover:scale-105 active:scale-95"
            >
              <div className="flex items-center justify-center space-x-3">
                <span>📝</span>
                <span>Link Pendaftaran</span>
              </div>
            </button>

            {/* Surat Izin Orang Tua Button */}
            <button 
              onClick={handleParentPermissionLink}
              className="gradient-button w-full py-4 px-6 rounded-2xl text-white font-semibold text-lg shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl border border-white/20 transform hover:scale-105 active:scale-95"
            >
              <div className="flex items-center justify-center space-x-3">
                <span>📄</span>
                <span>Surat Izin Orang Tua</span>
              </div>
            </button>
          </div>


        </div>
      </div>
    </div>
  );
}
