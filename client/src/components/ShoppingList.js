import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import { Container, Button, ListGroup, ListGroupItem } from 'reactstrap';

import '../css/ShoppingList.css'
import { getList } from '../action/creators'

const ShoppingList = ()=>{

    const [ items, setItems] = useState([])

    useEffect(() => {
        getList();
    }, [])

    return (
        <Container>
            <Button
                color='dark'
                style={{marginBottom: '2rem'}}
                onClick={()=>{
                    const name = prompt('Enter name');
                    if(name){
                        setItems([
                            ...items,
                            {
                                id: uuidv4(),
                                name //value of prompt
                            }
                        ])
                    }
                }}>
                Add Item
            </Button>   

            <ListGroup>
                <TransitionGroup>
                        {
                            items.map(({id, name})=>(
                                <CSSTransition key={id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button
                                            className="shoppingList__removeBtn"
                                            color="danger"
                                            size="sm"
                                            onClick={()=>{
                                                setItems(items.filter( (item) => ( item.id !== id )))
                                            }}>
                                            &times;
                                        </Button>
                                        {name}
                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    )

}

export default ShoppingList;