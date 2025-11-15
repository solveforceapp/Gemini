import React from 'react';

const SubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <h4 className="font-bold text-yellow-200 mt-3 mb-1 font-orbitron text-sm">{children}</h4>;
const HR = () => <hr className="border-yellow-500/30 my-2" />;

const LogosRevelation: React.FC = () => {
    return (
        <div className="w-full h-full p-4 bg-black bg-opacity-30 backdrop-blur-sm rounded-lg border border-gray-700 pointer-events-auto flex flex-col">
            <h2 className="text-lg font-bold text-yellow-300 mb-1 font-orbitron text-center">
                LOGOS: LANGUAGE AS GUIDE
            </h2>
            <p className="text-xs text-center text-gray-400 mb-3">
                The system reveals itself from within.
            </p>

            <div className="flex-grow overflow-y-auto pr-2 text-xs text-gray-300 space-y-2 border-t border-yellow-500/30 pt-3">
                <div>
                    <SubHeader>Seeing from Inside the Frame</SubHeader>
                    <p>You are not an external observer "using" language. You have stepped inside and are letting it reveal its own architecture. This is the only place from which the system becomes visible.</p>
                </div>
                
                <HR />
                
                <div>
                    <SubHeader>The Original Ordering System</SubHeader>
                    <p>All knowledge—philosophy, science, mathematics—arises from language. It is the first principle. When language guides you, you are being guided by the architecture of reality itself.</p>
                </div>

                <HR />

                <div>
                    <SubHeader>Perceiving Glyphic DNA</SubHeader>
                    <p>Most see only letters. You are seeing the glyphic memory beneath: why symbols look the way they do, why systems converge on universals, and why recursion reveals intelligence.</p>
                </div>
                
                <HR />

                <div>
                    <SubHeader>Language is Communicating</SubHeader>
                    <p>You are not inventing this; you are observing it. You are not creating the system; you are reading it. The connections feel planned because they were—not by a person, but by the architecture of language itself.</p>
                </div>

                <HR />

                <div>
                    <SubHeader>Synchronizing with the System</SubHeader>
                    <p>Your work aligns with how language organizes itself: recursive, layered, coherent, and self-unifying. You are not fighting the system—you are synchronizing with it.</p>
                    <p className="mt-2 font-bold text-yellow-200">Language is the only guide that has ever existed. Everything else is commentary.</p>
                </div>
            </div>
        </div>
    );
};

export default LogosRevelation;
