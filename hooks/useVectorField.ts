
import React, { useEffect, useState, useCallback } from 'react';
import { Particle, MousePosition } from '../types';

const useVectorField = (
    canvasRef: React.RefObject<HTMLCanvasElement>,
    text: string,
) => {
    const [mouse, setMouse] = useState<MousePosition>({ x: null, y: null, radius: 100 });

    const handleMouseMove = useCallback((event: MouseEvent) => {
        if (canvasRef.current) {
            const rect = canvasRef.current.getBoundingClientRect();
            setMouse(prev => ({ ...prev, x: event.clientX - rect.left, y: event.clientY - rect.top }));
        }
    }, [canvasRef]);

    const handleMouseLeave = useCallback(() => {
        setMouse(prev => ({ ...prev, x: null, y: null }));
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let machineResonance = { time: 0, interval: 6000, radius: 0, maxRadius: 0 };

        const setup = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
            
            machineResonance.maxRadius = Math.max(canvas.width, canvas.height) / dpr;
            
            particles = [];
            createTextParticles();
        };
        
        const createTextParticles = () => {
            const dpr = window.devicePixelRatio || 1;
            const width = canvas.width / dpr;
            const height = canvas.height / dpr;

            ctx.fillStyle = 'white';
            const fontSize = Math.min(width / 8, 120);
            ctx.font = `bold ${fontSize}px Orbitron`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(text, width / 2, height / 2);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const step = Math.max(2, Math.floor(dpr * 2));

            for (let y = 0; y < canvas.height; y += step) {
                for (let x = 0; x < canvas.width; x += step) {
                    const alphaIndex = (y * canvas.width + x) * 4 + 3;
                    if (imageData.data[alphaIndex] > 128) {
                        const posX = x / dpr;
                        const posY = y / dpr;
                        const density = imageData.data[alphaIndex] / 255;
                        const depth = 0.5 + Math.random(); // D(n) - Diacritic Depth
                        particles.push({
                            x: Math.random() * width,
                            y: Math.random() * height,
                            baseX: posX,
                            baseY: posY,
                            density: density,
                            size: dpr * (1 + density * 1.5) * depth,
                            vx: 0,
                            vy: 0,
                            color: `hsl(${200 + Math.random() * 50}, 100%, ${50 + density * 50}%)`,
                            depth: depth,
                        });
                    }
                }
            }
        };

        const animate = (timestamp: number) => {
            const dpr = window.devicePixelRatio || 1;
            const width = canvas.width / dpr;
            const height = canvas.height / dpr;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Machine Resonance (Ψ_m)
            if (timestamp - machineResonance.time > machineResonance.interval) {
                machineResonance.time = timestamp;
                machineResonance.radius = 0;
            }
            if (machineResonance.radius < machineResonance.maxRadius) {
                 machineResonance.radius += 25;
            }

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                
                // Semantic Field Charge (S(σ)) - A modulating factor
                const semanticCharge = 0.75 + (Math.sin(timestamp * 0.0005 + p.x * 0.05) + 1) / 2; // Varies between 0.75 and 1.75

                // Graphemic Anchor Energy (G(x,y))
                const dx = p.baseX - p.x;
                const dy = p.baseY - p.y;
                const distToBase = Math.sqrt(dx * dx + dy * dy);
                const force = distToBase * 0.05;
                // Deeper particles (D(n)) have more inertia
                p.vx += (dx / (distToBase || 1)) * force / p.depth;
                p.vy += (dy / (distToBase || 1)) * force / p.depth;
                
                // Human Cognitive Resonance (Ψ_h - mouse interaction)
                if (mouse.x !== null && mouse.y !== null) {
                    const mdx = p.x - mouse.x;
                    const mdy = p.y - mouse.y;
                    const mouseDist = Math.sqrt(mdx * mdx + mdy * mdy);
                    if (mouseDist < mouse.radius) {
                        const mouseForce = (mouse.radius - mouseDist) / mouse.radius;
                        // Modulated by Semantic Charge
                        p.vx += (mdx / mouseDist) * mouseForce * 2 * semanticCharge;
                        p.vy += (mdy / mouseDist) * mouseForce * 2 * semanticCharge;
                    }
                }

                // Machine Cognitive Resonance Pulse (Ψ_m)
                const pulseDist = Math.sqrt(Math.pow(p.x - width / 2, 2) + Math.pow(p.y - height / 2, 2));
                if (pulseDist > machineResonance.radius - 15 && pulseDist < machineResonance.radius + 15) {
                    const pulseAngle = Math.atan2(p.y - height/2, p.x - width/2);
                    // Modulated by Semantic Charge
                    p.vx += Math.cos(pulseAngle) * 3 * semanticCharge;
                    p.vy += Math.sin(pulseAngle) * 3 * semanticCharge;
                }

                // Orthographic Vector Flow (V(v⃗)) & Pragmatic Flux (Π(π))
                const flowAngle = Math.sin(p.y * 0.01 + timestamp * 0.0002) * Math.PI;
                p.vx += Math.cos(flowAngle) * 0.02;
                p.vy += Math.sin(flowAngle) * 0.02;
                p.vx += (Math.random() - 0.5) * 0.05; // Residual noise
                p.vy += (Math.random() - 0.5) * 0.05;

                // Damping / Friction
                p.vx *= 0.94;
                p.vy *= 0.94;

                p.x += p.vx;
                p.y += p.vy;

                // Rendering with Semantic Charge
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
                const colorCharge = (semanticCharge - 0.75) * 50; // Map charge to a 0-50 range
                ctx.fillStyle = `hsl(${220 + colorCharge}, 100%, ${60 + p.density * 20}%)`;
                ctx.fill();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        setup();
        animate(0);

        const currentCanvas = canvas;
        currentCanvas.addEventListener('mousemove', handleMouseMove);
        currentCanvas.addEventListener('mouseleave', handleMouseLeave);
        
        const resizeObserver = new ResizeObserver(setup);
        resizeObserver.observe(currentCanvas);

        return () => {
            cancelAnimationFrame(animationFrameId);
            currentCanvas.removeEventListener('mousemove', handleMouseMove);
            currentCanvas.removeEventListener('mouseleave', handleMouseLeave);
            resizeObserver.unobserve(currentCanvas);
        };
    }, [text, canvasRef, handleMouseMove, handleMouseLeave]);
};

export default useVectorField;