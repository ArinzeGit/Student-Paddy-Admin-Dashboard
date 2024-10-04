interface ProfileDrawerProps {
  isVisible: boolean;
  onClose: () => void;
  profileData: any; // Adjust the type according to your profile data structure
}

const ProfileDrawer = ({
  isVisible,
  onClose,
  profileData,
}: ProfileDrawerProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex">
      {/* Overlay */}
      <div className="flex-grow bg-gray-900 opacity-50" onClick={onClose}></div>

      {/* Actual profile drawer */}
      <div className="w-80 bg-white shadow-lg p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{profileData.Name}</h2>
          <button onClick={onClose}>Close</button>
        </div>
        <p>{profileData.Faculty}</p>
        <p>{profileData.Department}</p>
      </div>
    </div>
  );
};

export default ProfileDrawer;
