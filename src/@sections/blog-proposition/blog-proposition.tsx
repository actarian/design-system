import { Container, Flex, Grid, Media, Section, Text } from '@components';
import { ComponentProps } from '@components/types';

type Props = {
}

export type BlogPropositionProps = ComponentProps<Props, HTMLDivElement>;

const BlogProposition = (props: BlogPropositionProps) => {
  return (
    <Section padding="3rem 0">
      <Container>
        <Grid.Row>
          <Grid md={6}>
            <Text type="4" marginBottom="1rem">There is no strife, no prejudice, no national conflict in outer space as yet.</Text>
            <Text type="8" marginBottom="1rem">March 8, 2020</Text>
          </Grid>
          <Grid md={6}>
            <Text type="8" maxWidth="60ch">Its hazards are hostile to us all. Its conquest deserves the best of all mankind, and its opportunity for peaceful cooperation many never come again. But why, some say, the moon? Why choose this as our goal? And they may well ask why climb the highest mountain?</Text>
            <Flex.Row marginTop="1rem">
              <Media width="3rem" height="3rem" circle>
                <img src="https://i.pravatar.cc/128?u=1" />
              </Media>
              <Text type="8" fontWeight="700">Tim Neutkens</Text>
            </Flex.Row>
          </Grid>
        </Grid.Row>
      </Container>
    </Section>
  )
}

export default BlogProposition;
