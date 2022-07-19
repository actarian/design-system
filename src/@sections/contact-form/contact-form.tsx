import { Button, Container, Flex, Grid } from '@components';
import { ComponentProps } from '@components/types';
import { Checkbox, Field, Input, Label, Radio, Select, TextArea } from '@forms';
import { Send } from '@icons';
import React from 'react';

import styled from 'styled-components';

type Props = {
}

export type ContactFormProps = ComponentProps<Props, HTMLDivElement>;

const ContactFormContainer = styled.div<ContactFormProps>`
  padding: 6rem 0 4rem 0;
  // border-top: 1px solid var(--color-neutral-200);
  // border-bottom: 1px solid var(--color-neutral-200);
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
              <Label>First name</Label>
              <Input placeholder="First name" onChange={onChange} />
            </Field>
          </Grid>
          <Grid md={6}>
            <Field>
              <Label>Last name</Label>
              <Input placeholder="Last name" />
            </Field>
          </Grid>
          <Grid md={6}>
            <Field>
              <Label>Email</Label>
              <Input placeholder="Email" />
            </Field>
          </Grid>
          <Grid md={6}>
            <Field>
              <Label>Country</Label>
              <Select name='country' id='country' defaultValue='Italia'>
                <option>Italia</option>
                <option>Canada</option>
                <option>Francia</option>
                <option>Germania</option>
                <option>Stati Uniti</option>
              </Select>
            </Field>
          </Grid>
          <Grid>
            <Field>
              <Label>Message</Label>
              <TextArea placeholder="Message" />
            </Field>
          </Grid>
          <Grid>
            <Field>
              <Label><Radio name='color' id='red' value='red' /> Red</Label>
              <Label><Radio name='color' id='green' value='green' /> Green</Label>
              <Label><Radio name='color' id='blue' value='blue' /> Blue</Label>
            </Field>
          </Grid>
          <Grid>
            <Field>
              <Label><Checkbox name='privacy' id='privacy' /> Privacy</Label>
            </Field>
          </Grid>
          <Grid>
            <Flex.Row justifyContent="center">
              <Button type="alfa" size="lg"><span>Submit</span> <Send /></Button>
            </Flex.Row>
          </Grid>
        </Grid.Row>
      </Container>
    </ContactFormContainer>
  );
}

export default ContactForm;
