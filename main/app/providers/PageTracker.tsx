"use client";
import { usePathname } from "next/navigation";
import usePageTracking from "../hooks/usePageTracking";

const PageTracker = () => {
  const pathname = usePathname();
  usePageTracking(pathname);
  return null;
};

export default PageTracker;
