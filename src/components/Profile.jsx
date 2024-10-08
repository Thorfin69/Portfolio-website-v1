"use client";
import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import Image from "../Asset/image.png";
import { animateScroll as scroll, scroller } from 'react-scroll';
import DiscordStatus from "./DiscordStatus";

const Profile = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [discordStatus, setDiscordStatus] = useState(null);
    const [birthdate, setBirthdate] = useState(
        new Date("October 5, 2005 20:00:00"),
    );
    const [ageInSeconds, setAgeInSeconds] = useState(0);
    const [userId, setUserId] = useState("");
    const [avatarId, setAvatarId] = useState("");
    const [username, setUsername] = useState("");

    const scrollToBottom = (e) => {
        e.preventDefault(); // Prevent default link behavior
        scroll.scrollTo(1883);  // Use predefined options
    };

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Fetch Discord status
        const fetchDiscordStatus = async () => {
            try {
                const response = await fetch(
                    "https://api.lanyard.rest/v1/users/634685907286360065"
                ); // Replace with your Lanyard user ID
                const data = await response.json();

                if (data.success) {
                    setDiscordStatus(data.data.discord_status);
                    setUserId(data.data.discord_user.id);
                    setAvatarId(data.data.discord_user.avatar);
                    setUsername(data.data.discord_user.username);

                    // Call your service to update Lanyard with Spotify activity (replace with actual logic)
                    const spotifyStatus = await fetchSpotifyStatus(); // Replace with your Spotify API integration
                    if (spotifyStatus) {
                        updateLanyardStatus(spotifyStatus); // Replace with your service's logic
                    }
                } else {
                    console.error("Failed to fetch Discord status");
                }
            } catch (error) {
                console.error("Error fetching Discord status:", error);
            }
        };

        // Function to fetch Spotify playback status (replace with actual Spotify API integration)
        const fetchSpotifyStatus = async () => {
            try {
                const spotifyResponse = await fetch('https://your-spotify-api-endpoint');
                const spotifyData = await spotifyResponse.json();
                console.log("Spotify Data:", spotifyData);
                return spotifyData?.isPlaying ? 'Listening to Spotify' : null;
            } catch (error) {
                console.error("Error fetching Spotify data:", error);
                return null;
            }
        };

        // Function to update Lanyard status with Spotify activity (replace with your service's logic)
        const updateLanyardStatus = async (newStatus) => {
            try {
                // Send a request to your service to update Lanyard with the new status
                const updateResponse = await fetch('https://your-service-endpoint', {
                    method: 'POST',
                    body: JSON.stringify({ status: newStatus }),
                });
                if (!updateResponse.ok) {
                    throw new Error('Failed to update Lanyard status');
                }
            } catch (error) {
                console.error("Error updating Lanyard status:", error);
            }
        };





        // Initial fetch
        fetchDiscordStatus();

        // Set up interval to update status every X seconds (adjust the interval as needed)
        const intervalId = setInterval(fetchDiscordStatus, 60000); // Update every 60 seconds

        // Cleanup functions
        return () => {
            clearInterval(timerId);
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        // Calculate age in seconds
        const calculateAgeInSeconds = () => {
            const timeDifference = currentTime.getTime() - birthdate.getTime();
            const seconds = timeDifference / 1000;
            setAgeInSeconds(seconds);
        };

        // Initial calculation
        calculateAgeInSeconds();

        // Set up interval to recalculate every second
        const intervalId = setInterval(calculateAgeInSeconds, 1000);

        // Cleanup function
        return () => {
            clearInterval(intervalId);
        };
    }, [currentTime, birthdate]);

    // Function to format the current time as a string in the desired format
    const formatTime = (date) => {
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0"); // JavaScript months are 0-based.
        const year = date.getFullYear().toString().substr(-2); // Get the last two digits of the year
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");

        // Make sure to format the time consistently for both server and client
        return `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
    };
    return (
        <>
            <div className="container flex-wrap">
                <div className="sm:ml-10 md:ml-20 " >
                    <div className="md:ml-1 " >
                        <div className="meow text-clamp mt-8  ml-5 sm:ml-36 sm:-mt-28  w-80 text-idkfrl  ">
                            <h1 className="w-80 text-3xl sm:text-6xl">Vikas</h1>
                        </div>
                        <div className="spacee  w-10/12 md:w-5/12 ml-5 md:ml-36 text-primary-brown  text-lg md:text-3xl">
                            <h4>
                                Innovative Frontend Wizard.<br></br>
                                Bringing designs to life with code.
                            </h4>
                        </div>
                    </div>


                    <div className="flex   md:ml-36 md:gap-3 mt-5 ml-2 gap-2 transition-all">
                        <div className="hover:bg-idktbh rounded-xl transition-all">
                            <a
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="Thorfin6"
                                data-tooltip-place="top"
                                className="transition-all flex justify-center items-center w-[50px] h-[50px] bg-transparent border-none rounded-[10px] cursor-pointer group-hover:bg-elevation_one active:scale-[95%] offset_ring"
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/Thorfin69"
                            >
                                <svg
                                    width="24px"
                                    height="24px"
                                    className="social_svg"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    color="#dba895"
                                >
                                    <path
                                        d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3"
                                        stroke="#dba895"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                        <div className="hover:bg-idktbh rounded-xl transition-all">
                            <a
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="Thorfin"
                                data-tooltip-place="top"
                                className="transition-all flex justify-center items-center w-[50px] h-[50px] bg-transparent border-none rounded-[10px] cursor-pointer group-hover:bg-elevation_one active:scale-[95%] offset_ring"
                                target="_blank"
                                rel="noreferrer"
                                href="https://discord.com/users/634685907286360065"
                            >
                                <svg
                                    width="24px"
                                    height="24px"
                                    className="social_svg"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    color="#dba895"
                                >
                                    <path
                                        d="M5.5 16c5 2.5 8 2.5 13 0M15.5 17.5l1 2s4.171-1.328 5.5-3.5c0-1 .53-8.147-3-10.5-1.5-1-4-1.5-4-1.5l-1 2h-2"
                                        stroke="#dba895"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                    <path
                                        d="M8.528 17.5l-1 2s-4.171-1.328-5.5-3.5c0-1-.53-8.147 3-10.5 1.5-1 4-1.5 4-1.5l1 2h2"
                                        stroke="#dba895"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                    <path
                                        d="M8.5 14c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2 1.5.895 1.5 2-.672 2-1.5 2zM15.5 14c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2 1.5.895 1.5 2-.672 2-1.5 2z"
                                        stroke="#dba895"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                        <div className="hover:bg-idktbh rounded-xl transition-all">
                            <a
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="vikaspasi.work@gmail"
                                data-tooltip-place="top"
                                className="transition-all flex justify-center items-center w-[50px] h-[50px] bg-transparent border-none rounded-[10px] cursor-pointer group-hover:bg-elevation_one active:scale-[95%] offset_ring"
                                target="_blank"
                                rel="noreferrer"
                                href="mailto:vikaspasi.work@gmail"
                            >
                                <svg
                                    width="24px"
                                    height="24px"
                                    className="social_svg"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    color="#dba895"
                                >
                                    <path
                                        d="M7 9l5 3.5L17 9"
                                        stroke="#dba895"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                    <path
                                        d="M2 17V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"
                                        stroke="#dba895"
                                        stroke-width="1.5"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>


                    <a href="#">
                        <button
                            onClick={scrollToBottom}
                            id="btn"
                            className="  md:w-[50vh] md:h-20  first-line:justify-center md:ml-36 ml-5 mt-7 hover:bg-idkfr active:scale-95 transition-all border-spacing-4 bg-idktbh border-primary-brown  text-primary-brown w-56 h-10 rounded-xl"
                        >
                            Discover my work ↓
                        </button>
                    </a>
                    <div />
                </div>

                <div className="sm:ml-20 ">
                    <div className="huh sm:block size-80 hidden absolute  sm:ml-[100vh] top-28 mt-16  sm:opacity-100 opacity-100  ">
                        <img src={Image}
                            className=" md:mr-36  object-cover rounded-2xl hover:scale-105 transition-all"
                            alt="thumbnail" />
                    </div>
                </div>
            </div>

            <div className=" sm:ml-20 gap-3 sm:relative md:flex   justify-between sm:max-w-[150vh] ">
                <div className=" ">
                    <h2 className="brrr  sm:ml-48 ml-4 text-[14px] sm:text-xl mt-28  text-primary-brown" id="about">
                        Currently<span className="text-idkfrl">: I Am</span>
                    </h2>
                    <img
                        src={`https://cdn.discordapp.com/avatars/${userId}/${avatarId}.png`}
                        alt="pfp"
                        className="sm:size-36 size-20 sm:ml-44 ml-4 rounded-xl mt-2"
                    />



                    <div className=" text-primary-brown sm:ml-[45vh] sm:-mt-32 -mt-[80px] ml-[20vh] overflow-hidden ">
                        <h4 className="User  sm:text-xl text-[17px] font-bold">@{username ? username : "fetching"}</h4>
                        <h5 className="brr">{discordStatus ? discordStatus : "Fetching"}</h5>
                        <div className="">
                        <DiscordStatus/>
                        </div>
                        <h6 className="brr">{formatTime(currentTime)}</h6>
                    </div>
                </div>
                <div className="w-auto  md:w-96 md:absolute right-0 md:-mt-81 mr-16 text-primary-brown mt-12 ml-3">
                    <h1 className="brrr text-md text-primary-brown ml-1 w-44 md:hidden md:mb-4 inline ">
                        <span className="text-idkfrl font-medium text-3xl text-pu">Bio</span>
                    </h1>
                    <h5 className=" md:mt-[10vh] md:text-[20px] ">
                        Yoo, I’m Vikas! :] I’m a ‎
                        <span className="bio_span bg-idkfr rounded-md font-medium">
                            {/* <a
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content={`${Math.floor(ageInSeconds)}.${(ageInSeconds % 1).toFixed(2).substring(2)}`}
                            data-tooltip-place="top"
                        >
                            15
                        </a> */}18
                        </span>{" "}
                        year old creative frontend developer and freelancer based in India. I’ve taken
                        coding seriously since ‎
                        <span className="bio_span bg-idkfr rounded-md font-medium -z-10">
                            2024
                        </span>
                        , and have been freelancing since ‎
                        <span className="bio_span bg-idkfr rounded-md font-medium">2024</span>
                        . Recently, however, I’ve grown a knack for giving back to the
                        community. I like contributing to ‎
                        <span className="bio_span bg-idkfr rounded-md font-medium">
                            <a
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="🤓"
                                data-tooltip-place="top"
                            >
                                open source
                            </a>
                        </span>{" "}
                        as a web developer. Currently struggling with React and Nodejs.
                    </h5>
                </div>
            </div>


            <Tooltip id="my-tooltip" />
            
        </>
    );
};

export default Profile;