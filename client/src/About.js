import React from 'react'
import { Card, CardGroup, Icon, Image, Container, Header } from 'semantic-ui-react'

const CardExampleCard = () => (
<>
    <Container text>

    <Header as='h2'>JawaHut</Header>
    <Header as='h4'>Your galactic middle man.</Header>
    <p>
    Here at JawaHut we are here to help you. You can purchase droids or find your new career from across the galaxy.
    <br></br> We will find only the finest droids to purchase, 
    we would never sell you a peice of crap r2 unit with a bad motivator.
    <br></br>
    You can also jump into an exciting work environment.
     Have you longed to serve your emperor with you expert marksmanship, we can help!
     

     
    </p>
  </Container>
  <br></br>

  <Header as='h2'>Meet the Technomancers</Header>

    <CardGroup>
  <Card>
    <Image src='' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Derek</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 1998</span>
      </Card.Meta>
      <Card.Description>
        Derek is a boy with a cat and alledgedly has a girlfriend.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>

    </Card.Content>
  </Card>


<Card>
<Image src='' wrapped ui={false} />
<Card.Content>
  <Card.Header>Adam</Card.Header>
  <Card.Meta>
    <span className='date'>Joined in 1994</span>
  </Card.Meta>
  <Card.Description>
    Adam is a boy with a terrible microphone.
  </Card.Description>
</Card.Content>
<Card.Content extra>

</Card.Content>
</Card>


<Card>
<Image src='' wrapped ui={false} />
<Card.Content>
  <Card.Header>Jedediah</Card.Header>
  <Card.Meta>
    <span className='date'>Joined in 1994</span>
  </Card.Meta>
  <Card.Description>
    Jedediah is a boy with some pretty sick hair.
  </Card.Description>
</Card.Content>
<Card.Content extra>

</Card.Content>
</Card>


<Card>
<Image src='' wrapped ui={false} />
<Card.Content>
  <Card.Header>Callie</Card.Header>
  <Card.Meta>
    <span className='date'>Joined in 2000</span>
  </Card.Meta>
  <Card.Description>
    Callie is a girl who will be a spinster with many cats.
  </Card.Description>
</Card.Content>
<Card.Content extra>

</Card.Content>
</Card>
</CardGroup>
</>
)

export default CardExampleCard