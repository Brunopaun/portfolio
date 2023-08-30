'use client'

import { Canvas, useLoader } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Model(){
  const result = useLoader(GLTFLoader, './models/snow.glb')
 
  return <primitive object={result.scene} position={[0,1,0]} dispose={null}/>
}

export default function ReactThreeFiberComponent() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas> 
  )
}