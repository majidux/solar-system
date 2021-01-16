import { Scene, Matrix4, TextureLoader, ImageLoader } from 'three';
import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree, useGraph } from 'react-three-fiber';
import { OrbitControls, OrthographicCamera, useCamera, Plane } from 'drei';

const Earth = (): any => {
  const { gl, scene, camera, size, clock } = useThree();
  const virtualScene = useMemo(() => new Scene(), []);
  const virtualCam: any = useRef();
  const ref: any = useRef();
  const [hover, set] = useState<any>(null);
  const matrix = new Matrix4();

  useFrame(() => {
    matrix.getInverse(camera.matrix);
    ref.current.quaternion.setFromRotationMatrix(matrix);
    gl.autoClear = true;
    gl.render(scene, camera);
    gl.autoClear = false;
    gl.clearDepth();
    gl.render(virtualScene, virtualCam.current);
  }, 1);

  return (
    <>
      <OrthographicCamera
        ref={virtualCam}
        makeDefault={false}
        position={[0, 0, 100]}
      />
      <mesh
        ref={ref}
        raycast={useCamera(virtualCam)}
        position={[size.width / 2 - 80, size.height / 2 - 80, 0]}
        onPointerOut={(e) => set(null)}
        onPointerMove={(e: any) => set(Math.floor(e.faceIndex / 2))}
      >
        {[...Array(6)].map((_, index) => (
          <meshLambertMaterial
            attachArray='material'
            key={index}
            color={hover === index ? 'hotpink' : 'white'}
          />
        ))}
        <sphereGeometry attach='geometry' args={[60, 60, 60]} />
      </mesh>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
    </>
  );
};

export default Earth;
