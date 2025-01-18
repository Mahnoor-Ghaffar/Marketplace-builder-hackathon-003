 import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function AnnouncementBar({ bgColor = "var(--Announcment-bar)" }) {
  return (
    <div
      className={`hidden sm:flex w-full text-white items-center justify-between px-4 lg:px-8 xl:px-12 h-[50px]`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Left Side: Contact Info */}
      <div className="flex items-center gap-4">
        {/* Phone */}
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-[30px] md:text-base" />
          <span className="text-[15px] md:text-base">+1 234 567 890</span>
        </div>
        {/* Email */}
        <div className="flex items-center gap-2">
          <FaEnvelope className="sm:text-[11px] md:text-base" />
          <span className="text-[15px] md:text-base">contact@gmail.com</span>
        </div>
      </div>

      {/* Center: Announcement Text */}
      <div className="text-center">
        <h1 className="text-[15px] md:text-base lg:text-lg font-bold">
          Follow us and get a chance to win 80%! off
        </h1>
      </div>

      {/* Right Side: Social Media */}
      <div className="flex items-center gap-4">
        <span className="text-[15px] md:text-base">Follow Us:</span>
        <FaInstagram className="text-lg md:text-xl cursor-pointer hover:text-gray-400" />
        <FaFacebook className="text-lg md:text-xl cursor-pointer hover:text-gray-400" />
        <FaTwitter className="text-lg md:text-xl cursor-pointer hover:text-gray-400" />
        <FaYoutube className="text-lg md:text-xl cursor-pointer hover:text-gray-400" />
      </div>
    </div>
  );
}

export default AnnouncementBar;
