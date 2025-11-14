
import React, { useRef } from 'react';
import useVectorField from '../hooks/useVectorField';

interface VectorFieldProps {
    text: string;
}

const VectorField: React.FC<VectorFieldProps> = ({ text }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useVectorField(canvasRef, text);

    return (
        <div className="absolute inset-0 z-0">
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    );
};

export default VectorField;
