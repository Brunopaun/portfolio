'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import  { Mesh } from 'three'


function Cube(){
  const meshRef = useRef<Mesh>(null)
  
  useFrame(() => {
  if(!meshRef.current) return

    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y +=0.01

  })

  return (
    <mesh
      ref={meshRef}
    >
      <boxGeometry/>
      <meshStandardMaterial color="blue"/>
    </mesh> 
  )
}




export default function ReactThreeFiberComponent() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]}/>
      <Cube/>
    </Canvas>
  )
}