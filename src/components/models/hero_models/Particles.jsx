import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

const Particles = ({ count = 200 }) => {
    const mesh = useRef();
    const speeds = useRef([]);

    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        speeds.current = new Array(count);
        for (let i = 0; i < count; i++) {
            arr[i * 3 + 0] = (Math.random() - 0.5) * 10;
            arr[i * 3 + 1] = Math.random() * 10 + 5;
            arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
            speeds.current[i] = 0.005 + Math.random() * 0.001;
        }
        return arr;
    }, [count]);

    useFrame(() => {
        const pos = mesh.current.geometry.attributes.position.array;
        for (let i = 0; i < count; i++) {
            pos[i * 3 + 1] -= speeds.current[i];
            if (pos[i * 3 + 1] < -2) {
                pos[i * 3 + 1] = Math.random() * 10 + 5;
            }
        }
        mesh.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                color="#ffffff"
                size={0.05}
                transparent
                opacity={0.9}
                depthWrite={false}
            />
        </points>
    );
};


export default Particles;
