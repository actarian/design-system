import { Card, Container, Flex, Grid, Media, Text } from '@components';
import { ComponentProps } from '@components/types';
import { Input } from '@forms';
import { Icons } from '@icons/icons';
import { createElement, Suspense, useMemo, useState } from 'react';

type Props = {
}

export type ColorsProps = ComponentProps<Props, HTMLDivElement>;

const Colors = (props: ColorsProps) => {
  const iconsList = useMemo(() => {
    return Object.keys(Icons).map((key) => {
      return { key, component: Icons[key] };
    });
  }, []);
  const [visibleIcons, setVisibleIcons] = useState(iconsList);
  function onSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value.toLowerCase();
    // console.log(query);
    const icons = iconsList.filter(x => x.key.toLowerCase().indexOf(query) !== -1);
    setVisibleIcons(icons);
  }
  return (
    <Container>
      <Grid.Row padding="32px 0">
        <Grid>
          <Text type="4" fontWeight="700" marginBottom="2rem">Search Icon</Text>
          <Input name="search" placeholder="start typing..." onChange={onSearch} marginBottom="2rem" />
          <Flex.Row gap="1rem" justifyContent="center">
            {visibleIcons.map(icon => (
              <Card key={icon.key} type="alfa" flexGrow="1" width="180px" padding="0.5rem" border="2px solid var(--color-neutral-200)">
                <Media height="64px">
                  <Suspense fallback={<div>Loading...</div>}>{createElement(icon.component, {})}</Suspense>
                </Media>
                <Card.Content alignItems="center">
                  <Text type="9">{icon.key}</Text>
                </Card.Content>
              </Card>
            ))}
          </Flex.Row>
        </Grid>
      </Grid.Row>
    </Container>
  );
}

export default Colors;
