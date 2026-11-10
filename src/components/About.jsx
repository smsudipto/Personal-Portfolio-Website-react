import personalInfo from '../data/personalInfo'
import '../styles/about.css'

const profileDetails = [
  { label: 'Full name', value: personalInfo.name },
  { label: 'Academic background', value: personalInfo.academicBackground },
  { label: 'University', value: personalInfo.university },
  { label: 'Department', value: personalInfo.department },
  { label: 'Student ID', value: personalInfo.studentId },
  { label: 'Academic status', value: personalInfo.academicStatus },
  { label: 'Professional interest', value: personalInfo.professionalInterest },
  { label: 'Career goal', value: personalInfo.careerGoal },
]

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content container">
        <div className="section-heading about-heading">
          <p className="section-kicker">A little about me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-layout">
          <div className="about-copy">
            <p>
              My name is {personalInfo.name}, and I am a{' '}
              {personalInfo.academicBackground.toLowerCase()} with an interest
              in software development.
            </p>
            <p>
              I enjoy exploring frontend and backend technologies, creating
              useful interfaces, and understanding the ideas that make
              reliable software possible. I am passionate about learning new
              technologies and developing my skills through consistent
              practice.
            </p>
            <p>{personalInfo.careerGoal}</p>
          </div>

          <dl className="profile-details">
            {profileDetails.map((detail) => (
              <div className="profile-detail" key={detail.label}>
                <dt>{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
