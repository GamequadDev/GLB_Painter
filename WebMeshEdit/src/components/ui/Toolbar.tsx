import React, { type ChangeEvent } from 'react';
import type { BrushSettings } from "@/types/Brush";

interface ToolbarProps {
  brush: BrushSettings;
  setBrush: React.Dispatch<React.SetStateAction<BrushSettings>>;
}

const TEXTURES = [
  { name: 'Trawa', url: '/textures/grass.jpg' },
  { name: 'Kamień', url: '/textures/stone.jpg' },
  { name: 'Rdza', url: '/textures/rust.jpg' },
  { name: 'Drewno', url: '/textures/wood.jpg' }
];

export const Toolbar: React.FC<ToolbarProps> = ({ brush, setBrush }) => {
  
  const handleSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(e.target.value, 10);
    setBrush(prev => ({ ...prev, size: newSize }));
  };

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 p-1.5 bg-panel-bg/95 backdrop-blur-md rounded-lg shadow-2xl border border-ui-border pointer-events-auto">
      
      {/* Selektor trybu (Mode Toggle) */}
      <div className="flex bg-ui-border p-1 rounded-md border border-element-bg">
        <button 
          onClick={() => setBrush(prev => ({ ...prev, mode: 'orbit' }))}
          className={`px-3 py-1.5 rounded flex items-center gap-2 text-[11px] font-bold transition-all ${
            brush.mode === 'orbit' 
            ? 'bg-hover-bg text-white shadow-inner' 
            : 'text-txt-muted hover:text-txt-main'
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4h16v16H4V4z" />
          </svg>
          Nawigacja
        </button>
        <button 
          onClick={() => setBrush(prev => ({ ...prev, mode: 'paint' }))}
          className={`px-3 py-1.5 rounded flex items-center gap-2 text-[11px] font-bold transition-all ${
            brush.mode === 'paint' 
            ? 'bg-brand text-white shadow-inner' 
            : 'text-txt-muted hover:text-txt-main'
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.3 5.7c-.8-.8-2.1-.8-2.8 0L7 14.2l-1.4 4.3c-.1.3 0 .6.2.8.2.2.5.3.8.2l4.3-1.4 8.5-8.5c.7-.8.7-2.1-.1-2.9z" />
          </svg>
          Malowanie
        </button>
      </div>

      {/* Kontrolki malowania (wyświetlane tylko w trybie paint) */}
      {brush.mode === 'paint' && (
        <>
          <div className="h-8 w-[1px] bg-element-bg" />

          {/* Wybór kolorów */}
          <div className="flex flex-col gap-1 px-1">
            <span className="text-[9px] font-bold text-txt-muted uppercase tracking-tighter text-center italic">Kolor</span>
            <div className="flex gap-1">
              {['#ff4444', '#44ff44', '#4488ff', '#111111'].map(color => (
                <button
                  key={color}
                  onClick={() => setBrush(prev => ({ ...prev, color, textureUrl: null }))}
                  className={`w-5 h-5 rounded-sm border transition-all ${
                    brush.color === color && !brush.textureUrl 
                    ? 'border-white scale-110 shadow-[0_0_8px_rgba(230,133,49,0.4)]' 
                    : 'border-ui-border'
                  }`}
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>

          <div className="h-8 w-[1px] bg-element-bg" />

          {/* Wybór tekstur */}
          <div className="flex flex-col gap-1 px-1">
            <span className="text-[9px] font-bold text-txt-muted uppercase tracking-tighter text-center italic">Tekstura</span>
            <div className="flex gap-1">
              {TEXTURES.map(tex => (
                <button
                  key={tex.name}
                  onClick={() => setBrush(prev => ({ ...prev, textureUrl: tex.url }))}
                  className={`w-5 h-5 rounded-sm border bg-element-bg transition-all ${
                    brush.textureUrl === tex.url 
                    ? 'border-brand scale-110 shadow-[0_0_8px_rgba(230,133,49,0.4)]' 
                    : 'border-ui-border'
                  }`}
                  style={{ 
                    backgroundImage: `url(${tex.url})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  title={tex.name}
                />
              ))}
            </div>
          </div>

          <div className="h-8 w-[1px] bg-element-bg" />

          {/* Suwak rozmiaru pędzla */}
          <div className="flex flex-col gap-1 w-32 px-2">
            <div className="flex justify-between items-center px-0.5">
                <span className="text-[9px] font-bold text-txt-muted uppercase">Pędzel</span>
                <span className="text-[10px] font-mono text-brand font-bold">{brush.size}px</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="100" 
              value={brush.size}
              onChange={handleSizeChange}
              className="w-full h-1 bg-ui-border rounded appearance-none cursor-pointer accent-brand"
            />
          </div>
        </>
      )}
    </div>
  );
};