import { Container, Section, Text } from '@components';
import { ComponentProps } from '@components/types';

type Props = {
  item: StoreLocatorHeadItem,
}

export type StoreLocatorHeadItem = {
  category: string;
  title: string;
  abstract: string;
}

export type StoreLocatorHeadProps = ComponentProps<Props, HTMLDivElement>;

const StoreLocatorHead = ({ item }: StoreLocatorHeadProps) => {
  return (
    <Section>
      <Container textAlign="center">
        <Text size="10" marginBottom="0.5rem" textTransform="uppercase">{item.category}</Text>
        <Text size="2" marginBottom="2rem" fontWeight="700">{item.title}</Text>
        <Text size="8" margin="0 auto 3rem auto" maxWidth="70ch" dangerouslySetInnerHTML={{ __html: item.abstract }}></Text>
      </Container>
    </Section>
  )
}

StoreLocatorHead.defaultProps = {
  item: {
    category: 'Dealers',
    title: 'Search for dealers',
    abstract: `<p>Hexagon is present through a network of authorised points of sale and distributors.</p>
    <p>We therefore advise consumers to purchase only from these points of sale, which will be able to guarantee the originality and quality of the products as well as excellent design, sales and after-sales service.</p>`,
  }
};

export default StoreLocatorHead;
