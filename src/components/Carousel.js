import React from 'react';

import Card from '../components/Card';

import hallmark from '../assets/images/hallmark.png';
import givemore from '../assets/images/givemore.png';
import ecomicasa from '../assets/images/ecomicasa.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Hallmark Construction',
                    subTitle: 'A constuction company based in Rosedale, NY',
                    imgSrc: hallmark,
                    link: '',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Give More',
                    subTitle: 'A non profit organization',
                    imgSrc: givemore,
                    link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Eco Mi Casa',
                    subTitle: 'An Environmental Startup',
                    imgSrc: ecomicasa,
                    link: '',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;