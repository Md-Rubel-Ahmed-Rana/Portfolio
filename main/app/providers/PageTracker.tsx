"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import usePageTracking from "../hooks/usePageTracking";

const PageTracker = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const fullPath = useMemo(() => {
    const qs = searchParams.toString();
    return qs ? `${pathname}?${qs}` : pathname;
  }, [pathname, searchParams]);

  usePageTracking(fullPath);

  return null;
};

export default PageTracker;
