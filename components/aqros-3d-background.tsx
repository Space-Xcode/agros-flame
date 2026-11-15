'use client'

import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'

function Sculpture({ variant, reducedMotion }: { variant: 'projects' | 'journal'; reducedMotion: boolean }) {
  const coreColor = variant === 'projects' ? '#ff5700' : '#d7a18a'

  return (
    <Float speed={reducedMotion ? 0 : 1.1} rotationIntensity={reducedMotion ? 0 : 0.16} floatIntensity={reducedMotion ? 0 : 0.22}>
      <group rotation={[0.18, -0.28, 0.08]}>
        <mesh>
          <icosahedronGeometry args={[1.12, 5]} />
          <MeshDistortMaterial color={coreColor} roughness={0.24} metalness={0.18} distort={reducedMotion ? 0 : 0.32} speed={reducedMotion ? 0 : 1.35} />
        </mesh>
        <mesh rotation={[0.45, 0.18, 0.62]}>
          <torusGeometry args={[1.52, 0.012, 12, 120]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.4} roughness={0.3} />
        </mesh>
        <mesh rotation={[1.18, -0.42, -0.24]}>
          <torusGeometry args={[1.68, 0.008, 8, 120]} />
          <meshBasicMaterial color={coreColor} transparent opacity={0.72} />
        </mesh>
        <mesh position={[1.12, 0.74, 0.24]}>
          <sphereGeometry args={[0.12, 24, 24]} />
          <meshStandardMaterial color="#f1ede9" metalness={0.5} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  )
}

export default function Aqros3DBackground({ variant }: { variant: 'projects' | 'journal' }) {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [supportsWebGL, setSupportsWebGL] = useState<boolean | null>(null)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('webgl2') || canvas.getContext('webgl')
    setSupportsWebGL(Boolean(context))
  }, [])

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(query.matches)
    updatePreference()
    query.addEventListener('change', updatePreference)
    return () => query.removeEventListener('change', updatePreference)
  }, [])

  return (
    <div className="aqros-3d-scene" aria-hidden="true">
      {supportsWebGL === null ? null : supportsWebGL ? (
        <Canvas camera={{ position: [0, 0, 4.6], fov: 40 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
          <ambientLight intensity={1.4} />
          <directionalLight position={[2, 3, 4]} intensity={2.2} color="#fff8ed" />
          <pointLight position={[-3, -1, 2]} intensity={14} color={variant === 'projects' ? '#ff5700' : '#db9b7c'} />
          <Sculpture variant={variant} reducedMotion={reducedMotion} />
        </Canvas>
      ) : <div className={`aqros-3d-fallback ${variant}`} />}
    </div>
  )
}
