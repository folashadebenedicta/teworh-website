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
  dob: string
  gender: string
  email: string
  skillLevel: string
  preferredPosition: string
  previousPosition?: string
}

export function ApplyEmailToTeworh({
  name,
  dob,
  gender,
  email,
  skillLevel,
  preferredPosition,
  previousPosition,
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>New Academy Application from {name}</Preview>
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
              New Football Academy Application
            </Heading>
          </Section>

          {/* Body */}
          <Section style={{ padding: '32px' }}>
            <Row>
              <Text style={label}>Full Name</Text>
              <Text style={value}>{name}</Text>
            </Row>
            <Hr style={divider} />
            <Row>
              <Text style={label}>Email</Text>
              <Text style={value}>{email}</Text>
            </Row>
            <Hr style={divider} />
            <Row>
              <Text style={label}>Date of Birth</Text>
              <Text style={value}>{dob}</Text>
            </Row>
            <Hr style={divider} />
            <Row>
              <Text style={label}>Gender</Text>
              <Text style={value}>{gender}</Text>
            </Row>
            <Hr style={divider} />
            <Row>
              <Text style={label}>Skill Level</Text>
              <Text style={value}>{skillLevel}</Text>
            </Row>
            <Hr style={divider} />
            <Row>
              <Text style={label}>Preferred Position</Text>
              <Text style={value}>{preferredPosition}</Text>
            </Row>
            {previousPosition && (
              <>
                <Hr style={divider} />
                <Row>
                  <Text style={label}>Previous Position</Text>
                  <Text style={value}>{previousPosition}</Text>
                </Row>
              </>
            )}
          </Section>

          {/* Footer */}
          <Section style={{ backgroundColor: '#f3f4f6', padding: '16px 32px' }}>
            <Text style={{ fontSize: 12, color: '#6b7280', margin: 0 }}>
              This application was submitted via the Teworh website. Reply
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
  margin: 0,
}

const divider: React.CSSProperties = {
  borderColor: '#e5e7eb',
  margin: '16px 0',
}
