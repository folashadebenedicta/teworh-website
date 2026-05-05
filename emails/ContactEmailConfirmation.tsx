import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface Props {
  name: string
}

export function ContactEmailConfirmation({ name }: Props) {
  return (
    <Html>
      <Head />
      <Preview>We received your message — Teworh Sports</Preview>
      <Body style={{ backgroundColor: '#f9fafb', fontFamily: 'sans-serif' }}>
        <Container
          style={{
            maxWidth: 560,
            margin: '40px auto',
            backgroundColor: '#ffffff',
            borderRadius: 12,
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <Section style={{ backgroundColor: '#1f7a34', padding: '24px 32px' }}>
            <Heading style={{ color: '#ffffff', fontSize: 20, margin: 0 }}>
              Teworh Sports & Skills Centre
            </Heading>
          </Section>

          {/* Body */}
          <Section style={{ padding: '32px' }}>
            <Text style={{ fontSize: 16, color: '#111827', marginTop: 0 }}>
              Hi {name},
            </Text>
            <Text style={{ fontSize: 15, color: '#374151', lineHeight: 1.6 }}>
              Thank you for reaching out to Teworh Sports & Skills Centre.
              We&apos;ve received your message and a member of our team will get
              back to you as soon as possible.
            </Text>
            <Text style={{ fontSize: 15, color: '#374151', lineHeight: 1.6 }}>
              In the meantime, feel free to explore our website to learn more
              about our facilities, programs, and ongoing projects.
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#374151',
                lineHeight: 1.6,
                marginBottom: 0,
              }}
            >
              Warm regards,
              <br />
              <strong>The Teworh Team</strong>
            </Text>
          </Section>

          {/* Footer */}
          <Section style={{ backgroundColor: '#f3f4f6', padding: '16px 32px' }}>
            <Text style={{ fontSize: 12, color: '#6b7280', margin: 0 }}>
              300a Samuel Nlemoha Street, Off Dr Ifeanyi Okowa Street ·
              info@teworh.com.ng · +234 8023456789
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
