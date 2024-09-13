export const Navbar = () => {
  return (
    <nav className="w-full h-24 z-10 bg-black flex items-center justify-between pr-20 pl-5">
      <img src="" alt="Logo Image of SportSee" className="w-44 h-16" />
      <ul className="flex items-center justify-between">
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#">Profil</a>
        </li>
        <li>
          <a href="#">Réglages</a>
        </li>
        <li>
          <a href="#">Communauté</a>
        </li>
      </ul>
    </nav>
  );
};
