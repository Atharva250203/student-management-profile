import React from 'react';
import SkillList from './SkillList';

function ProfileCard({ profile, skills, selectedSkills, setSelectedSkills, setSkills, handleSelectAll, deleteSelectedSkills }) {
  return (
    <div className="profile-card">
      <h2>{profile.name}</h2>
      <p>Email: {profile.email}</p>
      <p>DOB: {profile.dob}</p>
      <p>Phone: {profile.phone}</p>

      <h3>Skills:</h3>
      <SkillList
        skills={skills}
        setSkills={setSkills}
        selectedSkills={selectedSkills}
        setSelectedSkills={setSelectedSkills}
        handleSelectAll={handleSelectAll}
        deleteSelectedSkills={deleteSelectedSkills}
      />
    </div>
  );
}

export default ProfileCard;
