'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            backgroundColor: '#fafafa',
            padding: '2rem',
          }}
        >
          <h1
            style={{
              fontSize: '4.5rem',
              fontWeight: '200',
              color: '#171717',
              margin: '0',
              letterSpacing: '-0.025em',
            }}
          >
            500
          </h1>

          <h2
            style={{
              fontSize: '2rem',
              color: '#171717',
              marginTop: '1.5rem',
              fontWeight: '600',
              letterSpacing: '-0.025em',
            }}
          >
            System Architecture Exception
          </h2>

          <p
            style={{
              color: '#525252',
              marginTop: '1.5rem',
              maxWidth: '42rem',
              textAlign: 'center',
              lineHeight: '1.75',
              fontSize: '1.125rem',
            }}
          >
            We've encountered an unexpected complexity in our technical
            architecture. Unlike executive transitions where we maintain an 87%
            success rate, this particular exception requires immediate
            engineering intervention.
          </p>

          <p
            style={{
              color: '#737373',
              marginTop: '1rem',
              maxWidth: '36rem',
              textAlign: 'center',
              lineHeight: '1.5',
              fontSize: '0.875rem',
            }}
          >
            Our systems team has been automatically notified. In executive
            advisory, we prepare for contingencies. In technology, we respond to
            them in real-time.
          </p>

          <div
            style={{
              marginTop: '2.5rem',
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            <button
              type="button"
              onClick={reset}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#171717',
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '600',
                transition: 'background-color 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#404040'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#171717'
              }}
              onFocus={(e) => {
                e.currentTarget.style.backgroundColor = '#404040'
              }}
              onBlur={(e) => {
                e.currentTarget.style.backgroundColor = '#171717'
              }}
            >
              Attempt Recovery
            </button>

            <a
              href="/"
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: 'white',
                color: '#171717',
                border: '1px solid #d4d4d4',
                borderRadius: '0.375rem',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: '600',
                transition: 'border-color 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#a3a3a3'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#d4d4d4'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#a3a3a3'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#d4d4d4'
              }}
            >
              Strategic Retreat
            </a>
          </div>

          <div
            style={{
              marginTop: '3rem',
              padding: '1.5rem',
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              border: '1px solid #e5e5e5',
              maxWidth: '32rem',
            }}
          >
            <p
              style={{
                color: '#737373',
                fontSize: '0.75rem',
                textAlign: 'center',
                margin: '0',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Technical Reference
            </p>
            <p
              style={{
                color: '#171717',
                fontSize: '0.875rem',
                textAlign: 'center',
                margin: '0.5rem 0 0 0',
                fontFamily: 'monospace',
              }}
            >
              {error.digest || 'EXEC-' + Date.now().toString(36).toUpperCase()}
            </p>
            <p
              style={{
                color: '#a3a3a3',
                fontSize: '0.75rem',
                textAlign: 'center',
                margin: '0.5rem 0 0 0',
              }}
            >
              Timestamp: {new Date().toISOString()}
            </p>
          </div>

          <p
            style={{
              color: '#a3a3a3',
              fontSize: '0.75rem',
              marginTop: '2rem',
              textAlign: 'center',
              maxWidth: '28rem',
              lineHeight: '1.5',
            }}
          >
            If this issue persists, please contact{' '}
            <a
              href="mailto:francisco@franciscobaptista.com?subject=Technical Exception Report"
              style={{ color: '#737373', textDecoration: 'underline' }}
            >
              francisco@franciscobaptista.com
            </a>{' '}
            with the reference above.
          </p>
        </div>
      </body>
    </html>
  )
}
