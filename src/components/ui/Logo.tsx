"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import * as React from "react";
import { withAssetVersion } from "@/lib/assets";

export const Logo = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex items-center">
      <div className="relative h-10 w-24">
        <Image
          src={withAssetVersion("/dgo-logo-new.png")}
          alt="DGO Logo"
          fill
          unoptimized
          className="object-contain"
          priority
          quality={100}
        />
      </div>
    </div>
  );
};
