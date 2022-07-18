import { Layout, Page, Text } from '@components';

export default {
  title: 'Components',
  component: Text,
}

const TextStory = () => <>
  <Layout>
    <Page>
      <Text type="1" as="h1">Header H1</Text>
      <Text type="2" as="h2">Header H2</Text>
      <Text type="3" as="h3">Header H3</Text>
      <Text type="4" as="h4">Header H4</Text>
      <Text type="5" as="h5">Header H5</Text>
      <Text type="6" as="h6">Header H6</Text>
      <Text type="7">Default text</Text>
      <Text type="8">Small text</Text>
      <Text type="9">Smaller text</Text>
      <Text type="10">Smallest text</Text>
    </Page>
  </Layout>
</>

export { TextStory as Text };
