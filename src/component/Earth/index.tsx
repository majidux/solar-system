import { Scene, Matrix4 } from 'three';
import { useRef, useMemo } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import { OrthographicCamera, useCamera, OrbitControls } from 'drei';

const Earth = (): any => {
  const { gl, scene, camera, size } = useThree();
  const virtualScene = useMemo(() => new Scene(), []);
  const virtualCam: any = useRef();
  const ref: any = useRef();
  const matrix = new Matrix4();

  useFrame(() => {
    ref.current.quaternion.setFromRotationMatrix(matrix);
    gl.autoClear = true;
    gl.render(scene, camera);
    gl.autoClear = false;
    gl.clearDepth();
    gl.render(virtualScene, virtualCam.current);
  }, 1);

  const width = size.width / 2 - 80;
  const height = size.height / 2 - 80;

  return (
    <>
      <OrbitControls
        screenSpacePanning
        autoRotate
        autoRotateSpeed={5}
        enableDamping
        dampingFactor={1.5}
        enableKeys
        enableZoom
      />
      <OrthographicCamera
        ref={virtualCam}
        makeDefault={false}
        position={[0, 0, 100]}
      />
      <mesh
        ref={ref}
        raycast={useCamera(virtualCam)}
        position={[width, height, 0]}
      >
        {[...Array(6)].map((_, index) => (
          <meshLambertMaterial
            attachArray='material'
            attach='material'
            key={index}
            color='white'
            fog
            clipShadows
          />
        ))}
        <sphereGeometry attach='geometry' args={[40, 20, 20]} />
      </mesh>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
    </>
  );
};

export default Earth;
