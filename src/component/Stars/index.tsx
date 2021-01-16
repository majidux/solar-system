import { Stars as AllStars, TrackballControls } from 'drei';

const Stars = (props: any) => {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <AllStars {...props} />
      <TrackballControls />
    </>
  );
};

export default Stars;
