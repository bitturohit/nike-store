import { v4 as uuid4 } from 'uuid';

const Footer = ({ footerAPI: { titles, links } }) => {
  return (
    <>
      <footer className="bg-theme pt-7 pb-5">
        <div className="nike-container text-slate-200">
          <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5">
            {titles.map((val) => {
              return (
                <div key={uuid4()} className="grid items-center">
                  <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
                    {val.title}
                  </h1>
                </div>
              );
            })}
            {links.map((list) => {
              return (
                <ul key={uuid4()} className="grid items-center gap-1">
                  {list.map((link) => {
                    return (
                      <li
                        key={uuid4()}
                        className="text-sm sm:text-xs"
                      >
                        {link.link}
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>

          <div className="mt-5 text-center">
            <p className="text-sm md:text-center">
              Copyright
              <sup className="text-base font-bold">&copy;</sup>
              All Reserved Rights{' '}
              <span className="font-semibold">
                JSSTACK DEVELOPERS
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
