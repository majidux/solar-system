import { OrbitControls } from 'drei';

const Sky = () => {
  return (
    <>
      <mesh>
        {[...Array(6)].map((_, index) => (
          <meshLambertMaterial
            attachArray='material'
            attach='material'
            key={index}
            color='lightgreen'
            fog
            clipShadows
          />
        ))}
        <sphereGeometry attach='geometry' args={[1, 1000, 1000]} />
      </mesh>
      <OrbitControls
        screenSpacePanning
        enableDamping
        dampingFactor={1.5}
        enableKeys
        enableZoom
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <fog attach='fog' args={['#070710', 100, 700]} />
    </>
  );
};

export default Sky;
