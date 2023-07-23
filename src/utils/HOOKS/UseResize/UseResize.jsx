import { useState, useEffect } from "react";
import {
  SCREEN_SIZE_480,
  SCREEN_SIZE_768,
  SCREEN_SIZE_1240,
  SCREEN_SIZE_1200,
  SCREEN_SIZE_1400,
} from "../../constants";

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [currentScreen, setCurrentScreen] = useState("SCREEN_SM");

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width >= SCREEN_SIZE_1400) {
		setCurrentScreen("SCREEN_SIZE_1400");
    } else if (width >= SCREEN_SIZE_1200) {
		setCurrentScreen("SCREEN_SIZE_1200");
    } else if (width >= SCREEN_SIZE_1240) {
		setCurrentScreen("SCREEN_SIZE_1240");
    } else if (width >= SCREEN_SIZE_768) {
		setCurrentScreen("SCREEN_SIZE_768");
    } else {
		setCurrentScreen("SCREEN_SIZE_480");
    }
  }, [width]);

  return {
    width,
    isScreenSm: width >= SCREEN_SIZE_480,
    isScreenMd: width >= SCREEN_SIZE_768,
    isScreenLg: width >= SCREEN_SIZE_1240,
    isScreenXl: width >= SCREEN_SIZE_1200,
    isScreenXxl: width >= SCREEN_SIZE_1400,
    currentScreen: currentScreen,
  };
};
