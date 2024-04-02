import uniteLogo from "@/assets/unite-logo.svg";

export const Header = () => {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={uniteLogo} alt="Unite logo" />
      <nav className="flex items-center gap-5">
        <a href="#" className="font-medium text-sm text-zinc-300">
          Eventos
        </a>
        <a href="#" className="font-medium text-sm">
          Participantes
        </a>
      </nav>
    </div>
  );
};
