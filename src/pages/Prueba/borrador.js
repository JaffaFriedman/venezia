{ x.map(p) => (
    <Card style={{ width: '18rem' }}>
        <Card.Img    variant="dark" src={p.url}  height={'200'}  />
        <Card.Body   >
            <Card.Title>{p.descripcion}</Card.Title>
            <Card.Text>
            {p.precio}
            </Card.Text>
        </Card.Body>
    </Card>
)
}