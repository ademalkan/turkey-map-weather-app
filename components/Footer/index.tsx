import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { VscSettingsGear } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 bg-blue-400 w-screen p-2 rounded-t-xl shadow-lg">
      <div className="flex justify-between px-6">
        <Link href={"?settings=open"}>
          <VscSettingsGear className="text-4xl hover:text-white transition-colors " />
        </Link>
        <h1 className="flex  justify-center text-2xl text-white">
          Turkey Weather App
        </h1>
        <Link target="_blank" href={"https://github.com/ademalkan"}>
          <BsGithub className="text-4xl" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
