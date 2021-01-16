import { Canvas } from 'react-three-fiber';
import { OrbitControls } from 'drei';
import mehdi from '../../assets/mehdi.jpg';
import Earth from '../Earth';

const Sun = () => {
  return (
    <>
      <Canvas colorManagement>
        <mesh>
          {[...Array(6)].map((_, index) => (
            <meshMatcapMaterial
              attachArray='material'
              key={index}
              color='yellow'
            />
          ))}
          <sphereGeometry attach='geometry' args={[1, 1000, 1000]} />
        </mesh>
        <OrbitControls
          screenSpacePanning
          // autoRotate
          autoRotateSpeed={5}
          enableDamping={true}
          dampingFactor={1.5}
          enableKeys={true}
          enableZoom={true}
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
