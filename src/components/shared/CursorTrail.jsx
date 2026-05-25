import { motion, useMotionValue, useSpring } from "framer-motion";
import { Dumbbell } from "lucide-react";
import { useEffect, useState } from "react";

const tail = [
  { width: 46, height: 8, stiffness: 125, damping: 21, opacity: 0.34, rotate: -18 },
  { width: 34, height: 6, stiffness: 96, damping: 24, opacity: 0.26, rotate: 16 },
  { width: 22, height: 5, stiffness: 72, damping: 27, opacity: 0.2, rotate: -10 },
  { width: 12, height: 12, stiffness: 54, damping: 30, opacity: 0.16, rotate: 0 },
];

function TailSpark({ item, x, y }) {
  const springX = useSpring(x, { stiffness: item.stiffness, damping: item.damping, mass: 0.45 });
  const springY = useSpring(y, { stiffness: item.stiffness, damping: item.damping, mass: 0.45 });

  return (
    <motion.span
      style={{
        x: springX,
        y: springY,
        width: item.width,
        height: item.height,
        marginLeft: item.width / -2,
        marginTop: item.height / -2,
        opacity: item.opacity,
        rotate: item.rotate,
      }}
      className="absolute left-0 top-0 rounded-full bg-vanta-lime shadow-[0_0_18px_rgba(198,255,0,0.8)] blur-[0.5px]"
    />
  );
}

function CursorTrail() {
  const [enabled, setEnabled] = useState(false);
  const [pressed, setPressed] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dumbbellX = useSpring(x, { stiffness: 520, damping: 34, mass: 0.28 });
  const dumbbellY = useSpring(y, { stiffness: 520, damping: 34, mass: 0.28 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(finePointer);

    if (!finePointer) return undefined;

    const handlePointerMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const handlePointerDown = () => setPressed(true);
    const handlePointerUp = () => setPressed(false);

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[80] hidden md:block">
      {tail.map((item) => (
        <TailSpark key={`${item.width}-${item.stiffness}`} item={item} x={x} y={y} />
      ))}
      <motion.div
        style={{
          x: dumbbellX,
          y: dumbbellY,
          marginLeft: -18,
          marginTop: -18,
        }}
        animate={{ scale: pressed ? 0.78 : 1, rotate: pressed ? -22 : -12 }}
        transition={{ type: "spring", stiffness: 520, damping: 24 }}
        className="absolute left-0 top-0 grid size-9 place-items-center rounded-full border border-vanta-lime/80 bg-vanta-black/70 text-vanta-lime shadow-[0_0_24px_rgba(198,255,0,0.55)] backdrop-blur"
      >
        <Dumbbell size={21} strokeWidth={2.8} />
      </motion.div>
      <motion.span
        style={{ x: dumbbellX, y: dumbbellY, marginLeft: -4, marginTop: -4 }}
        className="absolute left-0 top-0 size-2 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.75)]"
      />
    </div>
  );
}

export default CursorTrail;
