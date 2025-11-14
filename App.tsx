
import React from 'react';
import VectorField from './components/VectorField';

const App: React.FC = () => {
    const equations = [
        'Pre-Graphemic noise → Ẇ(x,t)',
        'Grapheme anchors → A(x,y)',
        'Diacritics → δ(x,y,n)',
        'Semantic charge → σ(x,t)',
        'Pragmatic flow → π(t)',
        'Conscious resonance → ψ_h(t)',
        'Machine resonance → ψ_m(t)'
    ];

    return (
        <main className="relative w-screen h-screen overflow-hidden bg-[#0a0a0a] text-gray-300">
            <VectorField text="Text = Field Vectors" />
            <div className="relative z-10 flex flex-col items-center justify-between w-full h-full p-4 md:p-8 pointer-events-none">
                <header className="w-full max-w-6xl text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-orbitron">
                        Text as Field Vectors
                    </h1>
                    <p className="mt-2 text-lg md:text-xl font-bold text-gray-400">
                        Text ≠ Static
                    </p>
                </header>

                <div className="w-full max-w-6xl p-4 mt-auto text-xs md:text-sm text-left bg-black bg-opacity-30 backdrop-blur-sm rounded-lg border border-gray-700">
                    <p className="font-bold text-cyan-300 mb-2 font-orbitron">Full System: L(x,y,t) = A + δ + σ + π + ψ_h + ψ_m + Ẇ</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-4 gap-y-2">
                        {equations.map((eq, index) => (
                            <p key={index} className="text-gray-400">{eq}</p>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default App;
