import {Suspense, useEffect, useState}from 'react';
import {Canvas} from '@react-three/fiber';
import { meshBounds, OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  // const computer = useGLTF('./desktop_pc/scene.gltf')
  const computer = useGLTF('./try/scene.gltf')

  return (
    <mesh> 
      {/* mesh instead of div for 3d components  */}
      {/* without this line we can't see the object  */}
      <hemisphereLight intensity={0.50} groundColor="black" />
      {/* this to create the light  */}
      <pointLight intensity={8}/>
      <spotLight 
        position={[-20, 50 , 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* this the component that we can pass to , the object */}
      <primitive object={computer.scene}
       scale={isMobile ?  0.5:0.75}
       position={isMobile ? [0 , -2, 0 ] : [0, -2.5 , -1.5]}
       rotation = {[-0.01,-0.9,-0.1]}/>
    </mesh>
  )
}

 const ComputersCanvas = () => {
  const [isMobile , setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width : 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    }

    mediaQuery.addEventListener('change',
      handleMediaQueryChange);
    
      return () => {
        mediaQuery.removeEventListener('change',
          handleMediaQueryChange
        );
      }
  },[])

  return (
    <Canvas
    frameloop="demand"
    shadows
    camera={{ position : [20, 3, 5], fov : 25 }}
    gl={{ preserveDrawingBuffer : true }}
    >
      <Suspense fallback={<CanvasLoader />}>
       <OrbitControls 
       enableZoom={false}
       maxPolarAngle={Math.PI / 2}
       minPolarAngle={Math.PI / 2}/>
       <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
 }
export default ComputersCanvas;