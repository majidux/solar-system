import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import Moon from '../../component/Moon';
import Earth from 'src/component/Earth';
import Stars from '../../component/Stars';
import Sound from '../../component/Sound';

const Solar = () => {
  return (
    <>
      <Sound />
      <Canvas colorManagement gl={{ antialias: false }}>
        <Suspense fallback={null}>
          <Earth />
          <Moon />
        </Suspense>
        <Stars
          radius={500} // Radius of the inner sphere (default=100)
          depth={0} // Depth of area where stars should fit (default=50)
          count={5000} // Amount of stars (default=5000)
          factor={10} // Size factor (default=4)
          saturation={0.1} // Saturation 0-1 (default=0)
          fade
        />
      </Canvas>
    </>
  );
};

export default Solar;
