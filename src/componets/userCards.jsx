function UserCards (){



    return(
        <>
        <Card style={{ width: "18rem", backgroundColor: "" }}>
            

          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{state}</Card.Text>
            <Card.Text>{code}</Card.Text>
            <Card.Text>{popularPlace}</Card.Text>
            <Card.Text>{population}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
};

export default UserCards;