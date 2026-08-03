import Image from "next/image";
import { assetPath } from "@/lib/utils";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  width = 36,
  height = 36,
  className,
}) => {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      {/* Decorative: the wordmark beside it already carries the name, so
          alt text here would just be announced twice. */}
      <Image
        src={assetPath("/pt-logo.png")}
        alt=""
        width={width}
        height={height}
        className="rounded-md"
      />
      <span className="text-foreground text-lg font-semibold tracking-tight">
        Perspective Tester
      </span>
    </div>
  );
};
