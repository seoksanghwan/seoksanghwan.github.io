type AboutSectionProps = {
  title: string;
  children: React.ReactNode;
};

export const AboutSection = ({ title, children }: AboutSectionProps) => (
  <div className="grid grid-cols-[120px_1fr] gap-10 max-md:grid-cols-1 max-md:gap-8">
    <h4 className="text-[2rem] font-semibold shrink-0">{title}</h4>
    {children}
  </div>
);
