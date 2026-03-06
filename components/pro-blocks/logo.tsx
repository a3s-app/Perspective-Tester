import Image from "next/image";

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
      <Image
        src="/pt-logo.png"
        alt="Perspective Tester logo"
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
