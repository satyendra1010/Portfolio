import React from "react";
import InitialsAvatar from 'react-initials-avatar';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
      <InitialsAvatar name="Satyendra Shrivastava" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/satyendrashrivastava/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/satyendra1010" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://open.spotify.com/user/wd5akkja3d637hvrnn2hy5lfo"
          target="_blank"
        >
          <FaSpotify />
        </a>
        <a href="https://leetcode.com/u/satyendra1010/" target="_blank">
          {"</>"}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
