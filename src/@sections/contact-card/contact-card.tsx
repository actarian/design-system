import { Box, Button, Card, Nav, Text } from '@components';
import { CardProps } from '@components/card/card';
import { ComponentProps } from '@components/types';
import { Phone } from '@icons';
import Link from 'next/link';

type Props = {
  item: ContactCardItem,
} & CardProps;

export type ContactCardItem = {
  id: number;
  name: string;
  address: string;
  phoneNumber?: string;
  faxNumber?: string;
  contactEmail?: string;
  pressEmail?: string;
  note?: string;
  evidence?: boolean;
  href?: string;
}

export type ContactCardProps = ComponentProps<Props, HTMLDivElement>;

const ContactCard = ({ item, ...props }: ContactCardProps) => {
  const getTelLink = (value: string): string => {
    return `tel:${value.replace(/D/g, '')}`;
  }
  const getFaxLink = (value: string): string => {
    return `fax:${value.replace(/D/g, '')}`;
  }
  const getMailToLink = (value: string): string => {
    return `mailto:${value.trim()}`;
  }
  return (
    <Card type="beta" {...props}>
      <Card.Content padding="1rem" flex="1" justifyContent="space-between">
        <Text fontWeight="700" marginBottom="0.5rem">{item.name}</Text>
        <Text dangerouslySetInnerHTML={{ __html: item.address }}></Text>
        <Nav.Col gap="0" paddingTop="2rem">
          {item.phoneNumber && <>
            <Link href={getTelLink(item.phoneNumber)}>
              <Button type="gamma">
                <Phone /> <span>{item.phoneNumber}</span>
              </Button>
            </Link>
          </>}
          {item.faxNumber && <>
            <Link href={getFaxLink(item.faxNumber)}>
              <Button type="gamma">
                <Phone /> <span>{item.faxNumber}</span>
              </Button>
            </Link>
          </>}
          {item.contactEmail && <>
            <Link href={getMailToLink(item.contactEmail)}>
              <Button type="gamma">
                <Phone /> <span>{item.contactEmail}</span>
              </Button>
            </Link>
          </>}
        </Nav.Col>
        {item.pressEmail && <>
          <Box paddingTop="1rem">
            <Text type="10" fontWeight="700">Press requests</Text>
            <Link href={getMailToLink(item.pressEmail)}>
              <Button type="gamma">
                <Phone /> <span>{item.pressEmail}</span>
              </Button>
            </Link>
          </Box>
        </>}
        {item.note && <>
          <Box paddingTop="1rem">
            <Text type="10" fontWeight="700">{item.note}</Text>
          </Box>
        </>}
      </Card.Content>
    </Card>
  )
}

ContactCard.defaultProps = {
  item: {
    id: 1,
    name: 'Hexagon Headquarters',
    address: 'I 20821 Meda (MB) Via Manzoni 20',
    phoneNumber: '+39.0362.75275',
    faxNumber: '+39.0362.75575',
    contactEmail: 'info@hexagon.eu',
    pressEmail: 'marketing@hexagon.eu',
    note: 'Only by appointment',
    evidence: false,
  }
};

export default ContactCard;
