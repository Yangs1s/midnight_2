"use client";

import Image from "next/image";
import { useState } from "react";

interface FallbackImageProps extends React.ComponentProps<typeof Image> {
  fallbackSrc?: string;
}

export function FallbackImage({
  src,
  fallbackSrc = "/images/placeholder.jpg",
  alt,
  ...props
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      alt={alt}
      src={imgSrc || fallbackSrc}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
}
