"use client";
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import "../css/toolResponsive.css";

import React, { useEffect, useState, useLayoutEffect } from "react";

import { BsChevronLeft } from "react-icons/bs";
import Link from "next/link";

import classNames from "@/utils/classNames";
import NewHomeIcon from "@/components/Icons/NewHomeIcon";
import AssetsIcon from "@/components/Icons/AssetsIcon";
import {
  IntegrationsIcon,
  HoverIntegrationIcon,
} from "@/components/Icons/IntegrationsIcon";
import BrandVisionAIIcon from "@/components/Icons/BrandVisionAIIcon";
import VideoVistaAIIcon from "@/components/Icons/VideoVistaAIIcon";
import LyricGeniusAIIcon from "@/components/Icons/LyricGeniusAIIcon";
import CampulseIcon from "./Icons/Campulse";
import SettingsIcon from "@/components/Icons/SettingsIcon";

import cookie from "cookiejs";

import Button from "./Button";


import Image from "next/image";





const logo_small = IMAGE_URL + "/assets/sidebarLogo.svg";
const upArrow = IMAGE_URL + "/assets/images/home/workspaceUparrow.svg";
const upArrowClose = IMAGE_URL + "/assets/images/home/workspaceArrowClose.svg";

const Sidebar = ({ defaultOpened = false }) => {
  const [open, setOpen] = useState(defaultOpened);

  const [selectedMenuItem, setSelectedMenuItem] = useState("");


  const router = useRouter();
  const pathname = usePathname();

  const menuItemNames = {
    dashboard: "Home",
    assets: "Assets",
    "platform-integration": "Integrations",
    "app-imagecraft-ai": "ImageCraft AI",
    "app-videovista-ai": "VideoVista AI",
    "app-lyricsgenius-ai": "LyricGenius AI",
    "app-campulse-ai": "Campulse AI",
    help: "Help",
    "settings/profile": "Settings",
  };

  useLayoutEffect(() => {
    const hasCookie = cookie.get("ExpireLoginToken");
    if (!hasCookie) {
      localStorage.removeItem("token");
      router.push("/");
    }
  }, []);

  useEffect(() => {
    const menuItemName = Object.keys(menuItemNames).find((key) =>
      pathname.includes(key),
    );

    console.log(menuItemName);

    if (menuItemName) {
      setSelectedMenuItem(menuItemNames[menuItemName]);
    }

    console.log(selectedMenuItem);
  }, [pathname]);





  const toggleNav = () => {
    setOpen(!open);
  };





 
  return (
    <>
      <div
        className={classNames(
          `transition-[width] duration-500 bg-[#3B226F] relative h-[100vh] sidebar_parent_container hidden md:block`,
          open ? "w-96 " : "w-20",
        )}
      >
        <button
          className="bg-black text-white rounded-full p-1 absolute -right-3 top-20 z-20"
          onClick={toggleNav}
        >
          <BsChevronLeft
            className={classNames(
              "text-2xl p-1 pointer-events-none",
              !open && "rotate-180",
            )}
          />
        </button>
        <div
          className={classNames(
            "inline-flex flex-col w-full p-5 pb-0 relative group z-10 transition-all ease-in duration-1000",
            open ? "is-opened " : "",
          )}
        >
          <div
            className={`w-0 h-20 mb-1 cursor-pointer flex flex-row items-center text-white opacity-0 transition-all group-[.is-opened]:w-64 group-[.is-opened]:opacity-100 gap-[89px] ${open ? "pl-[41px]" : ""}`}
            onClick={() => setWorkSpaceMenu(true)}
          >
            {/* <Image src={logo} alt="logo" width={100} height={100}/> */}
            <div className="flex items-center">
              {queryuserinfo.isPending || queryuserinfo.isError ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.9969 11.6921C11.1344 11.6921 10.4021 11.3911 9.8 10.789C9.19792 10.1869 8.89688 9.45465 8.89688 8.59216C8.89688 7.72966 9.19792 6.99738 9.8 6.39531C10.4021 5.79323 11.1344 5.49219 11.9969 5.49219C12.8593 5.49219 13.5916 5.79323 14.1937 6.39531C14.7958 6.99738 15.0968 7.72966 15.0968 8.59216C15.0968 9.45465 14.7958 10.1869 14.1937 10.789C13.5916 11.3911 12.8593 11.6921 11.9969 11.6921ZM5.29688 18.5075V16.6844C5.29688 16.378 5.38822 16.0829 5.57092 15.7989C5.75361 15.5149 6.00905 15.2691 6.33725 15.0614C7.20905 14.5601 8.12527 14.1758 9.0859 13.9085C10.0465 13.6412 11.0151 13.5076 11.9916 13.5076C12.9682 13.5076 13.9385 13.6412 14.9026 13.9085C15.8667 14.1758 16.7846 14.5601 17.6564 15.0614C17.9846 15.2524 18.2401 15.4941 18.4228 15.7864C18.6055 16.0787 18.6968 16.378 18.6968 16.6844V18.5075H5.29688ZM6.59685 17.2075H17.3968V16.6844C17.3968 16.5789 17.3588 16.4797 17.2827 16.3866C17.2067 16.2936 17.1018 16.2147 16.968 16.1498C16.2398 15.7088 15.453 15.3748 14.6075 15.1479C13.7621 14.921 12.8919 14.8075 11.9969 14.8075C11.1018 14.8075 10.2316 14.921 9.38615 15.1479C8.54072 15.3748 7.7539 15.7088 7.0257 16.1498C6.89108 16.2421 6.78596 16.3305 6.71032 16.415C6.63467 16.4996 6.59685 16.5894 6.59685 16.6844V17.2075ZM12.0022 10.3922C12.4986 10.3922 12.9218 10.2154 13.2719 9.86184C13.6219 9.5083 13.7969 9.0833 13.7969 8.58684C13.7969 8.09039 13.6201 7.66716 13.2666 7.31716C12.913 6.96716 12.488 6.79216 11.9915 6.79216C11.4951 6.79216 11.0718 6.96893 10.7218 7.32246C10.3719 7.67601 10.1968 8.10101 10.1968 8.59746C10.1968 9.09393 10.3736 9.51716 10.7271 9.86716C11.0807 10.2172 11.5057 10.3922 12.0022 10.3922Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <img
                  src={queryuserinfo?.data?.artistProfile?.profilePic}
                  alt="Profile"
                  className="rounded-full w-10 h-10 object-contain border border-white/20"
                />
              )}
              <span
                className={`px-2 group-[.is-opened]:inline-block overflow-hidden ${open ? "w-auto duration-1000" : "w-0"}`}
              >
                {workspaceName
                  ? workspaceName
                  : queryuserinfo?.data?.artistProfile?.defaultWorkspaceName}
              </span>
            </div>
            <div className="absolute right-4">
              <button className="transition-all rounded-full group-[.is-opened]:w-full group-[.is-opened]:max-w-36 flex items-center">
                {/* three dot menu svg */}
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 6C10.5 5.45 10.6958 4.97917 11.0875 4.5875C11.4792 4.19583 11.95 4 12.5 4C13.05 4 13.5208 4.19583 13.9125 4.5875C14.3042 4.97917 14.5 5.45 14.5 6C14.5 6.55 14.3042 7.02083 13.9125 7.4125C13.5208 7.80417 13.05 8 12.5 8C11.95 8 11.4792 7.80417 11.0875 7.4125C10.6958 7.02083 10.5 6.55 10.5 6ZM10.5 12C10.5 11.45 10.6958 10.9792 11.0875 10.5875C11.4792 10.1958 11.95 10 12.5 10C13.05 10 13.5208 10.1958 13.9125 10.5875C14.3042 10.9792 14.5 11.45 14.5 12C14.5 12.55 14.3042 13.0208 13.9125 13.4125C13.5208 13.8042 13.05 14 12.5 14C11.95 14 11.4792 13.8042 11.0875 13.4125C10.6958 13.0208 10.5 12.55 10.5 12ZM10.5 18C10.5 17.45 10.6958 16.9792 11.0875 16.5875C11.4792 16.1958 11.95 16 12.5 16C13.05 16 13.5208 16.1958 13.9125 16.5875C14.3042 16.9792 14.5 17.45 14.5 18C14.5 18.55 14.3042 19.0208 13.9125 19.4125C13.5208 19.8042 13.05 20 12.5 20C11.95 20 11.4792 19.8042 11.0875 19.4125C10.6958 19.0208 10.5 18.55 10.5 18Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile app view */}
          <Link
            href={`/apphome/${workspaceName}/dashboard`}
            className={`w-8 absolute inset-x-0 mx-auto  transition-all opacity-100 group-[.is-opened]:w-0 group-[.is-opened]:opacity-0`}
          >
            <Image
              src={logo_small}
              alt="logo"
              width={50}
              height={50}
              className="mt-[15px] mb-[35px]"
            />
          </Link>

          <div
            className={`hidden mb-[17px] group-[.is-opened]:inline-block text-nyx-yellow ml-2.5 text-xs overflow-hidden ${open ? "w-auto pl-[21px] duration-500" : "w-0 py-2"}`}
          >
           
          </div>

          <div className="relative group/button">
            <Link href={`/apphome/${workspaceName}/dashboard`}>
              <div
                onClick={() => setSelectedMenuItem("Home")}
                className={`flex -mx-5 px-5 h-[52px]  items-center cursor-pointer group/item text-white 
                 hover:text-nyx-yellow hover:bg-nyx-new-blue ${open ? "pl-[41px]" : ""} ${selectedMenuItem === "Home" && !pathname.includes("admanager") ? "bg-nyx-new-blue" : ""}`}
              >
                <NewHomeIcon
                  className={`w-7 h-7 mx-auto group-[.is-opened]:mx-0 text-white group-hover/item:text-nyx-yellow ${selectedMenuItem === "Home" && !pathname.includes("admanager") ? "bg-nyx-new-blue text-nyx-yellow" : ""}`}
                />
                <span
                  className={`group-[.is-opened]:inline-block ml-2 overflow-hidden ${open ? "w-auto py-2 duration-500 " : "w-0 py-2"} ${selectedMenuItem === "Home" && !pathname.includes("admanager") ? "bg-nyx-new-blue text-nyx-yellow" : ""}`}
                >
                  Home
                </span>
              </div>
            </Link>
            <div
              className={`absolute bottom-2 text-center text-[#FFFFFF] bg-black text-sm w-max py-1 px-2 rounded-md z-40 left-10 ${open ? "hidden" : "hidden group-hover/button:block"}`}
            >
              Home
            </div>
          </div>

          <div className="relative group/button">
            <Link href={`/apphome/${workspaceName}/assets`}>
              <div
                onClick={() => setSelectedMenuItem("Assets")}
                className={` flex -mx-5 px-5 h-[52px]  items-center cursor-pointer group/item text-white 
                 hover:text-nyx-yellow hover:bg-nyx-new-blue ${open ? "pl-[41px]" : ""} ${selectedMenuItem === "Assets" ? "bg-nyx-new-blue text-nyx-yellow" : ""}`}
              >
                <AssetsIcon
                  className={`w-7 h-7 mx-auto group-[.is-opened]:mx-0 text-white group-hover/item:text-nyx-yellow ${selectedMenuItem === "Assets" ? "text-nyx-yellow" : ""}`}
                />
                <span
                  className={`group-[.is-opened]:inline-block ml-2 overflow-hidden ${open ? "w-auto py-2 duration-500" : "w-0 py-2"} ${selectedMenuItem === "Assets" ? "text-nyx-yellow" : ""}`}
                >
                  Assets
                </span>
              </div>
            </Link>

            <div
              className={`absolute bottom-2 text-center text-[#FFFFFF] bg-black text-sm w-max py-1 px-2 rounded-md z-40 left-10 ${open ? "hidden" : "hidden group-hover/button:block"}`}
            >
              Assets
            </div>
          </div>

          <div className="relative group/button">
            <Link href={`/apphome/${workspaceName}/platform-integration`}>
              <div
                onClick={() => setSelectedMenuItem("Integrations")}
                className={` flex -mx-5 px-5 h-[52px]  items-center cursor-pointer group/item text-white 
                 hover:text-nyx-yellow hover:bg-nyx-new-blue ${open ? "pl-[41px]" : ""} ${selectedMenuItem === "Integrations" ? "bg-nyx-new-blue text-nyx-yellow" : ""}`}
              >
                <div className="integration_icons ">
                  <IntegrationsIcon
                    className={`w-7 h-7 mx-auto group-[.is-opened]:mx-0 text-white group-hover/item:text-nyx-yellow ${selectedMenuItem === "Integrations" ? "text-nyx-yellow" : ""}   integration-icon-normal `}
                  />
                  <HoverIntegrationIcon
                    className={`w-7 h-7 mx-auto group-[.is-opened]:mx-0 text-white group-hover/item:text-nyx-yellow ${selectedMenuItem === "Integrations" ? "text-nyx-yellow" : ""}  hidden integration-icon-hover`}
                  />
                </div>
                <span
                  className={`group-[.is-opened]:inline-block ml-2 overflow-hidden ${open ? "w-auto py-2 duration-500" : "w-0 py-2"} ${selectedMenuItem === "Integrations" ? "text-nyx-yellow" : ""} `}
                >
                  Integrations
                </span>
              </div>
            </Link>

            <div
              className={`absolute bottom-2 text-center text-[#FFFFFF] bg-black text-sm w-max py-1 px-2 rounded-md z-40 left-10 ${open ? "hidden" : "hidden group-hover/button:block"}`}
            >
              Integrations
            </div>
          </div>

          <div className="relative group/button">
            <Link href={`/apphome/${workspaceName}/app-imagecraft-ai`}>
              <div
                onClick={() => setSelectedMenuItem("ImageCraft AI")}
                className={` flex -mx-5 px-5 h-[52px]  items-center cursor-pointer group/item text-white 
                 hover:text-nyx-yellow hover:bg-nyx-new-blue ${open ? "pl-[41px]" : ""} ${selectedMenuItem === "ImageCraft AI" || pathname.includes("image-craft-ai") ? "bg-nyx-new-blue text-nyx-yellow" : ""}`}
              >
                <BrandVisionAIIcon
                  className={`w-7 h-7 mx-auto group-[.is-opened]:mx-0 text-white group-hover/item:text-nyx-yellow ${selectedMenuItem === "ImageCraft AI" || pathname.includes("image-craft-ai") ? "text-nyx-yellow" : ""}`}
                />
                <span
                  className={`group-[.is-opened]:inline-block ml-2 overflow-hidden ${open ? "w-auto py-2 duration-500" : "w-0"} ${selectedMenuItem === "ImageCraft AI" || pathname.includes("image-craft-ai") ? "text-nyx-yellow" : ""}`}
                >
                  ImageCraft AI
                </span>
              </div>
            </Link>

            <div
              className={`absolute bottom-2 text-center text-[#FFFFFF] bg-black text-sm w-max py-1 px-2 rounded-md z-40 left-10 ${open ? "hidden" : "hidden group-hover/button:block"}`}
            >
              ImageCraft AI
            </div>
          </div>

          <div className="relative group/button">
            <Link href={`/apphome/${workspaceName}/app-videovista-ai`}>
              <div
                onClick={() => setSelectedMenuItem("VideoVista AI")}
                className={`  flex -mx-5 px-5 h-[52px] items-center cursor-pointer group/item text-white 
                 hover:text-nyx-yellow hover:bg-nyx-new-blue ${open ? "pl-[41px]" : ""} ${selectedMenuItem === "VideoVista AI" || pathname.includes("video-vista-ai") || pathname.includes("brand-canvas") ? "bg-nyx-new-blue text-nyx-yellow" : ""}`}
              >
                <VideoVistaAIIcon
                  className={`w-7 h-7 mx-auto group-[.is-opened]:mx-0 text-white group-hover/item:text-nyx-yellow ${selectedMenuItem === "VideoVista AI" || pathname.includes("video-vista-ai") || pathname.includes("brand-canvas") ? "text-nyx-yellow" : ""}`}
                />
                <span
                  className={`group-[.is-opened]:inline-block ml-2 overflow-hidden ${open ? "w-auto py-2 duration-500" : "w-0"} ${selectedMenuItem === "VideoVista AI" || pathname.includes("video-vista-ai") || pathname.includes("brand-canvas") ? "text-nyx-yellow" : ""}`}
                >
                  VideoVista AI
                </span>
              </div>
            </Link>

            <div
              className={`absolute bottom-2 text-center text-[#FFFFFF] bg-black text-sm w-max py-1 px-2 rounded-md z-40 left-10 ${open ? "hidden" : "hidden group-hover/button:block"}`}
            >
              VideoVista AI
            </div>
          </div>

          <div className="relative group/button">
            <Link href={`/apphome/${workspaceName}/app-campulse-ai`}>
              <div
                onClick={() => setSelectedMenuItem("Campulse AI")}
                className={` flex -mx-5 px-5 h-[52px] items-center cursor-pointer group/item text-white 
                hover:text-nyx-yellow hover:bg-nyx-new-blue ${open ? "pl-[41px]" : ""} ${selectedMenuItem === "Campulse AI" || pathname.includes("admanager") ? "bg-nyx-new-blue text-nyx-yellow" : ""}`}
              >
                <CampulseIcon
                  className={`w-7 h-7 mx-auto group-[.is-opened]:mx-0 text-white group-hover/item:text-nyx-yellow ${selectedMenuItem === "Campulse AI" || pathname.includes("admanager") ? "text-nyx-yellow" : ""}`}
                />

                <span
                  className={`group-[.is-opened]:inline-block ml-2 overflow-hidden ${open ? "w-auto py-2 duration-500" : "w-0"} ${selectedMenuItem === "Campulse AI" || pathname.includes("admanager") ? "text-nyx-yellow" : ""}`}
                >
                  Campulse AI
                </span>
              </div>
            </Link>

            <div
              className={`absolute bottom-2 text-center text-[#FFFFFF] bg-black text-sm w-max py-1 px-2 rounded-md z-40 left-10 ${open ? "hidden" : "hidden group-hover/button:block"}`}
            >
              Campulse AI
            </div>
          </div>

          <div className="relative group/button">
            <Link href={`/apphome/${workspaceName}/app-lyricsgenius-ai`}>
              <div
                onClick={() => setSelectedMenuItem("LyricGenius AI")}
                className={` flex -mx-5 px-5 h-[52px] items-center cursor-pointer group/item text-white 
                hover:text-nyx-yellow hover:bg-nyx-new-blue ${open ? "pl-[41px]" : ""} ${selectedMenuItem === "LyricGenius AI" || pathname.includes("lyrics-genius-ai") ? "bg-nyx-new-blue text-nyx-yellow" : ""}`}
              >
                <LyricGeniusAIIcon
                  className={`w-7 h-7 mx-auto group-[.is-opened]:mx-0 text-white group-hover/item:text-nyx-yellow ${selectedMenuItem === "LyricGenius AI" || pathname.includes("lyrics-genius-ai") ? "text-nyx-yellow" : ""}`}
                />
                <span
                  className={`group-[.is-opened]:inline-block ml-2 overflow-hidden ${open ? "w-auto py-2 duration-500" : "w-0"} ${selectedMenuItem === "LyricGenius AI" || pathname.includes("lyrics-genius-ai") ? "text-nyx-yellow" : ""}`}
                >
                  LyricGenius AI
                </span>
              </div>
            </Link>

            <div
              className={`absolute bottom-2 text-center text-[#FFFFFF] bg-black text-sm w-max py-1 px-2 rounded-md z-40 left-10 ${open ? "hidden" : "hidden group-hover/button:block"}`}
            >
              LyricsGenius AI
            </div>
          </div>

          {/* <div className="relative group/button">
            <Link href={`/apphome/${workspaceName}/app-sonic-ai`}>
              <div
                onClick={() => setSelectedMenuItem("Sonic AI")}
                className={` flex -mx-5 px-5 h-[52px] items-center cursor-pointer group/item text-white 
                hover:text-nyx-yellow hover:bg-nyx-new-blue ${open ? "pl-[41px]" : ""} ${selectedMenuItem === "Sonic AI" ? "bg-nyx-new-blue text-nyx-yellow" : ""}`}
              >
                <SonicAIIcon
                  className={`w-7 h-7 mx-auto group-[.is-opened]:mx-0 text-white group-hover/item:text-nyx-yellow ${selectedMenuItem === "Sonic AI" ? "text-nyx-yellow" : ""}`}
                />
                <span
                  className={`group-[.is-opened]:inline-block ml-2 overflow-hidden ${open ? "w-auto py-2 duration-500" : "w-0"} ${selectedMenuItem === "Sonic AI" ? "text-nyx-yellow" : ""}`}
                >
                  Sonic AI
                </span>
              </div>
            </Link>

            <div
              className={`absolute bottom-2 text-center text-[#FFFFFF] bg-black text-sm w-max py-1 px-2 rounded-md z-40 left-10 ${open ? "hidden" : "hidden group-hover/button:block"}`}
            >
              Sonic AI
            </div>
          </div> */}

          {/* <Link href={`/apphome/${workspaceName}/dashboard`}>
            <div
              onClick={() => setSelectedMenuItem("Help")}
              className={` flex -mx-5 px-5 h-[52px] py-1 items-center cursor-pointer group/item text-white 
                hover:text-nyx-yellow hover:bg-nyx-new-blue ${open ? "pl-[41px]" : ""} ${selectedMenuItem === "Help" ? "bg-nyx-new-blue text-nyx-yellow" : ""}`}
              title="Help"
            >
              <HelpIcon
                className={`w-7 h-7 mx-auto group-[.is-opened]:mx-0 text-white group-hover/item:text-nyx-yellow ${selectedMenuItem === "Help" ? "text-nyx-yellow" : ""}`}
              />
              <span
                className={`group-[.is-opened]:inline-block ml-2 overflow-hidden ${open ? "w-auto duration-1000" : "w-0"} ${selectedMenuItem === "Help" ? "text-nyx-yellow" : ""}`}
              >
                Help
              </span>
            </div>
          </Link> */}

          <div className="relative group/button">
            <Link href={`/apphome/${workspaceName}/settings/profile`}>
              <div
                onClick={() => setSelectedMenuItem("Settings")}
                className={` flex -mx-5 px-5 h-[52px] py-1 items-center cursor-pointer group/item text-white 
                hover:text-nyx-yellow hover:bg-nyx-new-blue ${open ? "pl-[41px]" : ""} ${selectedMenuItem === "Settings" ? "bg-nyx-new-blue text-nyx-yellow" : ""}`}
              >
                <SettingsIcon
                  className={`w-7 h-7 mx-auto group-[.is-opened]:mx-0 text-white group-hover/item:text-nyx-yellow ${selectedMenuItem === "Settings" ? "text-nyx-yellow" : ""}`}
                />
                <span
                  className={`group-[.is-opened]:inline-block ml-2 overflow-hidden ${open ? "w-auto duration-1000" : "w-0"} ${selectedMenuItem === "Settings" ? "text-nyx-yellow" : ""}`}
                >
                  Settings
                </span>
              </div>
            </Link>

            <div
              className={`absolute bottom-2 text-center text-[#FFFFFF] bg-black text-sm w-max py-1 px-2 rounded-md z-40 left-10 ${open ? "hidden" : "hidden group-hover/button:block"}`}
            >
              Settings
            </div>
          </div>

          {/* <div className="relative group/button">
            <Link href="/logout">
              <div
                className={`flex -mx-5 px-5 h-[52px] py-1 items-center group/item 
            text-white mb-3 hover:text-nyx-yellow hover:bg-nyx-new-blue ${open ? "pl-[41px]" : ""}`}
              >
                <LogOutNewIcon className="w-7 h-7 mx-auto group-[.is-opened]:mx-0 fill-transparent stroke-white group-hover/item:stroke-nyx-yellow" />
                <span
                  className={`group-[.is-opened]:inline-block ml-2 overflow-hidden ${open ? "w-auto duration-1000" : "w-0"}`}
                >
                  Log Out
                </span>
              </div>
            </Link>

            <div
              className={`absolute bottom-2 text-center text-[#FFFFFF] bg-black text-sm w-max py-1 px-2 rounded-md z-40 left-10 ${open ? "hidden" : "hidden group-hover/button:block"}`}
            >
              Log Out
            </div>
          </div> */}
        </div>
        {open ? (
          <div
            className="h-[134px] text-center px-[24px]  bg-black  w-full sidebar_height "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex justify-between mt-2 mb-4 pt-[24px]">
              <p className="text-white">
                Current Plan: {queryuserinfo?.data?.artistProfile?.packageName}
              </p>

              {userDetailsRole?.workspace?.userRole == "OWNER" && (
                <>
                  <Link
                    href={`/apphome/${workspaceName}/settings/plans`}
                    className=""
                  >
                    <Button
                      className="font-normal flex items-center gap-[10px]"
                      rounded={"full"}
                      size={"normal"}
                    >
                      <Image
                        src={upArrow}
                        width={10}
                        height={16}
                        alt="upArrow"
                      />
                      <p>Upgrade</p>
                    </Button>
                  </Link>
                </>
              )}
            </div>
            
          </div>
        ) : (
          <div
            className="h-[134px] text-center px-[24px]  bg-black  w-full sidebar_height"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {userDetailsRole?.workspace?.userRole == "OWNER" && (
              <>
                <Link href={`/apphome/${workspaceName}/settings/plans`}>
                  <Image
                    src={upArrowClose}
                    width={32}
                    height={32}
                    alt="upArrow"
                    className="pt-[18px]"
                  />
                </Link>
              </>
            )}
          </div>
        )}
      </div>

    </>
  );
};

export default Sidebar;
