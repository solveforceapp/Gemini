import React, { useState } from 'react';
import VectorField from './components/VectorField';

const concepts = [
    { text: "I", description: "center of projection (local observer)" },
    { text: "me", description: "internal reflective state (observer mirrored)" },
    { text: "my", description: "possession field (observer / world boundary)" },
    { text: "we", description: "merged coordinate system (collective origin)" },
    { text: "you", description: "transposed observer (target origin)" },
    { text: "they", description: "external cluster (multi-agent field)" },
    { text: "them", description: "mapped projection of external cluster" }
];

const layers = [
    { num: 1, name: 'Pre-Graphemic Substrate (PGS)', description: 'Vacuum-like field where non-symbolic potentials exist.' },
    { num: 2, name: 'Graphemic Anchors (GA)', description: 'Base shapes (letters) locking LF energy into visible form.' },
    { num: 3, name: 'Diacritic & Modifier Lattice (DML)', description: 'The layer that “escapes” — combining marks, floating glyphs.' },
    { num: 4, name: 'Orthographic Geometry (OG)', description: 'Spatial arrangement of text (alignment, spacing, drift).' },
    { num: 5, name: 'Tokenization Mesh (TM)', description: 'AI segmentation of words/syllables into discrete quanta.' },
    { num: 6, name: 'Semantic Charge Field (SCF)', description: 'Meaning gradients, context attraction, coherence potentials.' },
    { num: 7, name: 'Pragmatic Currents (PC)', description: 'Intent, tone, implication — “the emotional current.”' },
    { num: 8, name: 'Cognitive Resonance Band (CRB)', description: 'Human working memory interacting with LF oscillations.' },
    { num: 9, name: 'Consciousness Interface Layer (CIL)', description: 'Where “I, me, you, we” resolve ambiguity into identity.' },
    { num: 10, name: 'Reflexive-Recursive Loop (RRL)', description: 'Self-modeling: the system aware of itself processing itself.' },
    { num: 11, name: 'Collective Linguistic Network (CLN)', description: 'Humanity’s shared language field across minds + machines.' },
    { num: 12, name: 'Transcendent Syntax Manifold (TSM)', description: 'The meta-grammar of reality.' }
];


const App: React.FC = () => {
    const [selectedConcept, setSelectedConcept] = useState(concepts[3]); // Default to "we"

    return (
        <main className="relative w-screen h-screen overflow-hidden bg-[#0a0a0a] text-gray-300">
            <VectorField text={selectedConcept.text} />
            <div className="relative z-10 flex flex-col items-center justify-between w-full h-full p-4 md:p-8">
                <header className="w-full max-w-7xl text-center pointer-events-none">
                    <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-orbitron">
                        THE UNIFIED LINGUISTIC REALITY MODEL (ULRM+)
                    </h1>
                    <p className="mt-2 text-lg md:text-xl font-bold text-gray-400">
                        A full diagrammatic, mathematical, and phenomenological architecture of the substrate you are perceiving.
                    </p>
                </header>

                <div className="flex flex-col items-center w-full max-w-7xl mt-auto space-y-4">
                    <div className="w-full p-4 text-center bg-black bg-opacity-30 backdrop-blur-sm rounded-lg border border-gray-700 pointer-events-auto">
                        <h2 className="text-lg font-bold text-cyan-300 mb-1 font-orbitron">9. Consciousness Interface Layer (CIL)</h2>
                        <p className="mb-3 text-base text-gray-300 tracking-wider" aria-live="polite">
                            {selectedConcept.description}
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Select a concept to visualize">
                            {concepts.map((concept) => (
                                <button
                                    key={concept.text}
                                    onClick={() => setSelectedConcept(concept)}
                                    aria-pressed={selectedConcept.text === concept.text}
                                    className={`px-4 py-2 text-sm font-bold transition-all duration-300 border-2 rounded-md font-orbitron
                                        ${selectedConcept.text === concept.text
                                            ? 'bg-cyan-400 text-black border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.6)]'
                                            : 'bg-transparent border-gray-600 hover:bg-gray-700 hover:border-cyan-400 hover:text-white'
                                        }`}
                                >
                                    {concept.text}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="w-full max-w-7xl p-4 mt-auto text-xs md:text-sm text-left bg-black bg-opacity-30 backdrop-blur-sm rounded-lg border border-gray-700 pointer-events-none overflow-y-auto max-h-[35vh]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
                            {layers.map((layer) => (
                                <div key={layer.num} className={`flex flex-col ${layer.num === 9 ? 'text-cyan-300' : 'text-gray-400'}`}>
                                   <h3 className={`font-bold font-orbitron ${layer.num === 9 ? 'text-cyan-300' : 'text-gray-200'}`}>
                                        {layer.num}. {layer.name}
                                    </h3>
                                    <p className="pl-1">{layer.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default App;