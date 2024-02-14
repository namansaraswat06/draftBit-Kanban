import React, { useState } from 'react';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';
import { Text } from 'react-native';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Define and export your components as named exports here.
export const MyExampleComponent = () => {
  const [items, setItems] = useState([
    { id: '1', content: 'Card 1' },
    { id: '2', content: 'Card 2' },
    { id: '3', content: 'Card 3' },
  ]);

  const handleDragEnd = result => {
    if (!result.destination) return; // dropped outside the list
    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setItems(newItems);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous"
      />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {provided => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card style={{ width: '18rem' }}>
                        <Card.Img
                          variant="top"
                          src="https://cdn.pixabay.com/photo/2016/11/20/09/00/logs-1842267_960_720.jpg"
                        />
                        <Card.Body>
                          <Card.Title>{item.content}</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};
