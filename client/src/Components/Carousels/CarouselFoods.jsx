import Slider from "react-slick";
import { useRef, useState, useEffect } from "react";
import "../../css/carouselfoods.css";

const Foods = (props) => {
	let sliderRef = useRef(null);
	const [slideCount, setSlideCount] = useState(5);
	const [slideScroll, setSlideScroll] = useState(2);

	useEffect(() => {
		const handleResize = () => {
			const orientation = window.orientation;

			let newSlidesToShow, newSlidesToScroll;
			if (orientation === 0 || orientation === 180) {
				// Portrait mode
				newSlidesToShow = 2;
				newSlidesToScroll = 1;
			} else {
				// Landscape mode
				newSlidesToShow = 5;
				newSlidesToScroll = 2;
			}
			setSlideCount(newSlidesToShow);
			setSlideScroll(newSlidesToScroll);
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => {
			window.addEventListener("resize", handleResize);
		};
	}, []);

	const { foodData } = props;
	function AutoPlayMethods() {
		sliderRef.slickPlay();
	}

	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: slideCount,
		slidesToScroll: slideScroll,
		autoplay: true,
		autoplaySpeed: 3600,
	};

	return (
		<div className='suggest-food' onLoad={AutoPlayMethods}>
			<div className='foods-list'>
				<Slider ref={(slider) => (sliderRef = slider)} {...settings}>
					{foodData.map((d) => (
						<div className='food' key={d.key}>
							<div className='food-img'>
								<img src={d.foodImg} alt={d.category} />
							</div>
							<div className='food-details'>
								<h3>{d.category}</h3>
								<p>{d.quantity}</p>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Foods;
