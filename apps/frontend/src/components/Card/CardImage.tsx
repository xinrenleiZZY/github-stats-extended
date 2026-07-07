import { clsx } from "clsx";

import { API_ORIGIN } from "../../constants";

import { SvgInline } from "./SvgInline";

interface CardImageProps {
  imageSrc: string;
  stage: number;
  compact?: boolean;
  className?: string;
}

export const CardImage = ({
  imageSrc,
  stage,
  compact = false,
  className,
}: CardImageProps) => {
  const fullImageSrc = `${API_ORIGIN}/api${imageSrc}&client=wizard`;

  return (
    <div className={clsx("w-full relative", className)}>
      <SvgInline
        className="object-cover"
        url={fullImageSrc}
        compact={compact}
        stage={stage}
      />
    </div>
  );
};
