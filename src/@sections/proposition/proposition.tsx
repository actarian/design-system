import { Button, Container, Flex, Modal, Section, Text } from '@components';
import { ComponentProps } from '@components/types';
import { useDrawer } from '@hooks';
import { ArrowRight } from '@icons';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
}

export type PropositionProps = ComponentProps<Props, HTMLDivElement>;

const Proposition = (props: PropositionProps) => {
  const [showModal, setShowModal] = useState(false);
  const onOpenModal = () => setShowModal(true);
  const onCloseModal = (_: any) => {
    setShowModal(false);
  }
  const [drawer, onOpenDrawer, onCloseDrawer] = useDrawer();
  return (
    <>
      <Section padding="7rem 0" background="var(--color-primary-100)" color="var(--color-primary-900)">
        <Container>
          <Flex.Col justifyContent="center" alignItems="center">
            <Text type="3" fontWeight="700" marginBottom="2rem">Prow scuttle parrel provost Sail.</Text>
            <Link href="https://design-system-ruddy.vercel.app" target="_blank">
              <Button type="alfa" as="a" marginBottom="1rem" onClick={onOpenModal}>Read documentation</Button>
            </Link>
            <Link href="https://github.com/actarian/design-system" target="_blank">
              <Button type="gamma" as="a" onClick={() => onOpenDrawer('cart')}>view on GitHub</Button>
            </Link>
          </Flex.Col>
        </Container>
      </Section>
      <Modal width="30rem" visible={showModal} onClose={onCloseModal}>
        <Modal.Title>
          <Text type="7" fontWeight="700">Foreign Market detected</Text>
        </Modal.Title>
        <Modal.Subtitle>Attention Please.</Modal.Subtitle>
        <Modal.Content>
          <p>You seem to be browsing a different market than yours.</p>
        </Modal.Content>
        <Modal.Button type="default" passive onClick={onCloseModal}>Proceed</Modal.Button>
        <Modal.Button type="alfa"><span>Change to Italy</span> <ArrowRight /></Modal.Button>
      </Modal>
    </>
  )
}

export default Proposition;
