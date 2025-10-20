type HeroCardProps = {
  title: string;
  number: string;
  icon: string;
  id: string;
  bgColor: string; // Tailwind bg class like "bg-Card1"
};

export default function HeroCard({
  title,
  number,
  icon,
  id,
  bgColor,
}: HeroCardProps) {
  return (
    <div
      id={id}
      className={`card flex-1 text-[0.5rem] rounded-[0.5rem] lg:w-[50px] lg:h-[180px] uppercase aspect-[3/4] p-3 relative ${bgColor} flex font-Lato flex-col justify-between`}
    >
      <div className="card-title w-full flex justify-between">
        <span>{title}</span>
        <span>{number}</span>
      </div>
      <img src={icon} alt={title} className="size-3 lg:size-8 mx-auto" />
      <div className="card-title w-full flex justify-between">
        <span>{number}</span>
        <span>{title}</span>
      </div>
    </div>
  );
}
