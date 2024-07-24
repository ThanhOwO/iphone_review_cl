import { Html, OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense, useMemo } from 'react'
import Lights from './Lights'
import Model from './Model/iPhone'
import * as THREE from 'three'
import Loader from './Model/Loader'

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  // Memoize the target vector to avoid re-creating it on every render
  const targetVector = useMemo(() => new THREE.Vector3(0, 0, 0), []);

  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        rotateSpeed={0.4}
        target={targetVector}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group ref={groupRef} name={index === 1 ? 'small' : 'large'} position={[0, 0, 0]}>
        <Suspense fallback={<Loader/>}>
          <Model
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  )
}

export default ModelView
