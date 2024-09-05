import { NAV_BAR } from "../../lib/constants";
import LinkIcon from "../UI/LinkIcon";

function NavigationLinks() {
  return (
    <div className="flex items-center gap-10">
      {NAV_BAR.map(({ link, name }) => (
        <LinkIcon
          href={link}
          text={name}
          ariaLabel="Ver más detalles"
          size="medium"
        />
      ))}
    </div>
  );
}

export default NavigationLinks;
