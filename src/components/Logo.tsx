import clsx from 'clsx'
import Image from 'next/image'
import logoSvg from '@/images/logo.svg'

export function Logomark({
  invert = false,
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  // For the logomark, we'll use a simplified version of your logo
  return (
    <div
      className={clsx(
        'flex items-center justify-center rounded-md',
        invert ? 'bg-white' : 'bg-neutral-950',
      )}
    >
      <span
        className={clsx(
          'text-xs font-bold',
          invert ? 'text-neutral-950' : 'text-white',
        )}
      >
        FB
      </span>
    </div>
  )
}

export function Logo({
  className,
  invert = false,
  filled: _filled,
  fillOnHover: _fillOnHover,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <div className={clsx('flex items-center', className)} {...props}>
      <Image
        src={logoSvg}
        alt="Francisco Baptista - Executive Coach"
        className={clsx(
          'h-16 w-auto transition-all duration-300',
          invert && 'brightness-0 invert',
        )}
        priority
      />
    </div>
  )
}
