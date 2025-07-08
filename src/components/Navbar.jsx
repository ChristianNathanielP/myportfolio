import { useState, useEffect } from 'react';
import logo from "/assets/CN logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <div className={`navbar fixed z-50 w-full top-0 left-0 py-5 transition-colors duration-300 ${scrolled ? 'bg-white/40 backdrop-blur-sm' : 'bg-white'} border-b-1 border-t-1 border-orange-950`}>
      <div className="container mx-auto px-4 md:px-10">
        {/* Mobile Header */}
        <div className="flex justify-between items-center md:hidden w-full px-2">
          {/* <h1 className="text-2xl font-Niconne">cnginn</h1> */}
          <img src={logo} alt="" className='w-8' />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-orange-950 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Layout*/}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex-1">
            {/* <h1 className="text-3xl font-Niconne hover:text-orange-500"><a href="#">cnginn</a></h1> */}
            <img src={logo} alt="" className='w-10' />
          </div>

          <div className="flex-1 flex justify-center">
            <ul className="flex gap-10">
              <li><a href="#Hero" className="hover:text-orange-500 transition">Home</a></li>
              <li><a href="#Project" className="hover:text-orange-500 transition">Project</a></li>
              <li><a href="#Experience" className="hover:text-orange-500 transition">Experience</a></li>
              <li><a href="#TechStack" className="hover:text-orange-500 transition">Skills</a></li>
            </ul>
          </div>

          <div className="flex-1 flex justify-end gap-4">
            <a
              href="https://www.linkedin.com/in/christian-nathaniel-3071b0368/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <svg height="24" width="24" viewBox="-38.2 -38.2 458.40 458.40" fill="#333333">
                <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472L341.91,330.654L341.91,330.654z"/>
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <svg width="24" height="24" fillRule="evenodd" clipRule="evenodd">
                <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <ul className="space-y-4">
              <li><a href="#Hero" onClick={() => setIsOpen(false)} className="block py-2 hover:text-orange-500 transition text-lg">Home</a></li>
              <li><a href="#Project" onClick={() => setIsOpen(false)} className="block py-2 hover:text-orange-500 transition text-lg">Project</a></li>
              <li><a href="#Experience" onClick={() => setIsOpen(false)} className="block py-2 hover:text-orange-500 transition text-lg">Experience</a></li>
              <li><a href="#TechStack" onClick={() => setIsOpen(false)} className="block py-2 hover:text-orange-500 transition text-lg">Skills</a></li>
            </ul>
            <div className="flex gap-6 pt-2">
              <a href="https://www.linkedin.com/in/christian-nathaniel-3071b0368/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                <svg height="28" width="28" viewBox="-38.2 -38.2 458.40 458.40" fill="#333333">
                  <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472L341.91,330.654L341.91,330.654z"/>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                <svg width="28" height="28" fillRule="evenodd" clipRule="evenodd">
                  <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z"/>
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}