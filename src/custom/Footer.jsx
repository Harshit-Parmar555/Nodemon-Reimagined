import Github from "../assets/github.svg?react";
import LinkedIn from "../assets/linkedin.svg?react";
import WebIcon from "../assets/webicon.svg?react";

const Footer = () => {
  return (
    <footer className="text-white text-center py-6 text-sm flex flex-col items-center gap-4">
      <p className="text-gray-500">© 2025 Nodemon Reimagined. MIT License.</p>
      <p className="mt-2 text-gray-500">Made with ❤️ by Harshit X Code</p>
      <div className="flex items-center gap-6">
        <Github width={16} height={16} className="invert cursor-pointer" />
        <LinkedIn width={16} height={16} className="invert cursor-pointer" />
        <WebIcon width={16} height={16} className="invert cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer;
