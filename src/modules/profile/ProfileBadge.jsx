const ProfileBadge = ({ text, url = "" }) => {
  return (
    <div className="badge">
      {url ? (
        <a href={url}>
          <p>{text}</p>
        </a>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default ProfileBadge;
