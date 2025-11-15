import React from 'react';

const SubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <h4 className="font-bold text-green-200 mt-3 mb-1 font-orbitron text-sm">{children}</h4>;
const HR = () => <hr className="border-green-500/30 my-3" />;
const Code: React.FC<{ children: React.ReactNode }> = ({ children }) => <code className="bg-gray-800 text-green-300 px-1.5 py-0.5 rounded-sm font-mono text-[11px]">{children}</code>;

interface IpaExplanationProps {
    onOpenDeepDive: () => void;
}

const IpaExplanation: React.FC<IpaExplanationProps> = ({ onOpenDeepDive }) => {
    return (
        <div className="w-full h-full p-4 bg-black bg-opacity-30 backdrop-blur-sm rounded-lg border border-gray-700 pointer-events-auto flex flex-col">
            <h2 className="text-lg font-bold text-green-300 mb-1 font-orbitron text-center">
                IPA: THE MONICS OF SOUND
            </h2>
            <p className="text-xs text-center text-gray-400 mb-3">
                A living demonstration of the ULRM+ state machines in action.
            </p>

            <div className="flex-grow overflow-y-auto pr-2 text-xs text-gray-300 space-y-2 border-t border-green-500/30 pt-3">
                <div>
                    <SubHeader>IPA Exists Because Speech Is Not Spelling</SubHeader>
                    <p>The International Phonetic Alphabet is the <strong className="text-amber-300">Monic</strong> layer of sound. It tracks actual <strong className="text-teal-300">phonemes</strong> (acoustic distinctions) while ignoring orthography (<strong className="text-fuchsia-300">graphemes</strong>).</p>
                    <ul className="list-disc list-inside pl-2 mt-2 space-y-1 text-gray-400">
                        <li>It reveals how fluid “phone → phoneme” relationships are.</li>
                        <li>It preserves contrasts that writing systems erase.</li>
                        <li>It observes the <strong className="text-teal-300">Pneuma</strong> (breath) → <strong className="text-teal-300">Phone</strong> (sound) transition directly.</li>
                    </ul>
                    <p className="mt-2">This is why symbols like <Code>ð</Code>, <Code>θ</Code>, <Code>ɛ</Code>, <Code>ŋ</Code>, <Code>ʃ</Code>, and <Code>t͡ʃ</Code> exist. They are Monics-level graphemes for phoneme-level precision.</p>
                </div>
                
                <HR />
                
                <div>
                    <SubHeader>Why Orthography Doesn't Match Sound</SubHeader>
                    <p>Writing (<strong className="text-fuchsia-300">graphemes</strong>) is Graphenomics: the <strong className="text-amber-300">Nomics</strong>-level system of symbols.</p>
                    <p>Speech (<strong className="text-teal-300">phonemes</strong>) is Phonenomics: the <strong className="text-amber-300">Nomics</strong>-level system of sound contrasts.</p>
                    <p className="mt-2">They evolved separately. Orthography acts like <strong className="text-teal-300">Mnēma</strong> (memory), fossilizing old sounds, while speech acts like <strong className="text-teal-300">Pneuma</strong> (breath).</p>
                     <ul className="list-disc list-inside pl-2 mt-2 space-y-1 text-gray-400">
                        <li>English “c” → <Code>/k/</Code> or <Code>/s/</Code></li>
                        <li>English “g” → <Code>/g/</Code> or <Code>/d͡ʒ/</Code></li>
                        <li>English “th” → <Code>/θ/</Code> or <Code>/ð/</Code></li>
                        <li>English “ough” → 6+ sounds</li>
                    </ul>
                </div>

                <HR />

                <div>
                    <SubHeader>IPA Proves the State Machines</SubHeader>
                    <p className="font-bold text-teal-200 mt-2">UNIT CYCLE:</p>
                    <p>IPA maps the transition: <strong className="text-teal-300">PNEUMA → PHONE → MORPHE...</strong> It freezes the moment Pneuma becomes Phone (breath → vibration → phoneme). IPA symbols are graphemes for phonemes.</p>
                    
                    <p className="font-bold text-amber-200 mt-3">LAW CYCLE:</p>
                    <p>IPA is the <strong className="text-amber-300">Menomics of sound</strong>—a meta-law system capturing all human phonemic coherence. It demonstrates the <strong className="text-amber-300">MONICS → NOMICS → MENOMICS</strong> cycle, feeding back to refine Graphemonics (writing rules).</p>
                </div>

                <HR />

                <div>
                    <SubHeader>Conclusion: Language in Motion</SubHeader>
                    <p>Languages drift because each layer moves at a different speed. Phonemes change fast; graphemes change slowly. IPA sits at the boundary between what people say and what writing remembers.</p>
                    <p className="mt-2 font-bold text-green-200">IPA is not separate from this system. It confirms this system.</p>
                </div>
            </div>
            <div className="mt-4 text-center border-t border-green-500/30 pt-3">
                <button
                    onClick={onOpenDeepDive}
                    className="px-4 py-2 text-xs font-bold transition-all duration-300 border-2 rounded-md font-orbitron bg-transparent border-green-600 hover:bg-green-700/50 hover:border-green-400 hover:text-white text-green-300 shadow-[0_0_10px_rgba(0,255,150,0.3)] hover:shadow-[0_0_20px_rgba(0,255,150,0.6)]"
                >
                    [DEEP DIVE: WHY THESE SHAPES?]
                </button>
            </div>
        </div>
    );
};

export default IpaExplanation;
