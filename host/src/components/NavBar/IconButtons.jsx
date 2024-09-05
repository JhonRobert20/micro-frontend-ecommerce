import { ICONS_NAVBAR } from "../../lib/constants";
import LinkIcon from "../UI/LinkIcon";

function IconButtons() {
  return (
    <div className="flex gap-5">
      {ICONS_NAVBAR.map(({ Icon, src }) => (
        <LinkIcon href="/" IconComponent={Icon} ariaLabel={src} size="medium" />
      ))}
    </div>
  );
}

export default IconButtons;
