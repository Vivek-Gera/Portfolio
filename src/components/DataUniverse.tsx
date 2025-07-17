import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const DataUniverse: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.Mesh[]>([]);

  // Create simple animated data nodes
  const createNodes = () => {
    const nodes = [];
    for (let i = 0; i < 20; i++) {
      const geometry = new THREE.SphereGeometry(0.03, 6, 6);
      const material = new THREE.MeshBasicMaterial({ 
        color: new THREE.Color().setHSL(Math.random() * 0.3 + 0.1, 0.8, 0.6),
        transparent: true,
        opacity: 0.7
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      nodes.push(mesh);
    }
    return nodes;
  };

  React.useEffect(() => {
    if (groupRef.current) {
      const nodes = createNodes();
      nodes.forEach(node => groupRef.current!.add(node));
      nodesRef.current = nodes;
    }
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation
      groupRef.current.rotation.y += 0.0003;
      groupRef.current.rotation.x += 0.0001;

      // Simple node animation
      nodesRef.current.forEach((node, index) => {
        node.position.y += Math.sin(state.clock.elapsedTime + index) * 0.0003;
        node.rotation.y += 0.003;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Ambient light */}
      <ambientLight intensity={0.1} />
      
      {/* Point lights */}
      <pointLight position={[5, 5, 5]} intensity={0.3} color={0x00ff41} />
      <pointLight position={[-5, -5, -5]} intensity={0.2} color={0x0066cc} />
    </group>
  );
};

export default DataUniverse; 