interface CardProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}
export const Card = ({ icon, children }: CardProps) => {
  return (
    <div className="relative rounded-xl bg-transparent  m-2 border-2 transition border-white/10 hover:border-[var(--text-color)] p-1 duration-300 cursor-pointer">
      <div className="max-w-sm p-6 h-full rounded-xl bg-gradient-to-t from-white/20 to-white/60 backdrop-blur-md shadow-md border border-white/10 ">
        <div className="flex items-center mb-2">
          <div className="text-[var(--text-color)] rounded-lg">{icon}</div>
        </div>
        {children}
      </div>
    </div>
  );
};
