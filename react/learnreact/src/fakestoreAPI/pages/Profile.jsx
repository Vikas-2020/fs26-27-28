import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";

function Profile() {
  const { user } = useAuth();
  const [details, setDetails] = useState({
    name: "",
    bio: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const db = getFirestore();
        const userDoc = doc(db, "users", user.uid);
        const userSnapshot = await getDoc(userDoc);
        if (userSnapshot.exists()) {
          setDetails(userSnapshot.data());
        }
      }
    };

    fetchUserData();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getFirestore();
    try {
      await setDoc(
        doc(db, "users", user.uid),
        {
          name: details.name,
          bio: details.bio,
          email: user.email,
          updatedAt: new Date().toISOString(),
        },
        { merge: true }
      );
      console.log("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Welcome, {user?.email}
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={details.name}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <textarea
            name="bio"
            placeholder="Bio"
            value={details.bio}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;