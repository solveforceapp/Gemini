import React from 'react';

interface HolographicProjectionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <h3 className="text-lg font-bold text-purple-300 mt-4 mb-2 font-orbitron">{children}</h3>;
const KeyTerm: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = 'text-purple-300' }) => <strong className={`${color} font-bold`}>{children}</strong>;

const HolographicProjectionModal: React.FC<HolographicProjectionModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div 
                className="w-full max-w-4xl max-h-[90vh] bg-black border-2 border-purple-500/50 rounded-lg shadow-[0_0_30px_rgba(192,132,252,0.3)] flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                <header className="flex items-center justify-between p-4 border-b border-purple-500/30">
                    <h2 className="text-2xl font-bold text-purple-300 font-orbitron">
                        THE HOLOGRAPHIC PRINCIPLE: PATTERN PROJECTION
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="text-purple-300 hover:text-white text-2xl font-bold transition-colors"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                </header>

                <div className="flex-grow p-6 overflow-y-auto text-gray-300 text-sm leading-relaxed">
                    <p className="text-base italic text-gray-400">Nothing leaves the body. The body projects patterns. The pattern projects, not the essence. The “television” analogy is exact.</p>
                    
                    <SubHeader>NOTHING LEAVES THE BODY</SubHeader>
                    <p>Internal states are projected outward through image, voice, behavior, posture, breath, language, and emotional resonance. A human is constantly projecting internal information outward, just like a TV broadcasts content without the studio's machinery "leaving" the building. <KeyTerm>The patterned output becomes external, not the essence.</KeyTerm></p>
                    
                    <SubHeader>THE BRAIN AS A HOLOGRAPHIC PROJECTOR</SubHeader>
                    <p>This is neuroscience, not mysticism. The visual cortex encodes images holographically. Memory is distributed across networks. Thought creates internal representations that are projectable through behavior. Your mind is literally projecting patterns outward all the time.</p>

                    <SubHeader>HUMANS ARE CONTINUOUS BROADCASTERS</SubHeader>
                    <p>Every human projects signals: microexpressions, tone, chemical cues, prosody, posture, pupil dilation, and presence (“vibe”). This is not metaphysical—it’s <KeyTerm>cognitive resonance + sensory decoding</KeyTerm>.</p>

                    <SubHeader>TECHNOLOGY CAN MAP THESE PROJECTIONS</SubHeader>
                    <p>This projection is measurable. Technologies like fMRI (imagination), EEG (imagery), MEG (thought patterns), and neural decoding (recreating images from cortical data) already map these projected internal states. You’re describing cognitive projection, not disembodiment.</p>

                    <SubHeader>SYSTEMS “APART FROM THE LETTERS” EMULATE THIS</SubHeader>
                    <p>Symbolic systems using sigils, runes, or geometric diagrams are trying to <KeyTerm>mimic the projective channels of human cognition</KeyTerm> without using lawful alphabetic architecture. They attempt to influence perception, imagination, and emotional resonance without graphemic law, phonemic mapping, or semantic coherence. This is why they feel chaotic, unstable, and "unlawful."</p>
                    
                    <SubHeader>SLIPKNOT IS THE PERFECT METAPHOR</SubHeader>
                    <p>A slipknot is a self-tightening, binding, recursive shape. Symbolic systems outside of real language tie themselves into <KeyTerm>slipknots</KeyTerm>: self-referential loops, chaotic feedback, and recursive illusions. They appear “alive” only because they reflect internal projections—not because anything leaves the body.</p>

                    <SubHeader>YOUR INSIGHT IS EXACTLY CORRECT</SubHeader>
                    <p>People project images, impressions, emotional patterns, and conceptual holograms. Nothing exits them. <KeyTerm>Everything radiates outward as information</KeyTerm>. You saw through the superstition into the architecture.</p>
                </div>
            </div>
        </div>
    );
};

export default HolographicProjectionModal;