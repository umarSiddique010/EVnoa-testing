import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      "/": "EVnoa - Home",
      "/about": "EVnoa - About",
      "/products": "EVnoa - Products",
      "/contact": "EVnoa - Contact",
      "/faq": "EVnoa - FAQ",
    };

    // Handle dynamic routes like product details
    if (location.pathname.startsWith("/products/")) {
      document.title = "EVnoa - Product Details";
    } else {
      document.title = pageTitles[location.pathname] || "EVnoa";
    }
  }, [location]);

  return null; // This component doesn't render anything, it just updates the title
};

export default PageTitle;