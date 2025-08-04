import { useEffect } from "react";

const GISCUS_ID = "giscus";
function Giscus() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.setAttribute("data-repo", "guychienll/guychienll");
    script.setAttribute("data-repo-id", "R_kgDONzw9PA");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDONzw9PM4CtwX4");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "dark_dimmed");
    script.setAttribute("data-lang", "zh-TW");
    script.setAttribute("data-loading", "lazy");
    script.setAttribute("crossorigin", "anonymous");

    const element = document.getElementById(GISCUS_ID);
    if (element) {
      element.innerHTML = "";
      element.appendChild(script);
    }
  }, []);

  return (
    <div className="mt-10 min-h-[372px]">
      <div id={GISCUS_ID} />
    </div>
  );
}

export default Giscus;
