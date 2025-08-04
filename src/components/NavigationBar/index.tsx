import { SITE_ROUTES } from "../../constants";

function NavigationBar() {
  return (
    <section className="p-2 customize-navbar col-span-12 flex items-center justify-between row-span-1 flex-wrap">
      <div className="font-permanent-marker text-2xl tracking-[0.2em] uppercase">
        GUYCHIENLL
      </div>
      <div className="flex items-center justify-center gap-x-4">
        {SITE_ROUTES.map((route) => {
          return (
            <a
              key={route.id}
              href={route.href}
              className="text-xl font-bold font-sriracha tracking-widest capitalize"
            >
              {route.display}
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default NavigationBar;
