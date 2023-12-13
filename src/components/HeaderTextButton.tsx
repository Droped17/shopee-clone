type HeaderTextButtonProps = {
    name: string;
  };

export const HeaderTextButton: React.FC<HeaderTextButtonProps> = ({name}) => {
  return (
    <div className="text-white text-xs">
      <a href="/">{name}</a>
    </div>
  );
};
