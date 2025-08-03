interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`bg-gradient-to-r from-[var(--text-color)] to-[var(--bg-color)] cursor-pointer font-bold rounded-xl hover:from-[var(--bg-color)] hover:to-[var(--text-color)] transition-colors text-white ${className}`}
    >
      {children}
    </div>
  );
};
