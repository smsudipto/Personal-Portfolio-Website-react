import skills from '../data/skills'
import '../styles/skills.css'
import SkillCard from './SkillCard'

const categories = [
  'Frontend Development',
  'Backend Development',
  'Database',
  'Tools & Version Control',
]

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-heading skills-heading">
          <p className="section-kicker">What I work with</p>
          <h2>My Technical Skills</h2>
          <p className="skills-introduction">
            A growing toolkit of technologies I am studying and using to
            explore modern software development.
          </p>
        </div>

        <div className="skills-categories">
          {categories.map((category) => (
            <div className="skill-category" key={category}>
              <h3>{category}</h3>
              <div className="skills-grid">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
