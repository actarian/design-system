import { Card, Flex, Media, Text } from '@components';
import { ComponentCssResponsiveProps } from '@components/types';
import Link from 'next/link';

type Props = {
  item: BlogItem
}

export type BlogItem = {
  id: number;
  url: string;
  title: string;
  abstract: string;
  date: string | Date;
  media: {
    type: 'image' | 'video';
    src: string;
  };
  author: {
    fullName: string;
    media: {
      type: 'image';
      src: string;
    };
  };
}

export type BlogCardProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const BlogCard = ({ item, ...props }: BlogCardProps) => {
  const getDate = (value: Date | string): string => {
    const date = value instanceof Date ? value : new Date(value);
    const options: Intl.DateTimeFormatOptions = {
      // weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const formattedValue = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedValue;
  };
  return (
    <Link href={item.url}>
      <Card {...props} hoverable>
        <Media aspectRatio={4 / 3} aspectRatioMd={5 / 3} borderRadius="0.4rem" marginBottom="1rem">
          <img src={item.media.src} />
        </Media>
        <Card.Content>
          <Text type="5">{item.title}</Text>
          <Text type="8" marginBottom="1rem">{getDate(item.date)}</Text>
          <Text type="8">{item.abstract}</Text>
        </Card.Content>
        <Card.Footer marginTop="1rem">
          <Flex.Row>
            <Media width="3rem" height="3rem" circle>
              <img src={item.author.media.src} />
            </Media>
            <Text type="8" fontWeight="700">{item.author.fullName}</Text>
          </Flex.Row>
        </Card.Footer>
      </Card>
    </Link>
  )
}

BlogCard.defaultProps = {
  item: {
    id: 1,
    url: '#we-choose-to-go-to-the-moon',
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
    }
  }
};

export default BlogCard;
