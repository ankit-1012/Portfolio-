
import Slider from 'react-slick';
import PropTypes from 'prop-types';


const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`project-${index}`}/>
        </div>
      ))}
    </Slider>
  );
};
ImageSlider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  
export default ImageSlider;
