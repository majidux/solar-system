import { Canvas } from 'react-three-fiber';
import { OrbitControls } from 'drei';
import Earth from '../Earth';
import Stars from '../Stars';

const Sun = () => {
  return (
    <>
      <Canvas colorManagement>
        <Stars />
        <mesh>
          {[...Array(6)].map((_, index) => (
            <meshMatcapMaterial
              attachArray='material'
              key={index}
              color='#e45'
            />
          ))}
          <sphereGeometry attach='geometry' args={[1, 1000, 1000]} />
        </mesh>
        <OrbitControls
          screenSpacePanning
          autoRotate
          autoRotateSpeed={2}
          enableDamping
          dampingFactor={1.5}
          enableKeys
          enableZoom
          // keys={
          //   {
          //     LEFT: 37,
          //     UP: 38,
          //     RIGHT: 39,
          //     BOTTOM: 40,
          //   } as const
          // }
        />
        <Earth />
      </Canvas>
    </>
  );
};

export default Sun;
