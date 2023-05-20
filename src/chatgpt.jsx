import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { toast } from 'react-toastify';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePictureUrl, setProfilePictureUrl] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleProfilePictureUrlChange = (e) => {
    setProfilePictureUrl(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      await userCredential.user.updateProfile({
        photoURL: profilePictureUrl
      });
      toast("User signed up with profile picture URL successfully!");
    } catch (error) {
      console.error("Error signing up user with profile picture URL:", error);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <label>
        Profile Picture URL:
        <input type="url" value={profilePictureUrl} onChange={handleProfilePictureUrlChange} />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
