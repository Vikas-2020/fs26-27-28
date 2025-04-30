function Profile() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Welcome</h1>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <textarea
            name="bio"
            placeholder="Bio"
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
