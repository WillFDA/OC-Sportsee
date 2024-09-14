export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-screen h-24 z-10 bg-black flex items-center justify-between pr-20 pl-5 text-white text-2xl font-medium">
      <ul className="flex items-center justify-between w-full">
        <img
          src="src/assets/logo.png"
          alt="Logo Image of SportSee"
          className="w-44 h-16"
        />
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
