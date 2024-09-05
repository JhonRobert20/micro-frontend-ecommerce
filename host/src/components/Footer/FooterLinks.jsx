import { SECTION_FOOTER } from "../../lib/constants";
import LinkIcon from "../UI/LinkIcon";

const FooterLinks = () => (
  <>
    {SECTION_FOOTER.map((section) => (
      <div className="flex flex-col mb-8 lg:mb-0">
        <h4 className="mb-4 lg:mb-6 tracking-widest	">{section.title}</h4>
        <ul className="flex flex-col items-start justify-start">
          {section.links.map((link, index) => (
            <li className="mb-2">
              <LinkIcon
                href={link}
                text={link}
                ariaLabel={link}
                size="medium"
              />
            </li>
          ))}
        </ul>
      </div>
    ))}
  </>
);

export default FooterLinks;
