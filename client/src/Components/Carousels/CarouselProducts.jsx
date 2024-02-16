import { useRef } from "react";
import Slider from "react-slick";

import banner from "../../images/banner-shape.png";
import "../../css/carouselproducts.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faPercent } from "@fortawesome/free-solid-svg-icons";

const Highlight = (props) => {
	const { data } = props;
	let sliderRef = useRef(null);
	function AutoPlayMethods() {
		sliderRef.slickPlay();
	}

	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3600,
	};

	return (
		<>
			<div className='highlight' onLoad={AutoPlayMethods}>
				<img src={banner} alt='' id='bgimg' />

				<Slider ref={(slider) => (sliderRef = slider)} {...settings}>
					{data.map((d) => (
						<div className='slide'>
							<div className='product' key={d.key}>
								<img src={d.image} alt='' id='proimg' />
								<div id='description'>
									<h1>{d.heading}</h1>
									<p>{d.description}</p>
									<div className='banner-btn'>
										<button id='shop'>
											<FontAwesomeIcon
												icon={faBasketShopping}
											/>
											Shop Now
										</button>

										<button id='offer'>
											<FontAwesomeIcon icon={faPercent} />
											Get Offer
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</>
	);
};

export default Highlight;
