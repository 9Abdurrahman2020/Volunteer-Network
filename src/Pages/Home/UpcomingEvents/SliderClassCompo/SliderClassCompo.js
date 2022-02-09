import React, { Component } from 'react';
import Slider from 'react-slick';
import SingleEventCard from '../../SingleEventCard/SingleEventCard';

export default class SliderClassCompo  extends Component  {
    
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }

    render(){

        const settings = {
            autoplay: true,
            dots: false,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            pauseOnHover: false,
            slidesToScroll: 1
          };

        return (
            <div>
                    <div className="my-5">
                        <i onClick={this.previous} class="fas fa-long-arrow-alt-left left-arrow me-4"></i>
                        <i onClick={this.next} class="fas fa-long-arrow-alt-right left-arrow"></i>
                    </div>
                    
                    <Slider ref={c => (this.slider = c)} {...settings}>
                        {
                            this.props.event.map( p => <SingleEventCard data={p}/>)
                        }
                    </Slider>
            </div>
        );
    }

};
