import React from 'react';
import SkillItem from './SkillItem';

function SkillList({ skills, setSkills, selectedSkills, setSelectedSkills, handleSelectAll, deleteSelectedSkills }) {
  return (
    <div className="skill-list">
      <input
        type="checkbox"
        onChange={handleSelectAll}
        checked={selectedSkills.length === skills.length}
      />
      <button onClick={deleteSelectedSkills}>Delete Selected</button>
      {skills.map((skill) => (
        <SkillItem
          key={skill.id}
          skill={skill}
          onDelete={(id) => setSkills(skills.filter(skill => skill.id !== id))}
          selectedSkills={selectedSkills}
          setSelectedSkills={setSelectedSkills}
        />
      ))}
    </div>
  );
}

export default SkillList;
