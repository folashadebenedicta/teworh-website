import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'

interface Props {
  name: string
  email: string
  service: string
  message: string
}

export function ContactEmailToTeworh({ name, email, service, message }: Props) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
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
              New Contact Form Submission
            </Heading>
          </Section>

          {/* Body */}
          <Section style={{ padding: '32px' }}>
            <Row>
              <Text style={label}>Name</Text>
              <Text style={value}>{name}</Text>
            </Row>
            <Hr style={divider} />
            <Row>
              <Text style={label}>Email</Text>
              <Text style={value}>{email}</Text>
            </Row>
            <Hr style={divider} />
            <Row>
              <Text style={label}>Interested in</Text>
              <Text style={value}>{service}</Text>
            </Row>
            <Hr style={divider} />
            <Row>
              <Text style={label}>Message</Text>
              <Text style={{ ...value, whiteSpace: 'pre-wrap' }}>
                {message}
              </Text>
            </Row>
          </Section>

          {/* Footer */}
          <Section style={{ backgroundColor: '#f3f4f6', padding: '16px 32px' }}>
            <Text style={{ fontSize: 12, color: '#6b7280', margin: 0 }}>
              This email was sent from the Teworh website contact form. Reply
              directly to respond to {name}.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const label: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  color: '#6b7280',
  textTransform: 'uppercase',
  letterSpacing: 1,
  margin: '0 0 4px',
}

const value: React.CSSProperties = {
  fontSize: 15,
  color: '#111827',
  margin: '0 0 0',
}

const divider: React.CSSProperties = {
  borderColor: '#e5e7eb',
  margin: '16px 0',
}
