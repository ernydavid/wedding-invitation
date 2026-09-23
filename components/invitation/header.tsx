export function InvitationHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-[999] flex w-full items-center justify-between p-[10%]">
      <a className="text-[1.3rem] text-white no-underline" href="#intro">
        Mi<span className="font-medium">Logo</span>
      </a>

      <nav className="hidden text-white no-underline" aria-label="Navegación principal">
        <ul className="m-0 flex list-none gap-6 p-0">
          <li><a href="#intro">Inicio</a></li>
          <li><a href="#date">Evento</a></li>
          <li><a href="#location">Ubicación</a></li>
          <li><a href="#celebration">Celebración</a></li>
        </ul>
      </nav>

      <svg
        className="size-[30px] cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30.001 25"
        role="img"
        aria-label="Abrir menú"
      >
        <path
          d="M-1631.5,25a2.5,2.5,0,0,1-2.5-2.5,2.5,2.5,0,0,1,2.5-2.5h25a2.5,2.5,0,0,1,2.5,2.5,2.5,2.5,0,0,1-2.5,2.5Zm0-10a2.5,2.5,0,0,1-2.5-2.5,2.5,2.5,0,0,1,2.5-2.5h25a2.5,2.5,0,0,1,2.5,2.5,2.5,0,0,1-2.5,2.5Zm0-10a2.5,2.5,0,0,1-2.5-2.5,2.5,2.5,0,0,1,2.5-2.5h25a2.5,2.5,0,0,1,2.5,2.5,2.5,0,0,1-2.5,2.5Z"
          transform="translate(1634)"
          fill="currentColor"
        />
      </svg>
    </header>
  );
}
