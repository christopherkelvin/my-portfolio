interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`bg-[var(--main-color)] cursor-pointer font-bold rounded-xl text-white ${className}`}
    >
      {children}
    </div>
  );
};
