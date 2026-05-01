import { siteConfig } from '../data/content';

type BrandProps = {
  align?: 'left' | 'center';
};

export function Brand({ align = 'center' }: BrandProps) {
  return (
    <span className={`brand brand--${align}`} aria-label={`${siteConfig.brand} ${siteConfig.descriptor}`}>
      <span className="brand__name">{siteConfig.brand}</span>
      <span className="brand__descriptor">{siteConfig.descriptor}</span>
    </span>
  );
}
