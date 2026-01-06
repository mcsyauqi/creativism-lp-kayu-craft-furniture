import { ArrowRight } from 'lucide-react';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = false,
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-wood text-warm-white hover:bg-wood-dark focus:ring-wood btn-primary',
    secondary: 'bg-transparent border-2 border-wood text-wood hover:bg-wood hover:text-warm-white focus:ring-wood',
    gold: 'bg-gold text-charcoal hover:bg-gold-light focus:ring-gold',
    ghost: 'bg-transparent text-wood hover:bg-wood/10 focus:ring-wood',
    white: 'bg-warm-white text-wood hover:bg-cream focus:ring-warm-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-5 h-5" />}
    </button>
  );
}
