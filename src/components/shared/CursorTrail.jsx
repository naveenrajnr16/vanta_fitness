import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const tail = [
  { size: 34, stiffness: 115, damping: 22, opacity: 0.18 },
  { size: 26, stiffness: 92, damping: 24, opacity: 0.16 },
  { size: 18, stiffness: 72, damping: 26, opacity: 0.13 },
  { size: 10, stiffness: 54, damping: 28, opacity: 0.1 },
];

function TailDot({ item, x, y }) {
  const springX = useSpring(x, { stiffness: item.stiffness, damping: item.damping, mass: 0.45 });
  const springY = useSpring(y, { stiffness: item.stiffness, damping: item.damping, mass: 0.45 });

  return (
    <motion.span
      style={{
        x: springX,
        y: springY,
        width: item.size,
        height: item.size,
        marginLeft: item.size / -2,
        marginTop: item.size / -2,
        opacity: item.opacity,
      }}
      className="absolute left-0 top-0 rounded-full border border-vanta-lime bg-vanta-lime blur-[1px]"
    />
  );
}

function CursorTrail() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(finePointer);

    if (!finePointer) return undefined;

    const handlePointerMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[80] hidden md:block">
      {tail.map((item) => (
        <TailDot key={item.size} item={item} x={x} y={y} />
      ))}
      <motion.span
        style={{
          x,
          y,
          marginLeft: -4,
          marginTop: -4,
        }}
        className="absolute left-0 top-0 size-2 rounded-full bg-vanta-lime shadow-[0_0_18px_rgba(198,255,0,0.9)]"
      />
    </div>
  );
}

export default CursorTrail;
