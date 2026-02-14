import { Scene } from "@/components/fiber/Scene";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { Uploader } from "@/components/ui/Uploader";
import { useState } from "react";
import { Toolbar } from "@/components/ui/Toolbar";
import type { BrushSettings } from "@/types/Brush";
import { MeshSettings } from "@/components/ui/MeshSettings";

function App() {
  // Stany aplikacji
  const [modelUrl, setModelUrl] = useState<string>("./models/marble_bust.glb");
  const [brush, setBrush] = useState<BrushSettings>({
    color: '#ff0000',
    size: 10,
    mode: 'orbit'
  });
  const [rotationSpeed, setRotationSpeed] = useState(0.3);
  const [exportTrigger, setExportTrigger] = useState(0);

  return (
    <div className="h-screen flex flex-col bg-main-bg text-txt-main font-sans overflow-hidden select-none">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Główny obszar renderowania 3D (Viewport) */}
        <main className="relative flex-1 bg-main-bg overflow-hidden">
          <Scene 
            bgColor="#1d1d1d" 
            modelUrl={modelUrl} 
            brush={brush}
            rotationSpeed={rotationSpeed}
            exportTrigger={exportTrigger}
          />
          
          {/* Toolbar pływający na dole viewportu */}
          <Toolbar brush={brush} setBrush={setBrush}/>
        </main>

        {/* Panel boczny (Properties Sidebar) */}
        <aside className="w-72 bg-panel-bg border-l border-ui-border flex flex-col shadow-2xl">
          {/* Nagłówek panelu właściwości */}
          <div className="px-4 py-2 border-b border-ui-border bg-element-bg flex items-center justify-between">
             <div className="flex items-center gap-2">
                <span className="text-brand text-xs">⚙️</span>
                <span className="text-[11px] font-bold text-txt-main uppercase tracking-widest">Właściwości</span>
             </div>
             <span className="text-[9px] text-txt-muted font-mono">Scene Settings</span>
          </div>

          {/* Zawartość panelu */}
          <div className="p-4 space-y-8 overflow-y-auto flex-1 custom-scrollbar">
            <section className="space-y-3">
              <label className="text-[10px] font-bold text-txt-muted uppercase tracking-[0.2em] px-1">Import Modelu</label>
              <Uploader onModelUpload={(url) => setModelUrl(url)}/>
            </section>

            <MeshSettings 
                rotationSpeed={rotationSpeed}
                setRotationSpeed={setRotationSpeed}
                onExport={() => setExportTrigger(prev => prev + 1)}
            />
          </div>
          
          
        </aside>
      </div>
    </div>
  );
}

export default App;