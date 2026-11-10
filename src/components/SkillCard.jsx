const iconMarks = {
  html5: '< >',
  css3: '#',
  javascript: 'JS',
  react: '⚛',
  tailwind: '≋',
  bootstrap: 'B',
  python: 'Py',
  django: 'Dj',
  mongodb: 'M',
  git: '●',
  github: '◖',
}

function SkillCard({ skill }) {
  return (
    <article className="skill-card">
      <div className={`skill-icon skill-icon-${skill.icon}`} aria-hidden="true">
        {iconMarks[skill.icon]}
      </div>
      <div>
        <h3>{skill.name}</h3>
        <p>{skill.category}</p>
      </div>
    </article>
  )
}

export default SkillCard
