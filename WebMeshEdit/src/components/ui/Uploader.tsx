import React from 'react';
import type { ChangeEvent } from 'react';

interface UploaderProps {
    onModelUpload: (modelUrl: string) => void;
}


export const Uploader: React.FC<UploaderProps> = ({ onModelUpload }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (!file.name.endsWith(".glb") && !file.name.endsWith(".gltf")) {
                alert("File must be .glb or .gltf")
                return;
            }

            const url = URL.createObjectURL(file);
            onModelUpload(url);
        }
    };


    return (
        <div className="">
            <label className="flex flex-col items-center px-4 py-2 bg-white/80 backdrop-blur-md
             text-slate-700 rounded-lg shadow-lg border border-slate-200 cursor-pointer hover:bg-white transition-all group">
                <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    <span className="text-sm font-medium">Upload model .GLB</span>
                </div>
                <input 
                    type="file"
                    className="hidden"
                    accept=".glb,.gltf"
                    onChange={handleChange}
                />
            </label>
        </div>
    );
}