import { Layout, Page, Text } from '@components';

export default {
  title: 'Components',
  component: Text,
}

const TextStory = () => <>
  <Layout>
    <Page>
      <Text size="1" as="h1">Header H1</Text>
      <Text size="2" as="h2">Header H2</Text>
      <Text size="3" as="h3">Header H3</Text>
      <Text size="4" as="h4">Header H4</Text>
      <Text size="5" as="h5">Header H5</Text>
      <Text size="6" as="h6">Header H6</Text>
      <Text size="7">Default text</Text>
      <Text size="8">Small text</Text>
      <Text size="9">Smaller text</Text>
      <Text size="10">Smallest text</Text>
    </Page>
  </Layout>
</>

export { TextStory as Text };
