import React from "react";

const Footer = () => {
  return (
      <footer className="footer mt-10 footer-center bg-slate-200 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by NEXT
            Industries Ltd
          </p>
        </aside>
      </footer>
  );
};

export default Footer;
