import { SECTION_FOOTER } from "../../lib/constants";
import FooterLinkSection from "./FooterLinkSection";

const FooterLinks = () => (
  <>
    {SECTION_FOOTER.map((section) => (
      <FooterLinkSection
        key={section.title}
        title={section.title}
        links={section.links}
      />
    ))}
  </>
);

export default FooterLinks;
