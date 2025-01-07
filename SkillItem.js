import React from 'react';

function SkillItem({ skill, onDelete, selectedSkills, setSelectedSkills }) {
  const handleCheckboxChange = () => {
    if (selectedSkills.includes(skill.id)) {
      setSelectedSkills(selectedSkills.filter(id => id !== skill.id));
    } else {
      setSelectedSkills([...selectedSkills, skill.id]);
    }
  };

  return (
    <div className="skill-item">
      <input
        type="checkbox"
        checked={selectedSkills.includes(skill.id)}
        onChange={handleCheckboxChange}
      />
      <span>{skill.name} - {skill.proficiency}</span>
      <button onClick={() => onDelete(skill.id)}>Delete</button>
    </div>
  );
}

export default SkillItem;
