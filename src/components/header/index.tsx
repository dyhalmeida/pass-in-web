import { NavLink } from "@/components/nav-link";
import uniteLogo from "@/assets/unite-logo.svg";

export const Header = () => {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={uniteLogo} alt="Unite logo" />
      <nav className="flex items-center gap-5">
        <NavLink href="/eventos">Eventos</NavLink>
        <NavLink href="/participantes">Participantes</NavLink>
      </nav>
    </div>
  );
};
