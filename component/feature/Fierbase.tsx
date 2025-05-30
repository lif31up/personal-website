"use client";

import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { useEffect, useState } from "react";
import { firebaseConfig } from "@/firebase";

const app = initializeApp(firebaseConfig);

const FirebaseAnalytics = () => {
  const [analytics, setAnalytics] = useState(null);
  const [pageViews, setPageViews] = useState(0);
  const [userInfo, setUserInfo] = useState({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    userAgent: navigator.userAgent,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    platform: navigator.platform,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const analyticsInstance: any = getAnalytics(app);
      setAnalytics(analyticsInstance);

      logEvent(analyticsInstance, "page_view");
      setPageViews((prev) => prev + 1);

      const handleResize = () => {
        setUserInfo((prev) => ({
          ...prev,
          screenWidth: window.innerWidth,
          screenHeight: window.innerHeight,
        }));
        logEvent(analyticsInstance, "screen_resize", {
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);

      let startTime = Date.now();
      const interval = setInterval(() => {
        const timeSpent = Math.floor((Date.now() - startTime) / 1000);
        logEvent(analyticsInstance, "user_engagement", {
          time_spent: timeSpent,
        });
      }, 30000); // Every 30 seconds

      return () => {
        window.removeEventListener("resize", handleResize);
        clearInterval(interval);
      };
    }
  }, []);

  return null;
};

export default FirebaseAnalytics;
