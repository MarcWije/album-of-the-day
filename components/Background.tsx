import Grainient from "@/components/Grainient";

interface BackgroundProps{
    color1?: string;
    color2?: string;
    color3?: string;
}

export default function Background({
    color1 ="#000009",
    color2 ="#184054",
    color3 ="#245F7C"
}: BackgroundProps) {

    return(
    <div style={{ width: '100%', height: '100%', position: 'fixed', zIndex: -1 }}>
        <Grainient
          color1={color1}
          color2={color2}
          color3={color3}
          timeSpeed={0.9}
          colorBalance={-0.14}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>
    );
}