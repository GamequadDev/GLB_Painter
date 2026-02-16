interface MeshSettingsProps {
    rotationSpeed: number;
    setRotationSpeed: (val: number) => void;
    onExport: () => void;
}

export const MeshSettings = ({
    rotationSpeed,
    setRotationSpeed,
    onExport
}: MeshSettingsProps) => {
    return (
        <div className="space-y-4">
            <div className="bg-element-bg rounded border border-ui-border overflow-hidden">
                <div className="bg-hover-bg px-3 py-1 text-[10px] font-bold text-txt-main uppercase border-b border-ui-border">
                    Rotation
                </div>
                <div className="p-3">
                    <div className="flex justify-between items-center text-[11px] mb-2">
                        <span className="text-txt-muted">Speed</span>
                        <span className="text-brand font-mono">{rotationSpeed.toFixed(2)}</span>
                    </div>
                    <input
                        type="range" min="0" max="2" step="0.1"
                        value={rotationSpeed}
                        onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
                        className="w-full h-1 bg-ui-border rounded appearance-none cursor-pointer accent-brand"
                    />
                </div>
            </div>


            <button
                onClick={onExport}
                className="group relative w-full py-2.5 bg-brand hover:bg-brand-hover text-white text-[11px] font-black uppercase tracking-widest rounded shadow-lg shadow-black/20 transition-all active:scale-[0.98] active:brightness-110 flex items-center justify-center gap-3 border-b-2 border-black/20"
            >
                <svg
                    className="w-4 h-4 transition-transform group-hover:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                </svg>

                <span>Export</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </button>
        </div>
    );
}