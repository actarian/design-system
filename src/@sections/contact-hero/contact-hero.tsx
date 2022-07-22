import { Button, Card, Container, Flex, Grid, NavLink, Section, Text, Tooltip } from '@components';
import { ComponentProps } from '@components/types';
import { Search, Send } from '@icons';
import { animate } from 'framer-motion';

type Props = {
  item: ContactHeroItem,
}

export type ContactHeroItem = {
  id: number;
  href: string;
  title: string;
  media: {
    type: 'image' | 'video';
    src: string;
  };
}

export type ContactHeroProps = ComponentProps<Props, HTMLDivElement>;

const ContactHero = ({ item }: ContactHeroProps) => {

  // The handler to smoothly scroll the element into view
  const scrollToHash = (event: React.MouseEvent<HTMLElement>) => {
    if (typeof window !== 'undefined') {
      const href = event.currentTarget.getAttribute('href');
      if (href?.indexOf('#')) {
        const hashId = `#${href.split('#')[1]}`;
        // console.log('NavLink.onClick', event.currentTarget.getAttribute('href'), hashId);
        // Get the hash from the url
        // const hashId = window.location.hash;
        if (hashId) {
          // Use the hash to find the first element with that id
          const element = document.querySelector(hashId);
          // console.log('NavLink.element', element);
          if (element) {
            const rect = element.getBoundingClientRect();
            // console.log(rect);
            const from = window.scrollY;
            const to = window.scrollY + (rect.top - window.scrollY);
            // const to = window.scrollY + ((rect.top - window.innerHeight * 0.25) - window.scrollY);
            const duration = Math.abs((to - from) / 2000);
            // console.log(from, to, duration);
            animate(from, to, { duration, onUpdate: v => window.scrollTo(0, v) });
            /*
            console.log(window.scrollY);
            setTimeout(() => {
              console.log(window.scrollY);
            }, 100);
            */
            /*
            // Smooth scroll to that elment
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'nearest',
            });
            */
          }
        }
      }
    }
  }

  return (
    <Section>
      <Container.Fluid>
        <Grid.Row flex="1" columnGap="0">
          <Grid sm={6}>
            <Card.Content justifyContent="center" height="100%">
              <Text type="10" marginBottom="0.5rem" textTransform="uppercase">Contacts</Text>
              <Text type="1" marginBottom="2rem" fontWeight="700">Contacts</Text>
              <Text type="7" marginBottom="3rem">
                <span>Functional, contemporary products with an atypical and </span>
                <Tooltip text={<>Perfect for working with a CMS.</>}>
                  <u>unmistakable</u>
                </Tooltip> <span>style, able to combine the highest cabinet-making
                  tradition with the use of </span>
                <Tooltip text={<>Perfect for working with a CMS.</>} placement="bottom">
                  <u>sophisticated</u>
                </Tooltip> <span>production technologies.</span>
              </Text>
              <Flex.Responsive>
                <Button type="alfa"><span>Search agents</span> <Search /></Button>
                <NavLink href="#contact-request" passHref>
                  <Button type="beta" onClick={scrollToHash}><span>Contact Us</span> <Send /></Button>
                </NavLink>
              </Flex.Responsive>
            </Card.Content>
          </Grid>
          <Grid sm={6}></Grid>
        </Grid.Row>
      </Container.Fluid>
    </Section>
  )
}

ContactHero.defaultProps = {
  item: {
    id: 1,
    href: '#new-arrivals',
    title: 'New Arrivals',
    media: {
      type: 'image',
      src: 'https://picsum.photos/960/960?u=31',
    },
  }
};

export default ContactHero;
