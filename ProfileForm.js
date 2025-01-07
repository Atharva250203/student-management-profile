import React from 'react';

function ProfileForm({ profile, setProfile }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  return (
    <div className="profile-form">
      <input
        type="text"
        name="name"
        value={profile.name}
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={profile.email}
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="date"
        name="dob"
        value={profile.dob}
        placeholder="Date of Birth"
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        value={profile.phone}
        placeholder="Phone Number"
        onChange={handleChange}
      />
    </div>
  );
}

export default ProfileForm;
