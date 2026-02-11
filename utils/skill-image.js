export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase().replace(/ /g, '-');

  switch (skillID) {
    case 'figma':
      return { src: '/skills/figma.svg' };
    case 'canva':
      return { src: '/skills/canva-v2.svg' };
    case 'photoshop':
    case 'adobe-photoshop':
      return { src: '/skills/photoshop.svg' };
    case 'adobe-illustrator':
    case 'illustrator':
      return { src: '/skills/illustrator.svg' };
    case 'logo-design':
    case 'logo-designer':
    case 'logo':
      return { src: '/skills/logo-design-v2.svg' };
    case 'adobe-xd':
      return { src: '/skills/adobe-xd.svg' };
    case 'miro':
      return { src: '/skills/miro.svg' };
    case 'sketch':
      return { src: '/skills/sketch.svg' };
    case 'after-effects':
      return { src: '/skills/after-effects.svg' };
    case 'framer':
      return { src: '/skills/framer.svg' };
    case 'vercel':
      return { src: '/skills/vercel.svg' };
    default:
      return null;
  }
}
