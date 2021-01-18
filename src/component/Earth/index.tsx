import { OrbitControls } from 'drei';
import { TextureLoader } from 'three';
import { useLoader } from 'react-three-fiber';
import earthPng from '../../assets/earth.jpg';

const Earth = () => {
  console.log('Render');
  const earth = useLoader(TextureLoader, earthPng);
  return (
    <>
      <mesh>
        {/* {[...Array(6)].map((_, index) => ( */}
        <meshStandardMaterial
          attachArray='material'
          attach='material'
          // key={index}
          color='lightgreen'
          map={earth}
          fog
          clipShadows
        />
        {/* ))} */}
        <sphereGeometry attach='geometry' args={[1, 1000, 1000]} />
      </mesh>
      <OrbitControls
        autoRotate
        autoRotateSpeed={1}
        screenSpacePanning
        enableDamping
        dampingFactor={1.5}
        enableKeys
        enableZoom
      />
      <ambientLight intensity={0.5} />
      {/*<pointLight position={[10, 10, 10]} intensity={0.5} />
      <fog attach='fog' args={['#070710', 100, 700]} /> */}
    </>
  );
};

export default Earth;
