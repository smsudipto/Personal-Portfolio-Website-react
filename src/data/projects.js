import researchPlaceholder from '../assets/images/projects/research-topic-mapping.svg'
import ecommercePlaceholder from '../assets/images/projects/django-ecommerce.svg'
import bankPlaceholder from '../assets/images/projects/bank-management.svg'
import racingPlaceholder from '../assets/images/projects/3d-car-racing.svg'

const projectAssets = import.meta.glob('../assets/images/projects/*.{png,svg}', {
  eager: true,
  import: 'default',
  query: '?url',
})

const getProjectImage = (filename, fallback) =>
  projectAssets[`../assets/images/projects/${filename}`] ?? fallback

const projects = [
  {
    id: 'research-topic-mapping',
    title: 'AI-Driven Research Topic Mapping and Recommendation System',
    description:
      'An AI-driven research platform designed to help students explore research interests and discover relevant research topics. The system focuses on connecting students with suitable research areas through intelligent topic analysis and recommendation concepts.',
    image: getProjectImage('research-system.png', researchPlaceholder),
    imageIsPlaceholder: !projectAssets['../assets/images/projects/research-system.png'],
    technologies: ['React', 'Python', 'JavaScript', 'CSS'],
    liveDemo: null,
    github: null,
  },
  {
    id: 'django-ecommerce',
    title: 'Django E-commerce Website',
    description:
      'A responsive e-commerce web application developed using Django and modern frontend technologies. The project focuses on product presentation, product details, user-friendly navigation, and an organized shopping interface.',
    image: getProjectImage('ecommerce.png', ecommercePlaceholder),
    imageIsPlaceholder: !projectAssets['../assets/images/projects/ecommerce.png'],
    technologies: ['Django', 'Python', 'JavaScript', 'HTML5', 'CSS3'],
    liveDemo: null,
    github: null,
  },
  {
    id: 'bank-management',
    title: 'Bank Management System',
    description:
      'A web-based bank management application designed to demonstrate essential banking-related management functionalities. The project focuses on structured data management, user-friendly interfaces, and organized financial record handling.',
    image: getProjectImage('bank-management.png', bankPlaceholder),
    imageIsPlaceholder: !projectAssets['../assets/images/projects/bank-management.png'],
    technologies: ['Python', 'JavaScript', 'HTML5', 'CSS3'],
    liveDemo: null,
    github: null,
  },
  {
    id: '3d-car-racing',
    title: '3D Car Racing Game',
    description:
      'A 3D car racing game developed as an interactive gaming project. It focuses on vehicle movement, racing environments, obstacles, and an engaging gameplay experience.',
    image: getProjectImage('car-racing.png', racingPlaceholder),
    imageIsPlaceholder: !projectAssets['../assets/images/projects/car-racing.png'],
    technologies: ['JavaScript', 'CSS'],
    liveDemo: null,
    github: null,
  },
]

export default projects
