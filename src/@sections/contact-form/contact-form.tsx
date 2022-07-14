import { Container, Grid } from '@components';
import { ComponentAttrs } from '@components/types';
import { Field, Input, Label } from '@forms';
import React from 'react';

import styled from 'styled-components';

type Props = {
}

export type ContactFormProps = ComponentAttrs<Props, HTMLDivElement>;

const ContactFormContainer = styled.div<ContactFormProps>`
  padding: 6rem 0 4rem 0;
  border-top: 1px solid var(--color-neutral-200);
  border-bottom: 1px solid var(--color-neutral-200);
  // background: var(--color-neutral-900);
  // color: var(--color-neutral-100);
`;

const ContactForm = (props: ContactFormProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('ContactForm', e.target.value);
  }
  return (
    <ContactFormContainer {...props}>
      <Container padding='4rem' boxShadow='0 2rem 3rem #00000022' borderRadius='var(--border-radius)'>
        <Grid.Row rowGap='1rem'>
          <Grid md={6}>
            <Field>
              <Label>First Name</Label>
              <Input onChange={onChange} />
            </Field>
          </Grid>
          <Grid md={6}>
            <Field>
              <Label>Last Name</Label>
              <Input />
            </Field>
          </Grid>
          <Grid md={6}>
            <Field>
              <Label>Email</Label>
              <Input />
            </Field>
          </Grid>
          <Grid md={6}>
            <Field>
              <Label>Country</Label>
              <Input />
            </Field>
          </Grid>
        </Grid.Row>
      </Container>
    </ContactFormContainer>
  );
}

export default ContactForm;
