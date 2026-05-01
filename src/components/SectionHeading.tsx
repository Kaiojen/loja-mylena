type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  );
}
