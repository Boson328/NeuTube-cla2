import React from "react";

import { usePathname } from "next/navigation";

import BannerButton from "../atoms/BannerButton";

import type { Item } from "@/pages/_utils/types";

export default function BannerButtons({ items }: { items: Item[] }) {
  const pathname = usePathname();
  return (
    <>
      {items.map(({ href, title, fill, outline }) => (
        <BannerButton
          href={href}
          icon={pathname === href ? fill : outline}
          isBold={Boolean(pathname === href)}
          key={href + "bannerbutton"}
          text={title}
        />
      ))}
    </>
  );
}
