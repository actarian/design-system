import { Button, Card, Code, Container, Flex, Grid, Section, Text, Tooltip } from '@components';
import { ComponentProps } from '@components/types';
import { Search, Send } from '@icons';

type Props = {
  item: ContactHeadItem,
}

export type ContactHeadItem = {
  id: number;
  url: string;
  title: string;
  media: {
    type: 'image' | 'video';
    src: string;
  };
}

export type ContactHeadProps = ComponentProps<Props, HTMLDivElement>;

const ContactHead = ({ item }: ContactHeadProps) => {
  return (
    <Section>
      <Container.Fluid>
        <Grid.Row flex="1" columnGap="0">
          <Grid sm={6}>
            <Card.Content justifyContent="center" height="100%">
              <Text type="10" marginBottom="0.5rem" textTransform="uppercase">Contacts</Text>
              <Text type="1" marginBottom="2rem" fontWeight="700">Contacts</Text>
              <Text type="7" marginBottom="3rem">Functional, contemporary products with an atypical and unmistakable style, able to combine the highest cabinet-making tradition with the use of sophisticated production technologies.</Text>
              <Flex.Responsive>
                <Button type="alfa"><span>Search agents</span> <Search /></Button>
                <Button type="beta"><span>Contact Us</span> <Send /></Button>
                <Tooltip text={<>Perfect for working with a <Code>CMS</Code>.</>}>
                  <span>Top</span>
                </Tooltip>
                <Tooltip text={<><Text>Perfect</Text> for working with a CMS.</>} placement="bottom">
                  <span>Bottom</span>
                </Tooltip>
              </Flex.Responsive>
            </Card.Content>
          </Grid>
          <Grid sm={6}></Grid>
        </Grid.Row>
      </Container.Fluid>
    </Section>
  )
}

ContactHead.defaultProps = {
  item: {
    id: 1,
    url: '#new-arrivals',
    title: 'New Arrivals',
    media: {
      type: 'image',
      src: 'https://picsum.photos/960/960?u=31',
    },
  }
};

export default ContactHead;
