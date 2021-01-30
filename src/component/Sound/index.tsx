import mp3 from '../../assets/sound.mp3';

const Sound = () => {
  return (
    <div className='position_absolute z-index'>
      <audio src={mp3} loop autoPlay />
    </div>
  );
};

export default Sound;
