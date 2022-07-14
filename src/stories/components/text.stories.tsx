import { Layout, Page, Text } from '@components';

export default {
  title: 'Components',
  component: Text,
}

const TextStory = () => <>
  <Layout>
    <Page>
      <Text type="h1" as="h1">Header H1</Text>
      <Text type="h2" as="h2">Header H2</Text>
      <Text type="h3" as="h3">Header H3</Text>
      <Text type="h4" as="h4">Header H4</Text>
      <Text type="h5" as="h5">Header H5</Text>
      <Text type="h6" as="h6">Header H6</Text>
      <Text type="default">Default text</Text>
      <Text type="small">Small text</Text>
      <Text type="smaller">Smaller text</Text>
      <Text type="smallest">Smallest text</Text>
    </Page>
  </Layout>
</>

export { TextStory as Text };
