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
    return  (
        <div className="space-y-4">
            <div className="bg-element-bg rounded border border-ui-border overflow-hidden">
                <div className="bg-hover-bg px-3 py-1 text-[10px] font-bold text-txt-main uppercase border-b border-ui-border">
                    Transformacja
                </div>
                <div className="p-3">
                    <div className="flex justify-between items-center text-[11px] mb-2">
                        <span className="text-txt-muted">Prędkość obrotu</span>
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

            <button onClick={onExport} className="w-full py-2 bg-hover-bg hover:bg-brand hover:text-white border border-ui-border text-txt-main text-[11px] font-bold rounded transition-all active:scale-95">
                💾 EKSPORTUJ MODEL
            </button>
        </div>
    );
}