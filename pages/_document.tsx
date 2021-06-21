import Document, { Html, Main, NextScript } from 'next/document'
import { CriticalStyleHead } from '@/components/criticalStyleHead'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <CriticalStyleHead />
        <body>
          <script>0</script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument
