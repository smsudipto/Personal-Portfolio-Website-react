const documentAssets = import.meta.glob('../assets/documents/*.{pdf,txt}', {
  eager: true,
  import: 'default',
  query: '?url',
})

const imageAssets = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
  query: '?url',
})

const cvUrl =
  documentAssets['../assets/documents/Sudipto_Mandal_CV.pdf'] ?? null
const profileImage =
  imageAssets['../assets/images/profile.jpg'] ?? null

const personalInfo = {
  name: 'SUDIPTO MANDAL',
  title: 'Software Engineer',
  introduction:
    'A motivated and passionate Software Engineering student with a strong interest in web development and software engineering. I enjoy building practical web applications, learning modern technologies, and solving real-world problems through programming. I am continuously improving my technical skills and working towards becoming a professional software engineer.',
  academicBackground: 'Software Engineering Student',
  university: 'Bangladesh University of Business & Technology',
  department: 'Computer Science and Technology',
  studentId: '35103081',
  academicStatus: '4th Year Student',
  professionalInterest: 'Web development and software engineering',
  careerGoal:
    'My career goal is to join a reputable software company where I can develop my technical expertise, gain professional experience, and contribute to meaningful software projects. In the long term, I aspire to establish my own software company and build innovative technology solutions.',
  contactEmail: 'sudiptomandolsm@gmail.com',
  contactLocation: 'Mirpur-1, Dhaka, Bangladesh',
  contactAvailability: 'Open to Entry-Level Opportunities and Freelance Projects',
  socialLinks: {
    github: 'https://github.com/smsudipto',
    linkedin: 'https://www.linkedin.com/feed/',
    facebook: 'https://www.facebook.com/',
  },
  cvUrl,
  profileImage,
}

export default personalInfo
