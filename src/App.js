import React, { Component } from 'react';
import './App.css';
import { 
  Container, 
  Row, 
  Col,
  Button
} from 'reactstrap';
import Slider from 'react-slick';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      itemArray: [
        {
          name: 'base',
          zIndex: 0,
          count : 5
        },
        {
          name: 'fringe',
          zIndex: 10,
          count: 21
        },
        {
          name: 'topa',
          zIndex: 5,
          count: 22
        },
        {
          name: 'topb',
          zIndex: 6,
          count: 11
        },
        {
          name: 'bottom',
          zIndex: 4,
          count: 20
        },
        {
          name: 'back',
          zIndex: -10,
          count: 24
        },
        {
          name: 'eyes',
          zIndex: 2,
          count: 15
        },
        {
          name: 'eyebrows',
          zIndex: 11,
          count: 9
        },
        {
          name: 'mouth',
          zIndex: 11,
          count: 17
        },
        {
          name: 'dress',
          zIndex: 5,
          count: 8
        },
        {
          name: 'shoes',
          zIndex: 1,
          count: 7
        },
        {
          name: 'hat',
          zIndex: 11,
          count: 19
        },
        {
          name: 'acc',
          zIndex: 9,
          count: 18
        },
        {
          name: 'ltph',
          zIndex: 11,
          count: 10
        },
        {
          name: 'beard',
          zIndex: 7,
          count: 3
        },
        {
          name: 'eyewear',
          zIndex: 9,
          count: 13
        },
        {
          name: 'emotion',
          zIndex: 1,
          count: 5
        },
        {
          name: 'other',
          zIndex: 12,
          count: 6
        },
        {
          name: 'cape',
          zIndex: -1,
          count: 6
        },
        {
          name: 'scarf',
          zIndex: 8,
          count: 11
        },
      ],
      acc: [],
      back: [],
      base: [],
      beard: [],
      bottom: [],
      cape: [],
      dress: [],
      emotion: [],
      eyebrows: [],
      eyes: [],
      eyewear: [],
      fringe: [],
      hat: [],
      ltph: [],
      mouth: [],
      other: [],
      scarf: [],
      shoes: [],
      topa: [],
      topb: [],
    };
  }

  componentDidMount() {
    this.initial();
  }

  initial() {
    this.generateArray(18, 'acc');
    this.generateArray(24, 'back');
    this.generateArray(5, 'base');
    this.generateArray(3, 'beard');
    this.generateArray(20, 'bottom');
    this.generateArray(6, 'cape');
    this.generateArray(8, 'dress');
    this.generateArray(5, 'emotion');
    this.generateArray(9, 'eyebrows');
    this.generateArray(15, 'eyes');
    this.generateArray(13, 'eyewear');
    this.generateArray(21, 'fringe');
    this.generateArray(19, 'hat');
    this.generateArray(10, 'ltph');
    this.generateArray(17, 'mouth');
    this.generateArray(6, 'other');
    this.generateArray(11, 'scarf');
    this.generateArray(7, 'shoes');
    this.generateArray(22, 'topa');
    this.generateArray(11, 'topb');
    this.createRandom()
  }

  clear() {
    this.state.itemArray.map((doll) => {
      if (doll.name === 'base') {
        this.setState({ [doll.name+'_selected'] : 'base1.png' });
      } else {
        this.setState({ [doll.name+'_selected'] : null });
      }
    });
  }

  createRandom() {
    this.state.itemArray.map((doll) => {
      this.setState({ [doll.name+'_selected'] : doll.name+this.getRandomInt(1, doll.count)+'.png' }) 
    });
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateArray(number, name) {
    let array = this.state[name];
    Array.from(Array(number).keys()).forEach((element) => { 
      array.push({ name: name+(element + 1)+'.png' }); 
      this.setState({ [name] : array }) 
    });
  }

  getStyle(name) {
    let item = this.state[name+'_selected'];
    if (typeof item === 'undefined' || item === null) {
      return '/assets/initial.png';   
    }

    return '/assets/'+name+'/'+item;
  }

  doll() {
    return (
      <div className="dollContainer">
        {this.state.itemArray.map((doll) =>

          <img 
            key={doll.name}
            src={this.getStyle(doll.name)} 
            alt={doll.name} 
            className="doll" 
            style={{ zIndex: doll.zIndex }}
          />       
        )}
      </div>
    );
  }

  render() {

    let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5
    };

    return (
      <div className="App">
        <div>
          <Container>
            <Row>
              <Col md={{ size: 4 }}>
                {this.doll()}
                <div className="mt-2">
                  <Row>
                    <Col md={{ size: 4 }}>
                      <Button color="success" block>SAVE</Button>
                    </Col>
                    <Col md={{ size: 4 }}>
                      <Button color="danger" block onClick={() => {this.clear()}}>CLEAR</Button>
                    </Col>
                    <Col md={{ size: 4 }}>
                    <Button color="info" block onClick={() => {this.createRandom()}}>RANDOM</Button>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={{ size: 8 }}>
                <div className="itemContainer mt-5">
                  {this.state.itemArray.map((doll) => {
                    let array = this.state[doll.name];
                    if (typeof array !== 'undefined') {
                      return (
                        <Slider
                          key={[doll.name]}
                          {...settings}>
                          {array.map((item) =>
                            <div 
                              key={item.name}>
                              <div 
                              style={{
                                width: '100%', 
                                backgroundColor: typeof this.state[doll.name+'_selected'] !==  'undefined' && this.state[doll.name+'_selected'] === item.name ? '#007bff' : '#EEEEEE' 
                              }}>
                                <img
                                  className="rounded mx-auto d-block" 
                                  src={'/assets/'+[doll.name]+'/'+item.name}
                                  style={{ width: 100 }}
                                  alt={item.name}
                                  onClick={() => {this.setState({ [doll.name+'_selected']: item.name })}}
                                />
                              </div>
                            </div>
                          )}
                        </Slider>
                      )
                    }
                    return null;
                  })}
                </div>
              </Col>
            </Row>
          </Container>
        </div>

      </div>
    );
  }
}

export default App;
