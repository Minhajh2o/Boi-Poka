import Link from "../NavItem/NavItem";

const Links = () => {
  const routes = [
    {
      id: 1,
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "/listed-books",
      name: "Listed Books",
    },
    {
      id: 3,
      path: "/pages-to-read",
      name: "Pages to Read",
    },
  ];

  return <div>
    <ul className="flex flex-col md:flex-row md:items-center md:justify-center gap-1 md:gap-4">
      {routes.map((route) => (
        <Link key={route.id} route={route} />
      ))}
    </ul>
  </div>;
};

export default Links;
