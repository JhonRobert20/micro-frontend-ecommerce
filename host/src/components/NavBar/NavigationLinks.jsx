import { NAV_BAR } from "../../lib/constants";

function NavigationLinks() {
  return (
    <div className="flex items-center gap-10">
      {NAV_BAR.map(({ link, name }) => (
        <a
          key={link}
          href={link}
          className="tracking-widest text-sm relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-skin-decorative after:w-full after:scale-x-0 after:mt-5 after:hover:scale-x-100 hover:text-skin-details after:transition after:duration-200 after:origin-center transition-colors duration-200"
          aria-current={name}
        >
          {name}
        </a>
      ))}
    </div>
  );
}

export default NavigationLinks;
