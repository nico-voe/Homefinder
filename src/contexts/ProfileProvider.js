import { createContext, useContext, useState, useEffect } from "react";
import { addDoc, collection, serverTimestamp, db } from "../firebase";

const ProfileContext = createContext();

export function useProfile() {
  return useContext(ProfileContext);
}

const ProfileProvider = ({ children }) => {
  const addProfile = async (profile) => {
    if (!profile.userId) {
      throw new Error("user id is mandatory");
    }

    await addDoc(collection(db, "profiles"), {
      ...profile,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  };

  const exports = { addProfile };

  return (
    <ProfileContext.Provider value={exports}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
