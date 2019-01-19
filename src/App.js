import React, { Component } from 'react';
import './App.css';
import { 
  Container, 
  Row, 
  Col,
  Button
} from 'reactstrap';
import Slider from 'react-slick';
import dollManifest from './doll-manifest.json';

let settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      itemArray: dollManifest,
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
    this.state.itemArray.map((doll) => {
      return this.generateArray(doll.count, doll.name);
    });
    this.createRandom()
  }

  clear() {
    this.state.itemArray.map((doll) => {
      if (doll.name === 'base') {
        return this.setState({ [doll.name+'_selected'] : 'base1.png' });
      } else {
        return this.setState({ [doll.name+'_selected'] : null });
      }
    });
  }

  createRandom() {
    this.state.itemArray.map((doll) => {
      return this.setState({ [doll.name+'_selected'] : doll.name+this.getRandomInt(1, doll.count)+'.png' }) 
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
