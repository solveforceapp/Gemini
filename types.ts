
export interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  density: number;
  size: number;
  vx: number;
  vy: number;
  color: string;
}

export interface MousePosition {
  x: number | null;
  y: number | null;
  radius: number;
}
