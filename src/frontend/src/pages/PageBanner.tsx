interface PageBannerProps {
  image: string;
  badge: string;
  title: string;
  objectPosition?: string;
  icon?: React.ReactNode;
  subtitle?: string;
}

export default function PageBanner({
  image,
  badge,
  title,
  objectPosition = "center",
  icon,
  subtitle,
}: PageBannerProps) {
  return (
    <div className="relative w-full h-44 md:h-52 pt-16 overflow-hidden">
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition }}
      />
      {/* Dark gradient overlay from left */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      {/* Text content left-aligned */}
      <div className="absolute inset-0 flex flex-col justify-end pb-6 pl-8 md:pl-16">
        <span className="inline-block mb-2 px-3 py-1 rounded-full border border-primary/50 bg-primary/15 text-primary text-xs font-semibold tracking-widest uppercase w-fit">
          {badge}
        </span>
        <div className="flex items-center gap-3">
          {icon && (
            <div className="w-14 h-14 rounded-xl btn-gradient flex items-center justify-center text-white flex-shrink-0">
              {icon}
            </div>
          )}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-lg">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm text-white/70 mt-1">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
