interface PageLayoutProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PageLayout({ className, children }: PageLayoutProps) {
  return (
    <div
      className={`flex flex-col bg-white rounded-2xl p-10 max-w-200 w-full ${className}`}
    >
      {children}
    </div>
  );
}
