import { ICONS_NAVBAR } from "../../lib/constants";

function IconButtons() {
  return (
    <div className="flex gap-5">
      {ICONS_NAVBAR.map(({ Icon, src }) => (
        <Icon
          key={src}
          strokeWidth={1.2}
          className="text-skin-base hover:text-skin-details cursor-pointer transition-colors duration-200"
        />
      ))}
    </div>
  );
}

export default IconButtons;
