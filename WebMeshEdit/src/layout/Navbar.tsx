export const Navbar = () => {
  return (
    <header className="w-full bg-panel-bg border-b border-ui-border px-4 py-1 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-txt-main text-xl font-bold uppercase tracking-tight">
            .GLB <span className="text-brand">Painter</span>
          </span>
        </div>

        <nav className="flex gap-2 text-[17px] text-txt-muted font-medium">
          <span className="hover:bg-hover-bg px-2 py-0.5 rounded cursor-pointer text-txt-main border-b border-brand">Paint</span>
          {/*
          <span className="hover:bg-hover-bg px-2 py-0.5 rounded cursor-pointer transition-colors">Plik</span>
          <span className="hover:bg-hover-bg px-2 py-0.5 rounded cursor-pointer transition-colors">Edycja</span>  */}
        </nav>
      </div>

      <span className="text-[10px] text-txt-muted font-mono uppercase tracking-widest">Made by Mateusz Woźniak</span>
    </header>
  );
}