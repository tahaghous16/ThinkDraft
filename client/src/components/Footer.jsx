import { assets, footer_data } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        {/* Logo & Description */}
        <div className="max-w-md">
          <img src={assets.ThinkDraft} alt="logo" className="w-32 sm:w-44" />
          <p className="mt-6 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            eos quis unde odio. Maiores sit magnam quaerat quidem, ex dolor
            odit.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-between w-full md:w-[50%] gap-6">
          {footer_data.map((section, index) => (
            <div key={index} className="min-w-[120px]">
              <h5 className="font-semibold text-base text-gray-900 mb-4">
                {section.title}
              </h5>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:underline transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <p className="py-4 text-center text-sm md:text-base text-gray-500/70">
        © 2025 ThinkDraft. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
