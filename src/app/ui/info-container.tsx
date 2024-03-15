const InfoContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-6 pb-5 pt-2 bg-secondary opacity-90 rounded-sm shadow-sm shadow-tertiary">
      {children}
    </div>
  );
};

export default InfoContainer;
