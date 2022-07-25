import { Button, Card, Container, Flex, Grid, Media, Section, Text } from '@components';
import { ComponentProps } from '@components/types';
import Link from 'next/link';
import BlogCard, { BlogItem } from './blog-card';

type Props = {
  items: BlogItem[],
}

export type BlogMoreProps = ComponentProps<Props, HTMLDivElement>;

const BlogMore = ({ items }: BlogMoreProps) => {
  return (
    <Section padding="3rem 0">
      <Container>
        <Text size="2" fontWeight="700" marginBottom="3rem">More Stories</Text>
        <Grid.Row rowGap='3rem'>
          {items.map((item, i) => (
            <Grid sm={6} key={i}>
              <BlogCard item={item}></BlogCard>
            </Grid>
          ))}
        </Grid.Row>
        {false &&
          <Grid.Row rowGap='3rem'>
            <Grid sm={6}>
              <Card>
                <Media aspectRatio={4 / 3} aspectRatioMd={5 / 3} marginBottom="1rem">
                  <img src={'https://picsum.photos/640/480?u=2'} />
                </Media>
                <Card.Content>
                  <Link href="#we-choose-to-go-to-the-moon">
                    <Button variant="gamma" as="a" marginBottom="1rem">
                      <Text size="5">We choose to go to the moon.</Text>
                    </Button>
                  </Link>
                  <Text size="8" marginBottom="1rem">March 8, 2020</Text>
                  <Text size="8">We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</Text>
                </Card.Content>
                <Card.Footer marginTop="1rem">
                  <Flex.Row>
                    <Media width="3rem" height="3rem" circle>
                      <img src="https://i.pravatar.cc/128?u=3" />
                    </Media>
                    <Text size="8" fontWeight="700">Joe Haddad</Text>
                  </Flex.Row>
                </Card.Footer>
              </Card>
            </Grid>
            <Grid sm={6}>
              <Card>
                <Media aspectRatio={4 / 3} aspectRatioMd={5 / 3} marginBottom="1rem">
                  <img src={'https://picsum.photos/640/480?u=4'} />
                </Media>
                <Card.Content>
                  <Link href="#the-view-of-the-earth-from-the-moon">
                    <Button variant="gamma" as="a" marginBottom="1rem">
                      <Text size="5">The earth from the moon.</Text>
                    </Button>
                  </Link>
                  <Text size="8" marginBottom="1rem">March 8, 2020</Text>
                  <Text size="8">A small disk, 240,000 mniles away. It was hard to think that that little thing held so many problems, so many frustrations. But the samw wayward stranger would certainly know instinctively that if the earth were inhabited, then the destinies of all who lived on it must inevitably be interwoven and joined. We are one hunk of ground, water, air, clouds, floating around in space. From out there it really is 'one world'.</Text>
                </Card.Content>
                <Card.Footer marginTop="1rem">
                  <Flex.Row>
                    <Media width="3rem" height="3rem" circle>
                      <img src="https://i.pravatar.cc/128?u=5" />
                    </Media>
                    <Text size="8" fontWeight="700">JJ Kasper</Text>
                  </Flex.Row>
                </Card.Footer>
              </Card>
            </Grid>
          </Grid.Row>
        }
      </Container>
    </Section>
  )
}

BlogMore.defaultProps = {
  items: [{
    id: 1,
    href: '#we-choose-to-go-to-the-moon',
    title: 'We choose to go to the moon.',
    abstract: 'We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.',
    date: '2022-06-08T07:44:24.402Z',
    media: {
      type: 'image',
      src: 'https://picsum.photos/640/480?u=2',
    },
    author: {
      fullName: 'Joe Haddad',
      media: {
        type: 'image',
        src: 'https://i.pravatar.cc/128?u=4',
      }
    },
  }, {
    id: 2,
    href: '#the-view-of-the-earth-from-the-moon',
    title: 'The earth from the moon.',
    abstract: 'A small disk, 240,000 mniles away. It was hard to think that that little thing held so many problems, so many frustrations. But the samw wayward stranger would certainly know instinctively that if the earth were inhabited, then the destinies of all who lived on it must inevitably be interwoven and joined. We are one hunk of ground, water, air, clouds, floating around in space. From out there it really is \'one world\'.',
    date: '2022-05-21T07:44:24.402Z',
    media: {
      type: 'image',
      src: 'https://picsum.photos/640/480?u=4',
    },
    author: {
      fullName: 'JJ Kasper',
      media: {
        type: 'image',
        src: 'https://i.pravatar.cc/128?u=5',
      }
    },
  }]
};

export default BlogMore;
