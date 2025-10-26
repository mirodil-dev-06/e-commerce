import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();

  // URL yo‘lini olish: /maincategory/smartphones/15 → ["maincategory", "smartphones", "15"]
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-sm text-gray-600 mb-4">
      <ul className="flex items-center gap-2">
        <li>
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>

        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          return (
            <li key={routeTo} className="flex items-center gap-2">
              <span>/</span>
              {isLast ? (
                <span className="capitalize">{decodeURIComponent(name)}</span>
              ) : (
                <Link
                  to={routeTo}
                  className="text-blue-600 hover:underline capitalize"
                >
                  {decodeURIComponent(name)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BreadCrumb;
