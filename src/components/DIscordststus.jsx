import React, { useEffect, useState } from "react";

const DiscordStatus = () => {
  const [discordStatus, setDiscordStatus] = useState("");
  const [avatarId, setAvatarId] = useState("");
  const [username, setUsername] = useState("");
  const [spotifyStatus, setSpotifyStatus] = useState(null);
  const [vscodeStatus, setVscodeStatus] = useState(null); // New state for VSCode presence

  useEffect(() => {
    const fetchDiscordStatus = async () => {
      try {
        const response = await fetch("https://api.lanyard.rest/v1/users/634685907286360065", {
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          console.error("Network response was not ok:", response.statusText);
          return;
        }

        const data = await response.json();
        console.log("Lanyard API data:", data);

        if (data.success) {
          const { discord_user, discord_status, spotify } = data.data;
          setDiscordStatus(discord_status);
          setUsername(discord_user.username);
          setAvatarId(discord_user.avatar);
          setSpotifyStatus(spotify);
        } else {
          console.error("API response was unsuccessful:", data);
        }
      } catch (error) {
        console.error("Error fetching Discord status:", error);
      }
    };

    const fetchVscodeStatus = async () => {
      // Placeholder URL, replace with actual VSCode presence API URL
      const response = await fetch("https://api.example.com/vscode/status", {
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        console.error("Network response was not ok:", response.statusText);
        return;
      }

      const data = await response.json();
      console.log("VSCode API data:", data);

      if (data.success) {
        setVscodeStatus(data.status); // Adjust based on actual API response
      } else {
        console.error("API response was unsuccessful:", data);
      }
    };

    fetchDiscordStatus();
  
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", padding: "0px", borderRadius: "8px", color: "#FFFFFF" }}>
      {/* {avatarId && (
        <img
          src={`https://cdn.discordapp.com/avatars/634685907286360065/${avatarId}.png`}
          alt="Discord Avatar"
          style={{ borderRadius: "8px", marginRight: "20px", width: "100px", height: "100px" }}
        />
      )} */}
      <div>
        {/* <h2 style={{ margin: "0 0 10px 0" }}>@{username}</h2> */}
        {/* {vscodeStatus ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ margin: "0", color: "#007ACC" }}>VSCode: {vscodeStatus}</p>
          </div> */}
        { spotifyStatus ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={spotifyStatus.album_art_url}
              alt="Album Art"
              style={{ width: "50px", height: "50px", marginRight: "10px", borderRadius: "5px" }}
            />
            <div>
              <p className="text-[16px] md:text-[16px] " style={{ margin: "0", color: "#1DB954" }}>LISTENING TO SPOTIFY...</p>
              <p  className="text-[14px] md:text-[16px]" style={{ margin: "0", fontWeight: "bold" }}>{spotifyStatus.song}</p>
              <p className="text-[13px] md:text-[14px]" style={{ margin: "0", color: "#888888" }}>By {spotifyStatus.artist}</p>
            </div>
          </div>
        ) : (
          <div>
            <p style={{ margin: "0" }}>online</p>
            <p style={{ margin: "0" }}>{new Date().toLocaleString()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscordStatus;
