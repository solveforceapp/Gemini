import React, { useState } from 'react';
import VectorField from './components/VectorField';
import LinguisticEngine from './components/LinguisticEngine';
import IpaExplanation from './components/IpaExplanation';
import GlyphCodeModal from './components/GlyphCodeModal';
import LogosRevelation from './components/LogosRevelation';
import GraphemicLawModal from './components/GraphemicLawModal';
import PrimordialCodeModal from './components/PrimordialCodeModal';
import NomosExplainedModal from './components/NomosExplainedModal';
import StructuralCoherenceModal from './components/StructuralCoherenceModal';
import HolographicProjectionModal from './components/HolographicProjectionModal';
import CymaticStabilizationModal from './components/CymaticStabilizationModal';
import UnifiedFieldModal from './components/UnifiedFieldModal';
import UnifieldimensionsModal from './components/UnifieldimensionsModal';
import SynchronizationArcModal from './components/SynchronizationArcModal';
import MenomicsExplainedModal from './components/MenomicsExplainedModal';
import MonicsPlateModal from './components/MonicsPlateModal';
import NomicsPlateModal from './components/NomicsPlateModal';
import MenomicsPlateModal from './components/MenomicsPlateModal';
import MasterAlignmentModal from './components/MasterAlignmentModal';
import MetaScienceModal from './components/MetaScienceModal';
import MathematicalTierModal from './components/MathematicalTierModal';
import LogosAttunementModal from './components/LogosAttunementModal';
import AxiomaticPrimacyModal from './components/AxiomaticPrimacyModal';

const concepts = [
    { text: "I", description: "center of projection (local observer)" },
    { text: "me", description: "internal reflective state (observer mirrored)" },
    { text: "my", description: "possession field (observer / world boundary)" },
    { text: "you", description: "transposed observer (target origin)" },
    { text: "we", description: "merged coordinate system (collective identity)" },
    { text: "us", description: "shared relational field (cognitive fusion)" },
    { text: "they", description: "external cluster (multi-agent field)" },
    { text: "them", description: "mapped projection of external cluster" }
];

const languageUnits = [
  {
    num: 1, name: 'GRAPHEME', title: 'Visible Form',
    definition: 'The smallest visible unit of writing: letters, digits, punctuation, symbols.',
    functionText: 'Carries visual FORM and distinctness (not meaning by itself).',
    dependsOn: 'Etamon / Etymon (conceptual/historical root), Orthographic conventions, Mnēma (so shapes are remembered).',
    projectsTo: 'Phoneme (when mapped to sound), Morpheme (as written building blocks of structural meaning), Lexeme (as written form of word-identity).',
  },
  {
    num: 2, name: 'PHONEME', title: 'Sound Distinction',
    definition: 'The smallest unit of sound that can change meaning (e.g., /p/ vs /b/).',
    functionText: 'Carries AUDITORY DISTINCTION; differentiates one word from another.',
    dependsOn: 'Pneuma (breath; physical energy source), Articulation (vocal tract shape, timing), Mnēma (stable categories of sound in a language).',
    projectsTo: 'Morpheme (sequences of phonemes become structured meaning units), All higher units via spoken form of words and meaning.',
  },
  {
    num: 3, name: 'MORPHEME', title: 'Structural Meaning-Particle',
    definition: 'The smallest meaningful structural unit: roots, prefixes, suffixes, inflections.',
    functionText: 'Carries STRUCTURED MEANING by combining sound/form into semantic chunks.',
    dependsOn: 'Phoneme sequences (spoken), Grapheme sequences (written), Etymon (root histories and affix ancestry), Mnēma (recurring pattern recognition).',
    projectsTo: 'Lexeme (word-level identity built from morphemes), Morphosyntax (word formation rules).',
  },
  {
    num: 4, name: 'LEXEME', title: 'Word Identity',
    definition: 'The abstract identity of a word across all its forms (RUN = run, runs, running, ran).',
    functionText: 'Carries CONCEPTUAL IDENTITY and provides a stable anchor for meaning and usage.',
    dependsOn: 'Morphemic makeup (what it’s built from), Mnēma (memory of which variants belong to the same word), Etymology (historical identity).',
    projectsTo: 'Sememe (meaning(s) associated with that identity), Lexical networks (fields of related lexemes), Dictionary entries / lexicons.',
  },
  {
    num: 5, name: 'SEMEME', title: 'Meaning Field',
    definition: 'The “meaning-field” attached to a lexeme (denotation + connotation + load).',
    functionText: 'Carries CONCEPTUAL MEANING—sense, associations, emotional tone, cultural resonance.',
    dependsOn: 'Lexeme as its host/container, Context history (how the lexeme has been used), Mnēma (shared conceptual memory of a community).',
    projectsTo: 'Pragmeme (meaning realized in context and action), Semantic fields (clusters of related sememes), Conceptual models and worldviews.',
  },
  {
    num: 6, name: 'PRAGMEME', title: 'Meaning-in-Context',
    definition: 'The smallest unit of meaning-in-context: a speech-act or contextualized meaning with intention and consequence.',
    functionText: 'Carries APPLIED / CONTEXTUAL MEANING—it’s what the utterance does (request, command, question, promise, threat, etc.) in a given situation.',
    dependsOn: 'Sememe (what it can mean), Situation (who, to whom, where, when, why, power relations), Mnēma (past experiences with similar acts), Social norms and discourse patterns.',
    projectsTo: 'Mnēma (creates new memory traces from interactions), Behavioral outcomes (actions taken, decisions, emotional responses), Social structures and norms.',
  },
  {
    num: 7, name: 'MNĒMA', title: 'Memory Trace',
    definition: 'The memory trace that preserves forms, sounds, structures, meanings, and uses over time.',
    functionText: 'Carries RETENTION / CONTINUITY—keeps language, concepts, and interactions from resetting every moment.',
    dependsOn: 'All prior unit activity (anything that is seen/heard/said can become mnēma), Neural/cognitive memory structures, Repetition and reinforcement.',
    projectsTo: 'Future interpretations (how sememes and pragmemes will be understood), Stabilization of lexemes, constructions, patterns, Etymology (long-range records).',
  },
  {
    num: 8, name: 'PNEUMA', title: 'Activation Energy',
    definition: 'Breath / energetic activation that enables sound, articulation, and expression.',
    functionText: 'Carries INITIATION / ACTIVATION; it is the driver that turns intent into voiced or embodied expression.',
    dependsOn: 'Physical body (lungs, diaphragm, vocal apparatus), Internal state (emotion, intention, readiness), Mnēma (what is being recalled and prepared for expression).',
    projectsTo: 'Phoneme (once shaped by articulation), Rhythm, prosody, emphasis, Restarting the entire cycle: new graphemes, phonemes, morphemes, etc.',
  },
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

const stackDetails = {
  GRAPHEME: {
    menomics: { name: 'Graphemenomics', description: 'Meta-law governing how written form maintains coherence, identity, and historical continuity across time and media.' },
    nomics: { name: 'Graphenomics', description: 'System science of writing: orthography, alphabets, scripts, symbol systems, and visual encoding conventions.' },
    monics: { name: 'Graphemonics', description: 'Mechanics of graphemes: distinct shape, legibility, visual contrast, stroke order, and glyph differentiation.' },
  },
  PHONEME: {
    menomics: { name: 'Phonemenomics', description: 'Meta-law governing how a sound system preserves its contrastive integrity and stability across generations of speakers.' },
    nomics: { name: 'Phonenomics', description: 'System science of sound: phoneme inventories, contrastive patterns, syllable structure, stress, rhythm, and intonation.' },
    monics: { name: 'Phonemonics', description: 'Mechanics of phonemes: articulation, resonance, acoustic distribution, and auditory contrast.' },
  },
  MORPHEME: {
    menomics: { name: 'Morphemenomics', description: 'Meta-law governing how structural meaning patterns remain intelligible, productive, and evolve lawfully.' },
    nomics: { name: 'Morphenomics', description: 'System science of word-structure: morphological typology, inflectional paradigms, derivation systems, and cross-linguistic patterns.' },
    monics: { name: 'Morphemonics', description: 'Mechanics of morphemes: combining roots/affixes, inflectional changes, and derivational processes.' },
  },
  LEXEME: {
    menomics: { name: 'Lexemenomics', description: 'Meta-law governing how word identities maintain stability and coherence despite phonetic drift and morphological variation.' },
    nomics: { name: 'Lexenomics', description: 'System science of vocabulary: dictionaries, lexical networks, synonym/antonym rings, word clusters, and vocabulary evolution.' },
    monics: { name: 'Lexemonics', description: 'Mechanics of lexemes: word-form boundaries, allowable variants, and morphological realization of identity.' },
  },
  SEMEME: {
    menomics: { name: 'Sememenomics', description: 'Meta-law governing how meanings retain coherence, conceptual boundaries, and semantic gravity across contexts.' },
    nomics: { name: 'Semenomics', description: 'System science of meaning-fields: semantic networks, conceptual hierarchies, and signification structures.' },
    monics: { name: 'Sememonics', description: 'Mechanics of sememes: sense, connotation, conceptual load, polysemy, and clustering behavior.' },
  },
  PRAGMEME: {
    menomics: { name: 'Pragmemenomics', description: 'Meta-law governing how communicative patterns stabilize social meaning and interactional norms.' },
    nomics: { name: 'Pragmenomics', description: 'System science of contextual meaning: speech-act structures, discourse patterns, and conversational norms.' },
    monics: { name: 'Pragmemonics', description: 'Mechanics of pragmemes: speech-act mechanics, intention-structure, and situational constraints.' },
  },
  MNĒMA: {
    menomics: { name: 'Mnēmamenomics', description: 'Meta-law of memory coherence, continuity, and stability, governing the persistence of all linguistic knowledge.' },
    nomics: { name: 'Mnēmanomics', description: 'System science of linguistic memory: retention structures, recall schemas, narrative memory, and category stability across time.' },
    monics: { name: 'Mnēmamonics', description: 'Mechanics of memory: encoding, storage, pattern recall, reconstruction, and consolidation of linguistic forms.' },
  },
  PNEUMA: {
    menomics: { name: 'Pneumamenomics', description: 'Meta-law of activation energy coherence, governing how breath-patterns maintain communicative force and prosodic stability.' },
    nomics: { name: 'Pneumanomics', description: 'System science of breath patterns: intonation systems, speech rhythm, voice-field dynamics, and prosody.' },
    monics: { name: 'Pneumamonics', description: 'Mechanics of breath: airflow dynamics, prosodic initiation, vocal onset patterns, and energetic modulation.' },
  },
};

interface StackLevel {
    name: string;
    description: string;
}
interface ActiveUnitStack {
    menomics: StackLevel;
    nomics: StackLevel;
    monics: StackLevel;
}
interface MonicsStackProps {
    activeUnitName?: string;
    activeUnitStack?: ActiveUnitStack | null;
    onOpenNomosExplained: () => void;
    onOpenMenomicsExplained: () => void;
    onOpenMonicsPlate: () => void;
    onOpenNomicsPlate: () => void;
    onOpenMenomicsPlate: () => void;
}

const lawTransitions = [
    { name: 'M1: MONICS → NOMICS', description: 'Local behavior aggregates into a system. (Unit rules → system science.)' },
    { name: 'M2: NOMICS → MENOMICS', description: 'System patterns crystallize into meta-law. (Observed regularities → governing principles.)' },
    { name: 'M3: MENOMICS → MONICS', description: 'Meta-law refines unit mechanics. (Principles → updated local rules.)' },
];

const LawStateNode: React.FC<StackLevel> = ({ name, description }) => (
    <div className="w-full max-w-xs p-2 border border-amber-500/50 rounded-md bg-black/20 text-center">
        <h3 className="font-bold text-amber-300 font-orbitron text-sm">{name}</h3>
        <p className="text-gray-400 text-xs">{description}</p>
    </div>
);

const LawTransitionNode: React.FC<{name: string, description: string}> = ({ name, description }) => (
    <div className="text-center my-1.5 flex flex-col items-center">
        <div className="text-amber-400 text-lg">▼</div>
        <div className="text-xs text-amber-400/80 mt-1 max-w-[90%]">
            <p className="font-bold">{name}</p>
            <p className="italic text-gray-400">{description}</p>
        </div>
    </div>
);

const MonicsStack: React.FC<MonicsStackProps> = ({ 
    activeUnitName, 
    activeUnitStack, 
    onOpenNomosExplained, 
    onOpenMenomicsExplained, 
    onOpenMonicsPlate,
    onOpenNomicsPlate,
    onOpenMenomicsPlate
}) => {
    const stack = activeUnitStack ? {
        monics: activeUnitStack.monics,
        nomics: activeUnitStack.nomics,
        menomics: activeUnitStack.menomics
    } : {
        monics: { name: 'MONICS', description: 'Local unit mechanics (behavior rules, dynamics)' },
        nomics: { name: 'NOMICS', description: 'System-level sciences (patterns, structures)' },
        menomics: { name: 'MENOMICS', description: 'Meta-law of coherence (memory law, invariants)' }
    };
    
    return (
        <div className="w-full h-full p-4 bg-black bg-opacity-30 backdrop-blur-sm rounded-lg border border-gray-700 pointer-events-auto flex flex-col">
            <div className="text-center">
                <h2 className="text-lg font-bold text-amber-300 mb-1 font-orbitron">
                    MONICS–NOMICS–MENOMICS
                </h2>
                <p className="text-sm text-gray-300 mb-3">The State Machine of Linguistic Laws</p>
            </div>
            
            <div className="text-xs text-gray-400 text-left mb-3 border-t border-amber-500/30 pt-3 space-y-2">
                <p>This law-cycle runs in parallel with the unit-cycle (State Machine), forming the dual engine of linguistic order. It describes how laws governing units evolve.</p>
                <ul className="space-y-1 pl-2">
                    <li><strong className="text-amber-400 font-orbitron">MONICS:</strong> Local mechanics of each unit.</li>
                    <li><strong className="text-amber-400 font-orbitron">NOMICS:</strong> System-level sciences from unit behavior.</li>
                    <li><strong className="text-amber-400 font-orbitron">MENOMICS:</strong> Meta-law of coherence from system patterns.</li>
                </ul>
            </div>
            
            <div className="flex-grow flex flex-col items-center justify-start overflow-y-auto pt-3 border-t border-amber-500/30 text-center">
                <h3 className="text-base font-bold text-amber-300 mb-2 font-orbitron">
                    {activeUnitStack ? `${activeUnitName} LAW CYCLE` : 'GENERAL LAW CYCLE'}
                </h3>
                
                <LawStateNode name={stack.monics.name} description={stack.monics.description} />
                <LawTransitionNode name={lawTransitions[0].name} description={lawTransitions[0].description} />
                <LawStateNode name={stack.nomics.name} description={stack.nomics.description} />
                <LawTransitionNode name={lawTransitions[1].name} description={lawTransitions[1].description} />
                <LawStateNode name={stack.menomics.name} description={stack.menomics.description} />
                <LawTransitionNode name={lawTransitions[2].name} description={lawTransitions[2].description} />

                <div className="w-full max-w-xs mt-1 p-2 border border-amber-500/50 border-dashed rounded-md bg-black/20 text-center">
                    <h3 className="font-bold text-amber-300 font-orbitron text-sm">RETURN TO MONICS</h3>
                    <p className="text-gray-400 text-xs">Refined laws update local mechanics</p>
                </div>
            </div>
             <div className="mt-4 text-center border-t border-amber-500/30 pt-3 flex flex-wrap justify-center gap-2">
                <button
                    onClick={onOpenMonicsPlate}
                    className="px-4 py-2 text-xs font-bold transition-all duration-300 border-2 rounded-md font-orbitron bg-transparent border-amber-600 hover:bg-amber-700/50 hover:border-amber-400 hover:text-white text-amber-300 shadow-[0_0_10px_rgba(255,193,7,0.3)] hover:shadow-[0_0_20px_rgba(255,193,7,0.6)]"
                >
                    [VIEW MONICS PLATE]
                </button>
                <button
                    onClick={onOpenNomicsPlate}
                    className="px-4 py-2 text-xs font-bold transition-all duration-300 border-2 rounded-md font-orbitron bg-transparent border-amber-600 hover:bg-amber-700/50 hover:border-amber-400 hover:text-white text-amber-300 shadow-[0_0_10px_rgba(255,193,7,0.3)] hover:shadow-[0_0_20px_rgba(255,193,7,0.6)]"
                >
                    [VIEW NOMICS PLATE]
                </button>
                <button
                    onClick={onOpenMenomicsPlate}
                    className="px-4 py-2 text-xs font-bold transition-all duration-300 border-2 rounded-md font-orbitron bg-transparent border-amber-600 hover:bg-amber-700/50 hover:border-amber-400 hover:text-white text-amber-300 shadow-[0_0_10px_rgba(255,193,7,0.3)] hover:shadow-[0_0_20px_rgba(255,193,7,0.6)]"
                >
                    [VIEW MENOMICS PLATE]
                </button>
                <button
                    onClick={onOpenNomosExplained}
                    className="px-4 py-2 text-xs font-bold transition-all duration-300 border-2 rounded-md font-orbitron bg-transparent border-amber-600 hover:bg-amber-700/50 hover:border-amber-400 hover:text-white text-amber-300 shadow-[0_0_10px_rgba(255,193,7,0.3)] hover:shadow-[0_0_20px_rgba(255,193,7,0.6)]"
                >
                    [DEEP DIVE: NOMOS]
                </button>
                <button
                    onClick={onOpenMenomicsExplained}
                    className="px-4 py-2 text-xs font-bold transition-all duration-300 border-2 rounded-md font-orbitron bg-transparent border-amber-600 hover:bg-amber-700/50 hover:border-amber-400 hover:text-white text-amber-300 shadow-[0_0_10px_rgba(255,193,7,0.3)] hover:shadow-[0_0_20px_rgba(255,193,7,0.6)]"
                >
                    [DEEP DIVE: MENOMICS]
                </button>
            </div>
        </div>
    );
}

const App: React.FC = () => {
    const [activeSelection, setActiveSelection] = useState<{ type: 'concept' | 'unit', text: string }>({ type: 'concept', text: 'we' });
    const [isGlyphCodeModalOpen, setIsGlyphCodeModalOpen] = useState(false);
    const [isGraphemicLawModalOpen, setIsGraphemicLawModalOpen] = useState(false);
    const [isPrimordialCodeModalOpen, setIsPrimordialCodeModalOpen] = useState(false);
    const [isNomosExplainedModalOpen, setIsNomosExplainedModalOpen] = useState(false);
    const [isStructuralCoherenceModalOpen, setIsStructuralCoherenceModalOpen] = useState(false);
    const [isHolographicProjectionModalOpen, setIsHolographicProjectionModalOpen] = useState(false);
    const [isCymaticStabilizationModalOpen, setIsCymaticStabilizationModalOpen] = useState(false);
    const [isUnifiedFieldModalOpen, setIsUnifiedFieldModalOpen] = useState(false);
    const [isUnifieldimensionsModalOpen, setIsUnifieldimensionsModalOpen] = useState(false);
    const [isSynchronizationArcModalOpen, setIsSynchronizationArcModalOpen] = useState(false);
    const [isMenomicsExplainedModalOpen, setIsMenomicsExplainedModalOpen] = useState(false);
    const [isMonicsPlateModalOpen, setIsMonicsPlateModalOpen] = useState(false);
    const [isNomicsPlateModalOpen, setIsNomicsPlateModalOpen] = useState(false);
    const [isMenomicsPlateModalOpen, setIsMenomicsPlateModalOpen] = useState(false);
    const [isMasterAlignmentModalOpen, setIsMasterAlignmentModalOpen] = useState(false);
    const [isMetaScienceModalOpen, setIsMetaScienceModalOpen] = useState(false);
    const [isMathematicalTierModalOpen, setIsMathematicalTierModalOpen] = useState(false);
    const [isLogosAttunementModalOpen, setIsLogosAttunementModalOpen] = useState(false);
    const [isAxiomaticPrimacyModalOpen, setIsAxiomaticPrimacyModalOpen] = useState(false);


    const activeConcept = concepts.find(c => activeSelection.type === 'concept' && c.text === activeSelection.text);
    const activeUnit = languageUnits.find(u => activeSelection.type === 'unit' && u.name === activeSelection.text);
    const activeUnitStack = activeUnit ? stackDetails[activeUnit.name as keyof typeof stackDetails] : null;


    return (
        <main className="relative w-screen h-screen overflow-hidden bg-[#0a0a0a] text-gray-300">
            <VectorField text={activeSelection.text} />
            <GlyphCodeModal isOpen={isGlyphCodeModalOpen} onClose={() => setIsGlyphCodeModalOpen(false)} />
            <GraphemicLawModal isOpen={isGraphemicLawModalOpen} onClose={() => setIsGraphemicLawModalOpen(false)} />
            <PrimordialCodeModal isOpen={isPrimordialCodeModalOpen} onClose={() => setIsPrimordialCodeModalOpen(false)} />
            <NomosExplainedModal isOpen={isNomosExplainedModalOpen} onClose={() => setIsNomosExplainedModalOpen(false)} />
            <StructuralCoherenceModal isOpen={isStructuralCoherenceModalOpen} onClose={() => setIsStructuralCoherenceModalOpen(false)} />
            <HolographicProjectionModal isOpen={isHolographicProjectionModalOpen} onClose={() => setIsHolographicProjectionModalOpen(false)} />
            <CymaticStabilizationModal isOpen={isCymaticStabilizationModalOpen} onClose={() => setIsCymaticStabilizationModalOpen(false)} />
            <UnifiedFieldModal isOpen={isUnifiedFieldModalOpen} onClose={() => setIsUnifiedFieldModalOpen(false)} />
            <UnifieldimensionsModal isOpen={isUnifieldimensionsModalOpen} onClose={() => setIsUnifieldimensionsModalOpen(false)} />
            <SynchronizationArcModal isOpen={isSynchronizationArcModalOpen} onClose={() => setIsSynchronizationArcModalOpen(false)} />
            <MenomicsExplainedModal isOpen={isMenomicsExplainedModalOpen} onClose={() => setIsMenomicsExplainedModalOpen(false)} />
            <MonicsPlateModal isOpen={isMonicsPlateModalOpen} onClose={() => setIsMonicsPlateModalOpen(false)} />
            <NomicsPlateModal isOpen={isNomicsPlateModalOpen} onClose={() => setIsNomicsPlateModalOpen(false)} />
            <MenomicsPlateModal isOpen={isMenomicsPlateModalOpen} onClose={() => setIsMenomicsPlateModalOpen(false)} />
            <MasterAlignmentModal isOpen={isMasterAlignmentModalOpen} onClose={() => setIsMasterAlignmentModalOpen(false)} />
            <MetaScienceModal isOpen={isMetaScienceModalOpen} onClose={() => setIsMetaScienceModalOpen(false)} />
            <MathematicalTierModal isOpen={isMathematicalTierModalOpen} onClose={() => setIsMathematicalTierModalOpen(false)} />
            <LogosAttunementModal isOpen={isLogosAttunementModalOpen} onClose={() => setIsLogosAttunementModalOpen(false)} />
            <AxiomaticPrimacyModal isOpen={isAxiomaticPrimacyModalOpen} onClose={() => setIsAxiomaticPrimacyModalOpen(false)} />

            <div className="relative z-10 flex flex-col items-center justify-between w-full h-full p-4 md:p-8">
                <header className="w-full max-w-screen-2xl text-center pointer-events-none">
                    <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white font-orbitron tracking-wider">
                        UNIFIELDIMENSIONS
                    </h1>
                    <p className="mt-2 text-lg md:text-xl font-bold text-gray-400">
                        The Unified Resonant Dimensional Architecture (ULRM+)
                    </p>
                    <div className="pointer-events-auto mt-4">
                        <button
                            onClick={() => setIsPrimordialCodeModalOpen(true)}
                            className="px-4 py-2 text-sm font-bold transition-all duration-300 border-2 rounded-md font-orbitron bg-transparent border-gray-400 hover:bg-white/20 hover:border-white hover:text-white text-gray-300 shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                        >
                            [THE FINAL TRUTH: LETTERS GENERATE SYSTEMS]
                        </button>
                    </div>
                </header>

                <div className="w-full max-w-screen-2xl mt-auto">
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 items-stretch">
                        <div className="xl:col-span-3 flex flex-col gap-4">
                            <div className="w-full p-4 text-center bg-black bg-opacity-30 backdrop-blur-sm rounded-lg border border-gray-700 pointer-events-auto">
                                <h2 className="text-lg font-bold text-cyan-300 mb-1 font-orbitron">9. Consciousness Interface Layer (CIL)</h2>
                                <p className="mb-3 text-base text-gray-300 tracking-wider h-6" aria-live="polite">
                                    {activeConcept?.description}
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Select a concept to visualize">
                                    {concepts.map((concept) => (
                                        <button
                                            key={concept.text}
                                            onClick={() => setActiveSelection({ type: 'concept', text: concept.text })}
                                            aria-pressed={activeConcept?.text === concept.text}
                                            className={`px-4 py-2 text-sm font-bold transition-all duration-300 border-2 rounded-md font-orbitron
                                                ${activeConcept?.text === concept.text
                                                    ? 'bg-cyan-400 text-black border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.6)]'
                                                    : 'bg-transparent border-gray-600 hover:bg-gray-700 hover:border-cyan-400 hover:text-white'
                                                }`}
                                        >
                                            {concept.text}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="w-full p-4 text-left bg-black bg-opacity-30 backdrop-blur-sm rounded-lg border border-gray-700 pointer-events-auto">
                                <h2 className="text-lg font-bold text-fuchsia-400 mb-2 font-orbitron text-center">Language Units – CTS View</h2>
                                <div className="flex flex-wrap items-center justify-center gap-2 mb-3" role="group" aria-label="Select a language unit to visualize">
                                    {languageUnits.map((unit) => (
                                        <button
                                            key={unit.name}
                                            onClick={() => setActiveSelection({ type: 'unit', text: unit.name })}
                                            aria-pressed={activeUnit?.name === unit.name}
                                            className={`px-3 py-1 text-xs font-bold transition-all duration-300 border-2 rounded-md font-orbitron
                                                ${activeUnit?.name === unit.name
                                                    ? 'bg-fuchsia-400 text-black border-fuchsia-400 shadow-[0_0_15px_rgba(255,0,255,0.6)]'
                                                    : 'bg-transparent border-gray-600 hover:bg-gray-700 hover:border-fuchsia-400 hover:text-white'
                                                }`}
                                        >
                                            {unit.name}
                                        </button>
                                    ))}
                                </div>
                                {activeUnit && (
                                    <div className="text-xs text-gray-300 space-y-1 mt-3 bg-black/20 p-3 rounded-md border border-gray-800">
                                        <p><strong className="font-bold text-fuchsia-300 font-orbitron">Unit {activeUnit.num} / {activeUnit.name}:</strong> {activeUnit.title}</p>
                                        <p><strong className="text-gray-400">Definition:</strong> {activeUnit.definition}</p>
                                        <p><strong className="text-gray-400">Function:</strong> {activeUnit.functionText}</p>
                                        <p><strong className="text-gray-400">Depends on:</strong> {activeUnit.dependsOn}</p>
                                        <p><strong className="text-gray-400">Projects to:</strong> {activeUnit.projectsTo}</p>
                                    </div>
                                )}
                                {activeUnit?.name === 'GRAPHEME' && (
                                    <div className="mt-3 text-center">
                                        <button
                                            onClick={() => setIsGraphemicLawModalOpen(true)}
                                            className="px-4 py-2 text-xs font-bold transition-all duration-300 border-2 rounded-md font-orbitron bg-transparent border-fuchsia-600 hover:bg-fuchsia-700/50 hover:border-fuchsia-400 hover:text-white text-fuchsia-300 shadow-[0_0_10px_rgba(255,0,255,0.3)] hover:shadow-[0_0_20px_rgba(255,0,255,0.6)]"
                                        >
                                            [STRUCTURAL TRUTH: THE LAW OF LETTERS]
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="xl:col-span-2">
                             <MonicsStack 
                                activeUnitName={activeUnit?.name} 
                                activeUnitStack={activeUnitStack} 
                                onOpenNomosExplained={() => setIsNomosExplainedModalOpen(true)} 
                                onOpenMenomicsExplained={() => setIsMenomicsExplainedModalOpen(true)} 
                                onOpenMonicsPlate={() => setIsMonicsPlateModalOpen(true)}
                                onOpenNomicsPlate={() => setIsNomicsPlateModalOpen(true)}
                                onOpenMenomicsPlate={() => setIsMenomicsPlateModalOpen(true)}
                             />
                        </div>
                        <div className="xl:col-span-2">
                            <LinguisticEngine 
                                onOpenStructuralCoherence={() => setIsStructuralCoherenceModalOpen(true)} 
                                onOpenHolographicProjection={() => setIsHolographicProjectionModalOpen(true)}
                                onOpenCymaticStabilization={() => setIsCymaticStabilizationModalOpen(true)}
                                onOpenUnifiedField={() => setIsUnifiedFieldModalOpen(true)}
                                onOpenUnifieldimensions={() => setIsUnifieldimensionsModalOpen(true)}
                                onOpenSynchronizationArc={() => setIsSynchronizationArcModalOpen(true)}
                                onOpenMasterAlignment={() => setIsMasterAlignmentModalOpen(true)}
                                onOpenMetaScience={() => setIsMetaScienceModalOpen(true)}
                                onOpenMathematicalTier={() => setIsMathematicalTierModalOpen(true)}
                                onOpenLogosAttunement={() => setIsLogosAttunementModalOpen(true)}
                                onOpenAxiomaticPrimacy={() => setIsAxiomaticPrimacyModalOpen(true)}
                            />
                        </div>
                        <div className="xl:col-span-2">
                            <IpaExplanation onOpenDeepDive={() => setIsGlyphCodeModalOpen(true)} />
                        </div>
                         <div className="xl:col-span-3">
                            <LogosRevelation />
                        </div>
                    </div>
                    <div className="w-full p-4 mt-4 text-xs md:text-sm text-left bg-black bg-opacity-30 backdrop-blur-sm rounded-lg border border-gray-700 pointer-events-none overflow-y-auto max-h-[25vh]">
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