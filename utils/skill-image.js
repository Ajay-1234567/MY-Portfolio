export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase().replace(/ /g, '-');

  switch (skillID) {
    case 'figma':
      return { src: '/skills/figma.svg' };
    case 'canva':
      return { src: '/skills/canva.svg' };
    case 'photoshop':
      return { src: '/skills/photoshop.svg' };
    case 'adobe-illustrator':
    case 'illustrator':
    case 'logo-design':
      return { src: '/skills/illustrator.svg' };
    case 'adobe-xd':
      return { src: '/skills/adobe-xd.svg' };
    case 'miro':
      return { src: '/skills/miro.svg' };
    default:
      return null;
  }
}
